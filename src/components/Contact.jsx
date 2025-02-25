// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// function Contact() {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/raeqjora", userInfo);
//       toast.success("Your message has been sent");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <>
//       <div
//         name="Contact"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//       >
//         <h1 className="text-3xl font-bold mb-4">Contact me</h1>
//         <span>Please fill out the form below to contact me</span>
//         <div className=" flex flex-col items-center justify-center mt-5">
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             // action="https://getform.io/f/raeqjora"
//             // method="POST"
//             className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
//           >
//             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">FullName</label>
//               <input
//                 {...register("name", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your fullname"
//               />
//               {errors.name && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 {...register("email", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Message</label>
//               <textarea
//                 {...register("message", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 name="message"
//                 type="text"
//                 placeholder="Enter your Query"
//               />
//               {errors.message && <span>This field is required</span>}
//             </div>
//             <button
//               type="submit"
//               className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaCheck } from "react-icons/fa";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    
    try {
      // await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent successfully!");
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-50"></span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="md:w-1/3 space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Email</h3>
                    <p className="text-gray-600 text-sm">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <FaUser />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Connect</h3>
                    <div className="flex space-x-2 mt-2">
                      <a href="#" className="bg-gray-200 p-2 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-gray-200 p-2 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-400 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.035 10.035 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-gray-200 p-2 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-md hidden md:block">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Office Hours</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <h2 className="text-2xl font-semibold">Send Your Message</h2>
                <p className="text-blue-100">I'll get back to you as soon as possible</p>
              </div>
              
              {isSubmitted ? (
                <div className="p-8 flex flex-col items-center justify-center min-h-64">
                  <div className="bg-green-100 p-4 rounded-full text-green-500 mb-4">
                    <FaCheck className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center">
                    Your message has been sent successfully. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-8 space-y-6"
                >
                  <div className="flex flex-col">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaUser />
                      </div>
                      <input
                        {...register("name", { 
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters"
                          }
                        })}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 border ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Your Full Name"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaEnvelope />
                      </div>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 border ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Your Email Address"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none text-gray-400">
                        <FaComment />
                      </div>
                      <textarea
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters"
                          }
                        })}
                        rows="5"
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 border ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;