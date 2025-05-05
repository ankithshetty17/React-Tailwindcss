import React from 'react';
import Sponsor1 from '../assets/sponser1.png';

const Sponsers = () => {
  return (
    <div className='bg-[#fcd38d] py-10 px-4'>
      <h1 className='text-[28px] sm:text-[35px] font-bold text-[#4C3A2B] text-center mb-8'>
        Our Sponsors
      </h1>

      <div className='flex flex-wrap justify-evenly gap-6'>
        <div className='h-36 w-36 rounded-full bg-[#f3af38] flex items-center justify-center shadow-lg shadow-[#4C3A2B]'>
          <img className='w-24 h-24 object-contain' src={Sponsor1} alt='sponsor' />
        </div>
        <div className='h-36 w-36 rounded-full bg-[#f3af38] flex items-center justify-center shadow-lg shadow-[#4C3A2B]'>
          <img className='w-24 h-24 object-contain' src={Sponsor1} alt='sponsor' />
        </div>
        <div className='h-36 w-36 rounded-full bg-[#f3af38] flex items-center justify-center shadow-lg shadow-[#4C3A2B]'>
          <img className='w-24 h-24 object-contain' src={Sponsor1} alt='sponsor' />
        </div>
        <div className='h-36 w-36 rounded-full bg-[#f3af38] flex items-center justify-center shadow-lg shadow-[#4C3A2B]'>
          <img className='w-24 h-24 object-contain' src={Sponsor1} alt='sponsor' />
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
