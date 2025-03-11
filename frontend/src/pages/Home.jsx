import React from 'react'


import Header from './../components/Header';

import NewsPortal from "../components/NewsPortal"
import Testimonial from '../components/TestimoNiyal';
import ClientLogo from '../components/ClintLogo';
import ContactUs from '../components/ContactFrom';
import Experience from '../components/Experience';


const Home = () => {
  return (
    <div>


  
     
 <Header></Header>

 <NewsPortal></NewsPortal>
 

 <Experience></Experience>

 

 <Testimonial ></Testimonial>
 <ClientLogo></ClientLogo>

 <ContactUs></ContactUs>

 

      
    </div>
  )
}

export default Home
