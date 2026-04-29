// import { useNavigate } from "react-router-dom";
import Transactions from "../components/Transactions";
import { transactions } from "../data/mockData";

export default function () {
//   const navigate = useNavigate();

  const handleDownload = () => {
    const headers = ["Name", "Description", "Amount", "Date", "Type"];
    const rows = transactions.map((t) => [
      t.name,
      t.description,
      t.amount > 0 ? `+${t.amount}` : t.amount,
      t.date,
      t.amount > 0 ? "Income" : "Expense",
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-5 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-gray-800">
              Transactions
            </h1>
          </div>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      <div className="px-5 py-5 max-w-3xl mx-auto space-y-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">Total Income</p>
            <p className="text-xl font-semibold text-teal-600">
              +${totalIncome.toFixed(2)}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">Total Expenses</p>
            <p className="text-xl font-semibold text-red-500">
              -${Math.abs(totalExpenses).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-50">
            <p className="text-sm font-medium text-gray-500">All transactions</p>
          </div>
          <div className="px-5">
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}