// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa6";
// function Footer() {
//   return (
//     <>
//       <hr />
//       <footer className="py-12">
//         <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
//           <div className=" flex flex-col items-center justify-center">
//             <div className="flex space-x-4">
//               <FaFacebook size={24} />
//               <FaTwitter size={24} />
//               <FaInstagram size={24} />
//               <FaLinkedinIn size={24} />
//             </div>
//             <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
//               <p className="text-sm">
//                 &copy; 2025 Your Company. All rights reserved.
//               </p>
//               <p className="text-sm">Supportive Partner ❤️ Zeeshan</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;


import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-6xl mx-auto mt-12"></div>
      
      <footer className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Get in Touch
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-500" />
                  <span className="text-sm">hello@example.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-blue-500" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span className="text-sm">New York, NY 10001</span>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300">Home</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300">Portfolio</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300">Services</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Subscribe
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center md:text-right">Stay updated with our latest news and projects.</p>
              <div className="flex w-full max-w-xs">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow">
                <FaFacebook size={20} className="text-blue-600" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow">
                <FaTwitter size={20} className="text-blue-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-pink-100 flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow">
                <FaInstagram size={20} className="text-pink-600" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow">
                <FaLinkedinIn size={20} className="text-blue-700" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-200 pt-8 flex flex-col items-center">
              <p className="text-sm text-gray-600 mb-2">
                &copy; {currentYear} Your Company. All rights reserved.
              </p>
              <p className="text-sm flex items-center text-gray-600">
                Designed with <FaHeart className="text-red-500 mx-1" size={14} /> by{" "}
                <span className="ml-1 font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Zeeshan
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;