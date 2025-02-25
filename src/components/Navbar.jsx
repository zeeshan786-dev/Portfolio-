// import React, { useState } from "react";
// import pic from "../../public/photo.avif";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";
// function Navbar() {
//   const [menu, setMenu] = useState(false);
//   const navItems = [
//     {
//       id: 1,
//       text: "Home",
//     },
//     {
//       id: 2,
//       text: "About",
//     },
//     {
//       id: 3,
//       text: "Portfolio",
//     },
//     {
//       id: 4,
//       text: "Experiance",
//     },
//     {
//       id: 5,
//       text: "Contact",
//     },
//   ];
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
//         <div className="flex justify-between items-center h-16">
//           <div className=" flex space-x-2">
//             <img src={pic} className="h-12 w-12 rounded-full" alt="" />
//             <h1 className="font-semibold text-xl cursor-pointer">
//              <span className="text-green-500 text-2xl">Z</span>eeshan
//               <p className="text-sm">Web & App Developer</p>
//             </h1>
//           </div>
//           {/* desktop navbar */}
//           <div>
//             <ul className="hidden md:flex space-x-8">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 duration-200 cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <div onClick={() => setMenu(!menu)} className="md:hidden">
//               {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
//             </div>
//           </div>
//         </div>
//         {/* mobile navbar */}
//         {menu && (
//           <div className="bg-white">
//             <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 duration-200 font-semibold cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     onClick={() => setMenu(!menu)}
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 1,
      text: "Home",
      icon: "🏠"
    },
    {
      id: 2,
      text: "About",
      icon: "👤"
    },
    {
      id: 3,
      text: "PortFolio",
      icon: "📂"
    },
    {
      id: 4,
      text: "Experience",
      icon: "💼"
    },
    {
      id: 5,
      text: "Contact",
      icon: "📧"
    },
  ];

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto px-4 md:px-12 h-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
              <img 
                src="/api/placeholder/100/100" 
                alt="Zeeshan" 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">
                <span className="text-green-500 text-3xl">Z</span>eeshan
              </h1>
              <p className="text-xs text-gray-600 font-medium -mt-1">Web & App Developer</p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, icon }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    activeClass="active"
                    className="relative px-3 py-2 group cursor-pointer"
                  >
                    <span className="font-medium text-gray-700 hover:text-green-500 transition-colors duration-300">
                      {text}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Hire Me
              </button>
            </ul>

            {/* Mobile Menu Toggle */}
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              <div className="relative w-8 h-8 cursor-pointer flex items-center justify-center">
                <div className={`w-6 transition-all duration-300 ease-in-out ${menu ? 'rotate-45 translate-y-1.5' : ''}`}>
                  <span className={`block h-0.5 rounded-sm bg-gray-700 transition-all duration-300 ${menu ? 'w-6' : 'w-6 mb-1.5'}`}></span>
                  <span className={`block h-0.5 rounded-sm bg-gray-700 mb-1.5 transition-all duration-300 ${menu ? 'opacity-0' : 'opacity-100 w-4'}`}></span>
                  <span className={`block h-0.5 rounded-sm bg-gray-700 transition-all duration-300 ${menu ? 'w-6 -rotate-90 -translate-y-1.5' : 'w-5'}`}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Navbar */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ${menu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col h-screen items-center justify-center">
            <ul className="flex flex-col items-center space-y-6 text-xl">
              {navItems.map(({ id, text, icon }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    activeClass="active"
                    className="flex items-center space-x-2 text-gray-800 hover:text-green-500 transition-colors duration-300"
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="font-medium">{text}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-6">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Add extra padding to prevent content from hiding behind the fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;