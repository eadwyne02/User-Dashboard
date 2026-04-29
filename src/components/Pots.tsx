import { useNavigate } from "react-router-dom"
import { pots } from "../data/mockData"
export default function Pots(){
    const navigate = useNavigate()
    return(
        <div className="bg-white mt-8 px-5 rounded-2xl pb-5">
            <div className="flex justify-between py-4 items-center">
                <p className="text-xl font-bold text-gray-900 md:text-2xl">Pots</p>
                <button onClick={() => navigate('/pots')} className="flex items-center gap-2 text-gray-500 font-bold text-sm cursor-pointer md:text-lg">See Details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M9 18l6-6-6-6" /> </svg>
                </button>
            </div>
        
            <div className="md:grid md:grid-cols-[1fr_1.8fr] gap-5">
                <div className="bg-[#f5f5f0] py-5 md:py-2 rounded-2xl pl-4 flex gap-5 md:gap-2 items-center md:w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"className="text-teal-600">{}<path d="M8 3h8" /> <path d="M7 6h10" /> {}<rect x="5" y="6" width="14" height="15" rx="3" />{/* Dollar sign */}<path d="M12 9v1m0 4v1" /><path d="M10.5 10.5a1.5 1.5 0 0 1 3 0c0 1-1.5 1.5-1.5 2.5a1.5 1.5 0 0 0 3 0" /></svg>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg text-gray-500">Total Saved</p>
                        <p className="text-4xl font-bold text-gray-900">$850</p>
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2 pb-3 md:w-full">
                    {pots.map((pot) =>(
                        <div key={pot.id} className="flex items-center gap-6">
                            <div className={`${pot.color} h-20 md:h-16 rounded-md w-2`}></div>
                            <div className="flex flex-col gap-2 md:gap-1 ">
                                <p className="text-sm text-gray-500 md:text-[1rem]">{pot.name}</p>
                                <p className="text-2xl font-bold text-gray-800">${pot.amount.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}