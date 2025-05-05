import React from 'react';
import Temple from '../assets/temple_bg.png';

const Hero = () => {
  return (
    <div className="relative min-h-[650px] bg-gradient-to-bl from-[#F3E8D5] to-[#fcc76d] flex flex-col-reverse lg:flex-row items-center justify-evenly px-6 lg:px-16 py-10 mt-20">

      <div className="relative max-w-xl text-start md:text-left z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFFFFF] mb-6">
          Welcome To Our Temple.
        </h1>
        <p className="text-[#FFFFFF] text-sm sm:text-base mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className="w-40 h-12 md:w-44 md:h-16 bg-[#f3af38] text-[#3B250F] rounded-full font-semibold">
          Learn More
        </button>
      </div>

      <img
        className="w-[30rem] z-10 mb-10 md:mb-0"
        src={Temple}
        alt="temple"
      />
    </div>
  );
};

export default Hero;
