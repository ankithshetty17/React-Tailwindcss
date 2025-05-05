import React from 'react';
import Temple from '../assets/temple2.png';

const AboutUs = () => {
  return (
    <div className="bg-[#fcc76d] py-10 px-4 sm:px-10 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#4C3A2B] text-center pb-6">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-start">
        <p className="text-[#FFFFFF] text-sm sm:text-base leading-relaxed max-w-xl text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
     <div className='rounded-md overflow-hidden'>
        <img
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain"
          src={Temple}
          alt="temple"
        />
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
