import React from 'react';
import Logo from '../assets/logo.png';
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#3B250F] py-6 px-4">
      <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-8">
        <img className="w-32 h-32 md:w-40 md:h-40" alt="logo" src={Logo} />
        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-sm sm:text-lg pb-3 text-[#E5F1F5]">Support</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Quick Navigation</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Support</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Report Abuse</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-semibold text-sm sm:text-xl pb-3 text-[#E5F1F5]">Connect With Us</p>
          <div className="flex space-x-3">
            <div className="rounded-full p-1 sm:p-2 bg-[#E5F1F5] cursor-pointer">
              <AiOutlineTwitter size={25} />
            </div>
            <div className="rounded-full p-1 sm:p-2 bg-[#E5F1F5] cursor-pointer">
              <AiFillFacebook size={25} />
            </div>
            <div className="rounded-full p-1 sm:p-2 bg-[#E5F1F5] cursor-pointer">
              <AiFillInstagram size={25} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-sm sm:text-lg pb-3 text-[#E5F1F5]">Legal</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Copyright Information</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Data Privacy/Consent Policy</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Terms of Service</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-sm sm:text-lg pb-3 text-[#E5F1F5]">Support</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Quick Navigation</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Support</p>
          <p className="text-[#E5F1F5] text-sm sm:text-md">Report Abuse</p>
        </div>
      </div>
      <p className="text-white text-center mt-6 text-sm md:text-base">
        © 2025 Green Haven. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
