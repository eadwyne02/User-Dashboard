import { transactions } from "../data/mockData"
interface TransactionsProps {
  limit?: number;
}

export default function Transactions({ limit }: TransactionsProps) {
  const displayed = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div> 
      <div className="">
        {displayed.map((transaction) => (
          <div key={transaction.id}>
            <div className="flex items-center justify-between py-4">
              <div className="flex gap-4 items-center">
                <img src={transaction.avatar} alt={transaction.description} className="h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-teal-100" />
                <p className="font-bold text-gray-700 md:text-lg">{transaction.name}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className={`text-sm font-bold px-2 py-0.5 rounded-lg md:text-[1rem] ${transaction.amount > 0 ? 'text-teal-600 bg-teal-50' : 'text-red-500 bg-red-50'}`}>
                  {transaction.amount > 0 ? "+" : "-"} $ {Math.abs(transaction.amount).toLocaleString()}
                </p>
                <p className=" md:text-[1rem]">{transaction.date}</p>
              </div>
            </div>
            <div className="bg-[#f5f5f0] h-[2px] w-full rounded-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
}