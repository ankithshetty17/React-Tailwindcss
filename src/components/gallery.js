import React from 'react';
import Temple2 from '../assets/temple2.png';
import Temple from '../assets/temple_bg.png';

const  Gallery = () => {
  return (
    <div className="flex flex-col bg-[#fcc76d] py-10 px-4 sm:px-10 lg:px-16 justify-center items-center space-y-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#4C3A2B] text-center">
        Gallery
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
      <div className="w-full max-w-[260px] h-[14rem] bg-[#f3af38]/25 rounded-lg shadow-sm shadow-[#4C3A2B] overflow-hidden">
        <img
        className="w-full h-full object-cover"
        src={Temple2}
        alt="temple"
      />
       </div>
       <div className="w-full max-w-[260px] h-[14rem] bg-[#f3af38]/25 rounded-lg shadow-sm shadow-[#4C3A2B] overflow-hidden">
        <img
        className="w-full h-full object-cover"
        src={Temple}
        alt="temple"
      />
       </div>
       <div className="w-full max-w-[260px] h-[14rem] bg-[#f3af38]/25 rounded-lg shadow-sm shadow-[#4C3A2B] overflow-hidden">
        <img
        className="w-full h-full object-cover"
        src={Temple2}
        alt="temple"
      />
       </div>

       <div className="w-full max-w-[260px] h-[14rem] bg-[#f3af38]/25 rounded-lg shadow-sm shadow-[#4C3A2B] overflow-hidden">
        <img
        className="w-full h-full object-cover"
        src={Temple}
        alt="temple"
      />
       </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
      <div className="w-full max-w-[260px] h-[14rem] bg-[#f3af38]/25 rounded-lg shadow-sm shadow-[#4C3A2B] overflow-hidden">
        <img
        className="w-full h-full object-cover"
        src={Temple2}
        alt="temple"
      />
       </div>

       <div className="w-full max-w-[260px] h-[14rem] bg-[#f3af38]/25 rounded-lg shadow-sm shadow-[#4C3A2B] overflow-hidden">
        <img
        className="w-full h-full object-cover"
        src={Temple}
        alt="temple"
      />
       </div>
       <div className="w-full max-w-[260px] h-[14rem] bg-[#f3af38]/25 rounded-lg shadow-sm shadow-[#4C3A2B] overflow-hidden">
        <img
        className="w-full h-full object-cover"
        src={Temple2}
        alt="temple"
      />
       </div>
      </div>
    </div>
  )
}

export default Gallery