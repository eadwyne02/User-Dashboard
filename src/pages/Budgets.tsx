import { useState } from "react";
import { transactions, budgets, budgetLimit } from "../data/mockData";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function BudgetsPage() {
  const [monthIndex, setMonthIndex] = useState(3);
  const [openId, setOpenId] = useState<number | null>(null);
  const totalSpent = budgets.reduce((s, b) => s + b.amount, 0);
  const remaining = budgetLimit - totalSpent;
//   const overBudget = budgets.filter(b => b.amount >= budgetLimit / budgets.length).length;

  return (
    <div className="bg-[#f5f5f0] min-h-screen px-5 pt-5 pb-10">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-medium text-gray-900">Budgets</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMonthIndex(i => Math.max(0, i - 1))}
            className="w-7 h-7 rounded-lg border border-gray-200 bg-white flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <p className="text-sm font-medium text-gray-700 w-24 text-center mg:text-[1rem] lg:text-[1rem]">{MONTHS[monthIndex]}, 2026</p>
          <button onClick={() => setMonthIndex(i => Math.min(11, i + 1))} className="w-7 h-7 rounded-lg border border-gray-200 bg-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 mb-1 md:text-[1rem] lg:text-[1rem]">Total budgeted</p>
            <p className="text-2xl font-medium text-gray-900 font-bold">${budgetLimit.toLocaleString()}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-3.5">
          <p className="text-xs text-gray-400 mb-1 md:text-[1rem] lg:text-[1rem]">Total spent</p>
          <p className="text-xl font-medium text-gray-900">${totalSpent.toLocaleString()}</p>
          <p className="text-[11px] text-gray-400 mt-0.5 md:text-[0.8rem] lg:text-[0.8rem]">{Math.round((totalSpent / budgetLimit) * 100)}% of budget</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-3.5">
          <p className="text-xs text-gray-400 mb-1 md:text-[1rem]">Remaining</p>
          <p className={`text-xl font-medium  ${remaining >= 0 ? "text-[#0f6e56]" : "text-[#ae4444]"}`}>${Math.abs(remaining).toLocaleString()}</p>
          <p className="text-[11px] text-gray-400 mt-0.5 md:text-[0.8rem] md:text-[0.8rem]">{remaining >= 0 ? "available" : "over budget"}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-400 md:text-[1rem] lg:text-[1rem]">Budget used</p>
          <p className="text-xs font-medium text-gray-700 md:text-[1rem] lg:text-[1rem]">${totalSpent} / ${budgetLimit}</p>
        </div>
        <div className="h-[6px] w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-gray-900 transition-all duration-500" style={{ width: `${Math.min((totalSpent / budgetLimit) * 100, 100)}%` }}/>
        </div>
        <div className="flex gap-2 mt-3 flex-wrap">
          {budgets.map(b => (
            <div key={b.id} className="flex items-center gap-1">
              <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full" style={{ background: b.color }} />
              <p className="text-[11px] text-gray-400 md:text-[0.8rem] lg:text-[0.8rem]">{b.name}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-2 ml-1 md:text-[1rem] lg:text-[1rem]">Categories</p>
      <div className="flex flex-col gap-2.5">
        {budgets.map((budget) => {
          const pct = Math.min(Math.round((budget.amount / budgetLimit) * 100), 100);
          const isOpen = openId === budget.id;
          const related = transactions.filter(t => t.amount < 0).slice(0, 3);

          return (
            <div key={budget.id} className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: budget.color }} />
                  <p className="font-medium text-[15px] text-gray-900 md:text-[1rem] lg:text-[1rem]">{budget.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm text-gray-900 font-medium md:text-[1rem] lg:text-[1rem]">
                    ${budget.amount}
                    <span className="text-gray-400 font-normal md:text-[1rem] lg:text-[1rem]"> / ${budgetLimit}</span>
                  </p>
                  <button
                    onClick={() => setOpenId(isOpen ? null : budget.id)}
                    className={`transition-transform duration-300 text-gray-400 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-3 h-[5px] w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: budget.color }}
                />
              </div>

              <div className="flex justify-between mt-2">
                <p className="text-xs text-gray-400 md:text-[0.8rem] lg:text-[0.8rem]">{pct}% used</p>
                <p className="text-xs text-gray-400 md:text-[0.8rem] lg:text-[0.8rem]">${budgetLimit - budget.amount} left</p>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                <div className="border-t border-gray-100 pt-3 flex flex-col gap-0">
                  {related.map((t, i) => (
                    <div key={t.id}>
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full" />
                          <div>
                            <p className="text-[13px] font-medium text-gray-900">{t.name}</p>
                            <p className="text-[11px] text-gray-400">{t.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[13px] font-medium text-[#ae4444]">
                            -${Math.abs(t.amount).toFixed(2)}
                          </p>
                          <p className="text-[11px] text-gray-400">{t.date}</p>
                        </div>
                      </div>
                      {i < related.length - 1 && <div className="h-px bg-gray-100" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}