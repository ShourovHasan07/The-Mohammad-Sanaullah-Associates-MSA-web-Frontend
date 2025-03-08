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
            </NavLink>
            <NavLink to={"/services"}>
               <li className="py-1 text-xl font-semibold">Services</li>
            </NavLink>
            <NavLink to={"/about"}>
               <li className="py-1 text-xl font-semibold">About</li>
            </NavLink>
            <NavLink to={"/contact"}>
               <li className="py-1 text-xl font-semibold">Contact</li>
            </NavLink>
         </ul>

         {/* Create Account button or profile picture */}
         <div className='flex items-center gap-4'>
            {token ? (
               <div className="flex items-center gap-2">
                  <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
                  <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
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
