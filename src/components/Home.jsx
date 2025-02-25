// import React from "react";

import pic from "../../public/photo.avif";

// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { FaTelegram } from "react-icons/fa6";

// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa6";

// import { ReactTyped } from "react-typed";

// function Home() {
//   return (
//     <>
//       <div
//         name="Home"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
//       >
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
//             <span className="text-xl">Welcome In My Feed</span>
//             <div className="flex space-x-1 text-2xl md:text-4xl">
//               <h1>Hello, I'm a</h1>
//               {/* <span >Developer</span> */}
//               <ReactTyped
//                 className="text-red-700 font-bold"
//                 strings={["Developer", "Programmer", "Coder"]}
//                 typeSpeed={40}
//                 backSpeed={50}
//                 loop={true}
//               />
//             </div>
//             <br />
//             <p className="text-sm md:text-md text-justify">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Quisquam, recusandae consequatur. Accusamus sint libero eligendi
//               laborum fuga repudiandae? Asperiores tempore eos animi dolores
//               corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
//               cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
//             </p>
//             <br />
//             {/* social media icons */}
//             <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
//               <div className="  space-y-2">
//                 <h1 className="font-bold text-center ">Available on</h1>
//                 <ul className="flex space-x-5">
//                   <li>
//                     <a href="https://www.facebook.com/" target="_blank">
//                       <FaSquareFacebook className="text-2xl cursor-pointer" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://www.linkedin.com/" target="_blank">
//                       <FaLinkedin className="text-2xl cursor-pointer" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://www.youtube.com/" target="_blank">
//                       <IoLogoYoutube className="text-2xl cursor-pointer" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://t.me/" target="_blank">
//                       <FaTelegram className="text-2xl cursor-pointer" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className=" space-y-2">
//                 <h1 className="font-bold text-center">Currently working on</h1>
//                 <div className="flex space-x-5">
//                   <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
//                   <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
//                   <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
//                   <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
//             <img
//               src={pic}
//               className="rounded-full md:w-[450px] md:h-[450px]"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>

//       <hr />
//     </>
//   );
// }

// export default Home;


import React from "react";
import { ReactTyped } from "react-typed";
import { FaSquareFacebook, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Image Section - Mobile First */}
          <div className="md:w-2/5 md:order-2 relative">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-60 blur-sm animate-pulse"></div>
              <img
                src={pic}
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl relative z-10"
                alt="Developer Portrait"
              />
              
              {/* Tech Stack Floating Icons */}
              <div className="absolute -bottom-4 -left-1 z-20 bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
                <SiMongodb className="text-3xl text-green-500" />
              </div>
              <div className="absolute -top-4 left-6 z-20 bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
                <SiExpress className="text-3xl text-gray-700" />
              </div>
              <div className="absolute -top-4 right-6 z-20 bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
                <FaReact className="text-3xl text-blue-400" />
              </div>
              <div className="absolute -bottom-4 -right-1 z-20 bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
                <FaNodeJs className="text-3xl text-green-600" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-3/5 md:order-1 mt-8 md:mt-16 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-medium text-purple-600 inline-block relative">
                Welcome To My Portfolio
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 origin-bottom-left group-hover:scale-x-100 transition-transform duration-300"></span>
              </p>
              
              <div className="flex flex-col md:flex-row items-center md:items-baseline space-y-2 md:space-y-0 md:space-x-2">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Hello, I'm a</h1>
                <ReactTyped
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                  strings={["Developer", "Programmer", "Coder", "MERN Expert"]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop={true}
                />
              </div>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
              I create beautiful, responsive web applications using modern technologies. 
              With expertise in the MERN stack, I transform ideas into seamless digital experiences.
              My passion lies in building user-friendly interfaces that deliver exceptional performance
              and meet business objectives.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px]">
                View My Projects
              </button>
            </div>
            
            {/* Social and Technologies */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {/* Social Media */}
              <div className="space-y-4">
                <h2 className="font-bold text-lg relative inline-block">
                  Connect With Me
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
                </h2>
                <ul className="flex justify-center md:justify-start space-x-4">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="block bg-gray-100 p-3 rounded-full shadow hover:shadow-md transform hover:scale-110 transition-all duration-300">
                      <FaSquareFacebook className="text-2xl text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="block bg-gray-100 p-3 rounded-full shadow hover:shadow-md transform hover:scale-110 transition-all duration-300">
                      <FaLinkedin className="text-2xl text-blue-700" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="block bg-gray-100 p-3 rounded-full shadow hover:shadow-md transform hover:scale-110 transition-all duration-300">
                      <IoLogoYoutube className="text-2xl text-red-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank" rel="noreferrer" className="block bg-gray-100 p-3 rounded-full shadow hover:shadow-md transform hover:scale-110 transition-all duration-300">
                      <FaTelegram className="text-2xl text-blue-500" />
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="space-y-4">
                <h2 className="font-bold text-lg relative inline-block">
                  My Tech Stack
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500"></span>
                </h2>
                <div className="flex justify-center md:justify-start space-x-3">
                  <div className="group flex flex-col items-center">
                    <div className="p-3 bg-gray-100 rounded-lg shadow hover:shadow-md transform group-hover:scale-110 transition-all duration-300">
                      <SiMongodb className="text-2xl text-green-500" />
                    </div>
                    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">MongoDB</span>
                  </div>
                  <div className="group flex flex-col items-center">
                    <div className="p-3 bg-gray-100 rounded-lg shadow hover:shadow-md transform group-hover:scale-110 transition-all duration-300">
                      <SiExpress className="text-2xl text-gray-700" />
                    </div>
                    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Express</span>
                  </div>
                  <div className="group flex flex-col items-center">
                    <div className="p-3 bg-gray-100 rounded-lg shadow hover:shadow-md transform group-hover:scale-110 transition-all duration-300">
                      <FaReact className="text-2xl text-blue-400" />
                    </div>
                    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">React</span>
                  </div>
                  <div className="group flex flex-col items-center">
                    <div className="p-3 bg-gray-100 rounded-lg shadow hover:shadow-md transform group-hover:scale-110 transition-all duration-300">
                      <FaNodeJs className="text-2xl text-green-600" />
                    </div>
                    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-6xl mx-auto"></div>
    </>
  );
}

export default Home;