import { useState } from "react";
import { billsDue, billsList } from "../data/mockData";

type FilterType = 'All' | 'Paid' | 'Upcoming' | 'Overdue';

const statusStyle = (status: string) => {
  if (status === "Paid") return "bg-[#e1f5ee] text-[#0f6e56]";
  if (status === "Upcoming") return "bg-[#faeeda] text-[#854f0b]";
  return "bg-[#fcebeb] text-[#ae4444]";
};

const FILTERS: FilterType[] = ["All", "Paid", "Upcoming", "Overdue"];

export default function RecurringBillsPage() {
  const [filter, setFilter] = useState<FilterType>("All");

  const displayed = filter === "All"
    ? billsList
    : billsList.filter((bill) => bill.status === filter);

  const totalBills = billsList.reduce((s, b) => s + b.amount, 0);
  const totalPaid = billsList.filter(b => b.status === "Paid").reduce((s, b) => s + b.amount, 0);
  const totalUpcoming = billsList.filter(b => b.status === "Upcoming").reduce((s, b) => s + b.amount, 0);
  const totalOverdue = billsList.filter(b => b.status === "Overdue").reduce((s, b) => s + b.amount, 0);

  return (
    <div className="bg-[#f5f5f0] min-h-screen px-5 pt-5 pb-10">

      <p className="font-medium text-gray-900 text-xl mb-4">Recurring Bills</p>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 mb-1 md:text-[1rem] lg:text-[1rem]">Total bills</p>
            <p className="text-2xl font-medium text-gray-900">${totalBills.toFixed(2)}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-3.5">
          <p className="text-xs text-gray-400 mb-1 md:text-[1rem] lg:text-[1rem]">Paid</p>
          <p className="text-xl font-medium text-[#0f6e56]">${totalPaid.toFixed(2)}</p>
          <p className="text-[11px] text-gray-400 mt-0.5 md:text-[0.8rem] lg:text-[0.8rem]">{billsList.filter(b => b.status === "Paid").length} bills</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-3.5">
          <p className="text-xs text-gray-400 mb-1 md:text-[1rem] lg:text-[1rem]">Upcoming</p>
          <p className="text-xl font-medium text-[#854f0b]">${totalUpcoming.toFixed(2)}</p>
          <p className="text-[11px] text-gray-400 mt-0.5 md:text-[0.8rem] lg:text-[0.8rem]">{billsList.filter(b => b.status === "Upcoming").length} bills</p>
        </div>

        <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-3.5 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 mb-1 md:text-[1rem] lg:text-[1rem]">Overdue</p>
            <p className="text-xl font-medium text-[#ae4444]">${totalOverdue.toFixed(2)}</p>
          </div>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#fcebeb] text-[#ae4444] md:text-[0.8rem] lg:text-[0.8rem]">
            Needs attention
          </span>
        </div>
      </div>

      <div className="bg-[#fef9f0] border border-[#f0d9a8] rounded-2xl p-4 mb-4">
        <div className="flex items-center gap-1.5 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a24f0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <p className="text-xs font-medium text-[#a24f0b] md:text-[0.8rem] lg:text-[0.8rem]">Due in the next 7 days</p>
        </div>
        <div className="flex flex-col gap-2">
          {billsDue.map((bill, i) => (
            <div key={bill.id}>
              <div className="flex justify-between items-center py-1">
                <p className="text-sm font-medium text-[#633806] md:text-[1rem] lg:text-[1rem]">{bill.descripion}</p>
                <p className="text-xs text-[#a24f0b] md:text-[0.8rem] lg:text-[0.8rem]">Due {bill.date}</p>
                <p className="text-sm font-medium text-[#633806] md:text-[1rem] lg:text-[1rem]">${bill.amount.toFixed(2)}</p>
              </div>
              {i < billsDue.length - 1 && <div className="h-px bg-[#f0d9a8]" />}
            </div>
          ))}
        </div>
      </div>
          
      <div className="flex gap-2 mb-3 overflow-x-auto pb-1 z-50">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-200 text-gray-500"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

  
      <div className="flex flex-col gap-2.5">
        {displayed.map((bill) => (
          <div key={bill.id} className="bg-white rounded-2xl border border-gray-100 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: bill.color }} />
              <div>
                <p className="font-medium text-gray-900 text-[15px] md:text-[1rem] lg:text-[1rem]">{bill.description}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-xs text-gray-400 md:text-[0.8rem] lg:text-[0.8rem]">Monthly · {bill.date}</p>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full md:text-[0.8rem] lg:text-[0.8rem] ${statusStyle(bill.status)}`}>
                    {bill.status}
                  </span>
                </div>
              </div>
            </div>
            <p className="font-medium text-gray-900 text-[15px] md:text-[1rem] lg:text-[1rem]">${bill.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}