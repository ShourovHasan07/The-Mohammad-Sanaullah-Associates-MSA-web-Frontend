import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from './../assets/assets_frontend/assets';

const NavBar = () => {
   const navigate = useNavigate();
   const [token, setToken] = useState(true); // Manage token state properly
   const [showMenu, setShowMenu] = useState(false);

   

   return (
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
         {/* Logo image, clicking will redirect to the homepage */}
         <div className='flex'>
            <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
         </div>

         {/* Navigation links */}
         <ul className="hidden md:flex items-start gap-5 font-medium">
            <NavLink to={"/"}>
               <li className="py-1 text-xl font-semibold">Home</li>
               <hr className='border-non outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={"/services"}>
               <li className="py-1 text-xl font-semibold">Services</li>
               <hr className='border-non outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={"/about"}>
               <li className="py-1 text-xl font-semibold">About</li>
               <hr className='border-non outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={"/contact"}>
               <li className="py-1 text-xl font-semibold">Contact</li>
               <hr className='border-non outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={"/team"}>
               <li className="py-1 text-xl font-semibold">Our Team</li>
               <hr className='border-non outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={"/client"}>
               <li className="py-1 text-xl font-semibold"> Clients </li>
               <hr className='border-non outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
            </NavLink>
         </ul>

         {/* Create Account button or profile picture */}
         <div className='flex items-center gap-4'>
            {token ? (
               <div className="flex items-center gap-2 cursor-pointer group relative ">
                  <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
                  <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block"  >
                
                        <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 " >
                           < p className='hover:text-black cursor-pointer'  onClick={()=>navigate('my-profile')} >My Profile </p>
                        
                           <p  onClick={()=>navigate('log-out')} >LogOut</p>
                        </div>

                </div>


               </div>
            ) : (
               <button onClick={() => navigate('/login')} className="bg-blue-600 text-white rounded-lg py-3 px-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out">
                  Create Account
               </button>
            )}
         </div>
      </div>
   );
}

export default NavBar;
