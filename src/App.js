// import logo from './logo.svg';
import './App.css';
// import Hello from './01/Hello';
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import Traffic from './06/Traffic';
//  import MyRef from './07/MyRef';
import MyRefAdd from './07/MyRefAdd';
import RouterMain from './09/RouterMain';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiHomeHeartFill } from 'react-icons/ri';
function App() {
  return (
      <BrowserRouter>
        <div className='flex flex-col w-full min-h-screen mx-auto'>
            <header className='flex justify-between items-center text-xl font bold h-20'>
              <p>리액트 기초</p>
              <ul className='flex justify-center items-center text-sm'>
                <li className='mx-2 p-2 rounded-md 
                               hover:bg-white hover:text-blue-600'>
                    <Link to='/'>시계</Link>                
                </li>
                <li className='mx-2 p-2 rounded-md 
                               hover:bg-white hover:text-blue-600'>
                    <Link to='/lotto'>로또</Link>                
                </li>
                <li className='mx-2 p-2 rounded-md 
                               hover:bg-white hover:text-blue-600'>
                    <Link to='/traffic'>교통사고</Link>                
                </li>
                <li className='mx-2 p-2 rounded-md 
                               hover:bg-white hover:text-blue-600'>
                    <Link to='/add'>더하기</Link>                
                </li>
               </ul>
            </header>  
            <main className='grow w-full flex justify-center items-start overflow-y-suto'>
              <Routes>
                <Route path='/' element={<MyClock/>}/>
                <Route path='/lotto' element={<Lotto/>}/>
                <Route path='/traffic' element={<Traffic/>}/>
                <Route path='/add' element={<MyRefAdd/>}/>
              </Routes>
            </main>
            <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
                 ㈜ Kim Na Eun  
           </footer>
        </div>
      </BrowserRouter>
  ) 
}

export default App;
