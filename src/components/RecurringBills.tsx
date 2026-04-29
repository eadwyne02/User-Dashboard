import { useNavigate} from "react-router-dom"
import { bills } from "../data/mockData";

export default function(){
  const navigate = useNavigate()
    return(
        <div className="mt-5 bg-white pt-5 px-5 pb-5 rounded-2xl">
          <div className="flex justify-between items-center pb-5">
            <p className="text-2xl font-bold text-gray-800 md:text-3xl">Recurring Bills</p>
            <button onClick={()=>navigate("/bills") } className="flex items-center font-bold gap-2 text-sm cursor-pointer text-gray-600 md:text-[1rem]">See Details
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M9 18l6-6-6-6" /> </svg>
            </button>
          </div>
          <div>
            {bills.map((bill) =>(
              <div key={bill.id}>
                {<div className= "rounded-lg mb-4 flex justify-end" style={{backgroundColor:bill.color}}>
                <div className="flex w-[99%] rounded-md bg-[#f5f5f0] justify-between px-4 py-5 items-center">
                  <p className="font-medium text-gray-600 md:text-xl">{bill.description}</p>
                  <p className="font-bold text-gray-800 md:text-lg">${bill.amount.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
                </div>
            </div> }
              </div>
            ))}
            
          </div>
        </div>
        )
}