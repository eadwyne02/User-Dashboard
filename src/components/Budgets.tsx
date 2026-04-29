import { useNavigate} from "react-router-dom"
import {PieChart, Pie, Cell} from "recharts";
import { budgets, budgetLimit } from "../data/mockData";

export default function(){
   const navigate = useNavigate()
    return(
        <div className="bg-white rounded-2xl mt-5 pt-5 px-5 pb-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold text-2xl text-gray-700 md:text-3xl">Budgets</p>
            <button onClick={() => navigate('/budgets')} className="flex items-center font-bold gap-2 text-sm cursor-pointer text-gray-700 md:text-[1rem]">See Details
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M9 18l6-6-6-6" /> </svg>
            </button>
          </div>
          <div className="relative flex justify-center items-center">
              <PieChart width={200} height={200}>
                <Pie data={budgets} cx={95} cy={95} innerRadius={65} outerRadius={95} dataKey="amount" strokeWidth={2}>
                  {budgets.map((budget) =>(
                    <Cell key={budget.id} fill={budget.color}/>
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute flex flex-col items-center">
                <p className="text-2xl font-bold text-gray-900">
                  ${budgets.reduce((sum, b) => sum + b.amount, 0).toLocaleString()}
                </p>
                <p className=" text-xs text-gray-500 md:text-[1rem]">of ${budgetLimit.toLocaleString()} limit</p>
              </div>
          </div>
          {<div className="grid grid-cols-2 gap-2 mt-4">
            {budgets.map((budget) => (
              <div key={budget.id} className="flex items-center gap-3">
                <div className="w-1 h-10 rounded-full" style={{ backgroundColor: budget.color }}></div>
                <div>
                  <p className="text-sm text-gray-500 md:text-[1rem]">{budget.name}</p>
                  <p className="text-lg font-bold text-gray-900 ">${budget.amount.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div> }
        </div>
    )
}