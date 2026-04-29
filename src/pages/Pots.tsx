import { pots } from "../data/mockData";

const colorMap: Record<string, string> = {
  "bg-teal-800": "#0f766e",
  "bg-teal-400": "#2dd4bf",
  "bg-[#625f70]": "#625f70",
  "bg-[#eed1ba]": "#eed1ba",
};

function PotCard({ name, amount, goal, color }: { name: string; amount: number; goal: number; color: string }) {
  const hex = colorMap[color] ?? "#888";
  const pct = Math.round((amount / goal) * 100);
  const left = goal - amount;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2 pt-1">
          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: hex }} />
          <p className="font-medium text-[15px] text-gray-900">{name}</p>
        </div>
        <div className="text-right">
          <p className="text-[22px] font-medium text-gray-900">${amount.toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-0.5">of ${goal.toLocaleString()}</p>
        </div>
      </div>

      <div className="h-[5px] w-full bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: hex }} />
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">{pct}%</span>
        {pct <= 20 ? (
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#FAEEDA] text-[#854F0B]">
            Just started
          </span>
        ) : (
          <span className="text-xs text-gray-400">${left.toLocaleString()} left</span>
        )}
      </div>

      <div className="flex gap-2 pt-1">
        <button className="flex-1 bg-gray-900 text-white text-[13px] font-medium py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
          + Add
        </button>
        <button className="flex-1 border border-gray-200 text-gray-900 text-[13px] font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
          − Withdraw
        </button>
      </div>
    </div>
  );
}

export default function PotsPage() {
  const totalSaved = pots.reduce((sum, p) => sum + p.amount, 0);
  const totalGoal = pots.reduce((sum, p) => sum + p.goal, 0);
  const totalPct = Math.round((totalSaved / totalGoal) * 100);

  return (
    <div className="bg-[#f5f5f0] min-h-screen px-4 pt-4 pb-8 md:px-8 lg:px-10 lg:pt-6">

      <div className="flex justify-between items-center mb-4 lg:mb-6">
        <p className="text-xl font-medium text-gray-900 lg:text-2xl">Pots</p>
        <button className="flex items-center gap-1.5 bg-gray-900 text-white text-[13px] font-medium px-3.5 py-2 rounded-xl hover:bg-gray-800 transition-colors">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          New pot
        </button>
      </div>

      <div className="lg:flex lg:gap-6 lg:items-start">
        <div className="lg:w-72 lg:flex-shrink-0 lg:sticky lg:top-6 space-y-3 mb-4 lg:mb-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#E1F5EE] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3h8" /><path d="M7 6h10" />
                  <rect x="5" y="6" width="14" height="15" rx="3" />
                  <path d="M12 9v1m0 4v1" />
                  <path d="M10.5 10.5a1.5 1.5 0 0 1 3 0c0 1-1.5 1.5-1.5 2.5a1.5 1.5 0 0 0 3 0" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Total saved</p>
                <p className="text-2xl font-medium text-gray-900">${totalSaved.toLocaleString()}</p>
                <div className="mt-2 h-[4px] w-40 lg:w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1D9E75] rounded-full" style={{ width: `${totalPct}%` }} />
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">of ${totalGoal.toLocaleString()}</p>
              <p className="text-base font-medium text-[#0F6E56]">{totalPct}% to goal</p>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-2 bg-white rounded-2xl border border-gray-100 p-4">
            <p className="text-xs font-medium text-gray-500 mb-1">Breakdown</p>
            {pots.map((pot) => {
              const hex = colorMap[pot.color] ?? "#888";
              const pct = Math.round((pot.amount / pot.goal) * 100);
              return (
                <div key={pot.id} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: hex }} />
                  <p className="text-xs text-gray-600 flex-1 truncate">{pot.name}</p>
                  <p className="text-xs font-medium text-gray-800">{pct}%</p>
                </div>
              );
            })}
          </div>
        </div>


        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {pots.map((pot) => (
            <PotCard key={pot.id} {...pot} />
          ))}
        </div>

      </div>
    </div>
  );
}