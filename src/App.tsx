import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Overview from './pages/Overview'
import Transactions from './pages/Transactions'
import BottomNav from './components/BottomNav'
import Budgets from './pages/Budgets'
import Pots from './pages/Pots'
import Bills from './pages/Bills'
function App(){
  return(
    <BrowserRouter>
      <div className='lg:grid lg:grid-cols-[240px_1fr] bg-[#f5f5f0]'>
        <div className='hidden lg:block w-[240px]' />
          <div className='hidden lg:flex fixed top-0 left-0 h-screen w-[240px] '>
            <BottomNav />
          </div>
          <div className='min-h-screen pb-20 lg:pb-0'>
            <Routes>
              <Route path='/' element={<Overview />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/budgets' element={<Budgets />} />
              <Route path='/pots' element={<Pots />} />
              <Route path='/bills' element={<Bills />} />
            </Routes>
          </div>
          <div className='fixed bottom-0 left-0 right-0 lg:hidden'>
            <BottomNav />
          </div>
      </div>
    </BrowserRouter>
  )
}
export default App