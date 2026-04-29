import { balance } from "../data/mockData"
export default function BalanceCards(){
    return(
        <div className="flex flex-col gap-4 md:flex-row gap-5">
            <div className="px-5 bg-gray-900  rounded-2xl py-5 md:w-full">
              <p className="text-gray-300 text-xs mb-1 md:text-lg">Current Balance</p>
              <p className="text-gray-100 text-3xl font-bold">${balance.current.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
            </div>

            <div className="px-5 bg-white rounded-2xl py-5 md:w-full">
                <p className="text-gray-500 text-xs mb-1 md:text-lg">Income</p>
                <p className="text-gray-900 text-3xl font-bold">${balance.income.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
            </div>

            <div className="px-5 bg-white rounded-2xl py-5 md:w-full ">
                <p className="text-gray-500 text-xs mb-1 md:text-lg">Expenses</p>
                <p className="text-gray-900 text-3xl font-bold">${balance.expenses.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
            </div>
          </div>
    )
}