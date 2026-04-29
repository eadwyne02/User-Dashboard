import { useNavigate, useLocation } from "react-router-dom"

export default function BottomNav(){
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path
  
  return(
        <div className=" bg-[#201f24] border-t border-gray-100 rounded-t-2xl pt-2 px-3 lg:border-none lg:rounded-tl-none lg:h-full ">

      <div className="flex justify-between items-end lg:flex-col lg:items-start lg:gap-4 lg:pl-4 lg:pr-5">
        <p className="hidden lg:flex text-white text-2xl font-bold mt-3">Finance</p>
        <button onClick={() => navigate('/')} className={`cursor-pointer px-5 pb-[2px] rounded-t-md pt-1 lg:py-[6px] flex flex-col items-center justify-center gap-[1px] lg:flex-row lg:gap-2 lg:w-full lg:justify-start lg:rounded-t-none lg:rounded-r-md ${isActive('/') ? 'bg-white text-teal-600 border-b-2 border-teal-600 lg:border-l-3 lg:border-b-0' : 'text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
          </svg>
          <span className="text-xs font-medium lg:text-[1rem]">Home</span>
        </button>
        <button onClick={() => navigate('/transactions')} className={`cursor-pointer px-5 pb-[2px] rounded-t-md pt-1 lg:py-[6px]  flex flex-col items-center justify-center gap-[1px] lg:flex-row lg:gap-2 lg:w-full lg:justify-start lg:rounded-t-none lg:rounded-r-md ${isActive('/transactions')? 'bg-white text-teal-600  border-b-2 border-teal-600 lg:border-l-3 lg:border-b-0': 'text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 16V4m0 0L3 8m4-4l4 4" />
            <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <span className="text-xs font-medium lg:text-[1rem]">Transactions</span>
        </button>
        <button onClick={() => navigate('/budgets')} className={`cursor-pointer px-5 pb-[2px] rounded-t-md pt-1 lg:py-[6px] lg:py-[6px]  flex flex-col items-center justify-center gap-[1px] lg:flex-row lg:gap-2 lg:w-full lg:justify-start lg:rounded-t-none lg:rounded-r-md ${isActive('/budgets')? 'bg-white text-teal-600  border-b-2 border-teal-600 lg:border-l-3 lg:border-b-0': 'text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 3" />
          </svg>
          <span className="text-xs font-medium lg:text-[1rem]">Budgets</span>
        </button>
        <button onClick={() => navigate('/pots')} className={`cursor-pointer px-5 pb-[2px] rounded-t-md pt-1 lg:py-[6px]  flex flex-col items-center justify-center gap-[1px] lg:flex-row lg:gap-2 lg:w-full lg:justify-start lg:rounded-t-none lg:rounded-r-md ${isActive('/pots')? 'bg-white text-teal-600  border-b-2 border-teal-600 lg:border-l-3 lg:border-b-0': 'text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3h8M7 6h10" />
            <rect x="5" y="6" width="14" height="15" rx="3" />
            <path d="M12 9v1m0 4v1" />
            <path d="M10.5 10.5a1.5 1.5 0 0 1 3 0c0 1-1.5 1.5-1.5 2.5a1.5 1.5 0 0 0 3 0" />
          </svg>
          <span className="text-xs font-medium lg:text-[1rem]">Pots</span>
        </button>
        <button onClick={() => navigate('/bills')} className={`cursor-pointer px-5 pb-[2px] rounded-t-md pt-1 lg:py-[6px]  flex flex-col items-center justify-center gap-[1px] lg:flex-row lg:gap-2 lg:w-full lg:justify-start lg:rounded-t-none lg:rounded-r-md ${isActive('/bills')? 'bg-white text-teal-600  border-b-2 border-teal-600 lg:border-l-3 lg:border-b-0': 'text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span className="text-xs font-medium lg:text-[1rem]">Bills</span>
        </button>
      </div>
    </div>
    )
}