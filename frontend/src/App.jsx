
import { Route,Routes } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Service from './pages/Service'
import About from './pages/About'
import NavBar from './components/NavBar';

function App() {
  

  return (
    <div className='mx-4 sm:max-[10%]:' >

    <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/services' element= {<Service/>} />
      </Routes>
    </div>
  )
}

export default App
