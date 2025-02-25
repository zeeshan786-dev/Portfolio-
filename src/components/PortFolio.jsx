import React, { useState } from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const [hoverCard, setHoverCard] = useState(null);

  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      colorClass: "from-green-500 to-green-900",
      bgClass: "bg-green-500",
      buttonClass: "bg-green-500 hover:bg-green-600",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      colorClass: "from-gray-500 to-gray-900",
      bgClass: "bg-gray-500",
      buttonClass: "bg-gray-500 hover:bg-gray-600",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      colorClass: "from-blue-400 to-blue-800",
      bgClass: "bg-blue-400",
      buttonClass: "bg-blue-400 hover:bg-blue-500",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      colorClass: "from-green-600 to-green-900",
      bgClass: "bg-green-600",
      buttonClass: "bg-green-600 hover:bg-green-700",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      colorClass: "from-yellow-500 to-yellow-800",
      bgClass: "bg-yellow-500",
      buttonClass: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      colorClass: "from-red-500 to-red-900",
      bgClass: "bg-red-500",
      buttonClass: "bg-red-500 hover:bg-red-600",
    },
  ];

  return (
    <div  name="PortFolio" className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white tracking-tight sm:text-6xl md:text-7xl mb-4">
            <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              My Portfolio
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-3xl font-bold text-pink-300 mb-6">Featured Projects</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-200 md:mt-5 md:text-xl">
            Showcasing my expertise in modern web development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cardItem.map(({ id, logo, name, colorClass, bgClass, buttonClass }) => (
            <div
              key={id}
              className="relative rounded-xl overflow-hidden group shadow-xl"
              onMouseEnter={() => setHoverCard(id)}
              onMouseLeave={() => setHoverCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-80 z-0`}></div>
              <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
              <div className="relative p-8 z-20 backdrop-blur-sm">
                <div className="flex items-center justify-center h-24 w-24 mx-auto mb-6 transform transition-all duration-500 rounded-full bg-white p-2 shadow-lg overflow-hidden">
                  <img 
                    src={logo} 
                    alt={name}
                    className={`object-contain w-full h-full transition-all duration-500 ${hoverCard === id ? 'scale-110' : ''}`}
                  />
                </div>
                <h2 className="text-3xl font-bold text-center text-white mb-4">{name}</h2>
                <p className="text-gray-200 text-center mb-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="mt-6 flex justify-center">
                  <a
                    href="#"
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-xl text-white ${buttonClass} focus:outline-none transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    View Source
                  </a>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${bgClass} transform transition-transform duration-500 ${hoverCard === id ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;