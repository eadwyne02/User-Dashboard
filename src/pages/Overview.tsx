import { useNavigate } from "react-router-dom"
import BalanceCards from "../components/BalanceCards";
import Pots from "../components/Pots";
import Transactions from "../components/Transactions";
import Budgets from "../components/Budgets";
import RecurringBills from "../components/RecurringBills";
export default function(){
    const navigate = useNavigate()
    return(
        <div className="min-h-screen h-full bg-[#f5f5f0] font-sans w-full">
                <div className="px-5">
                  <h1 className="text-2xl font-bold text-gray-900 py-4 md:text-3xl">Overview</h1>
                  <BalanceCards />
                  <Pots />
                  <div className="bg-white mt-5 rounded-2xl pt-5 px-5 pb-3">
                    <div className="flex items-center justify-between mb-5">
                        <p className="text-2xl font-bold text-gray-800 md:text-3xl">Transactions</p>
                        <button onClick={() => navigate('/transactions')} className="flex items-center gap-2 text-gray-500 font-bold text-sm cursor-pointer md:text-[1rem]">See Details 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M9 18l6-6-6-6" /> </svg>
                        </button>
                    </div>
                  <Transactions limit={4}/>
                  </div>
                  <Budgets />
                  <RecurringBills />
                </div>
                
        </div>
    )
}