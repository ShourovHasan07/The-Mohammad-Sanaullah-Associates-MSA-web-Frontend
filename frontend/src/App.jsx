
import { Route,Routes } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Service from './pages/Service'
import About from './pages/About'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Team from './pages/Team';
import ClientLogoCard from './components/ClintLogo';
import SanaullahProfile from './components/SanaullahProfile';

function App() {
  

  return (
    <div className='mx-4 sm:max-[10%]:' >

    <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/login' element= {<Login/>} />

        <Route path='/services' element= {<Service/>} />
        <Route path='/team' element= {<Team/>} />
        <Route path='/client' element= {<ClientLogoCard/>} />
       
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/ms-profile' element= {<SanaullahProfile/>} />


      </Routes>

      <Footer></Footer>


    </div>
  )
}

export default App
