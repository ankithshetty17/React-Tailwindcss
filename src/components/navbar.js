import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

const NavBar = ({ handleScrollToSection }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const scrollAndClose = (id) => {
    handleScrollToSection(id);
    setNav(false);
  };

  return (
    <div className='px-4 flex justify-between items-center h-24 bg-[#3B250F] w-full z-50 fixed top-0'>
      <img
        className='w-24 h-24 cursor-pointer'
        alt='logo'
        src={Logo}
        onClick={() => handleScrollToSection('home')}
      />

    
      <ul className='hidden md:flex text-[#E5F1F5] font-semibold cursor-pointer space-x-10'>
        <li onClick={() => handleScrollToSection('home')}>Home</li>
        <li onClick={() => handleScrollToSection('about')}>About</li>
        <li onClick={() => handleScrollToSection('services')}>Service</li>
        <li onClick={() => handleScrollToSection('gallery')}>Gallery</li>
        <li onClick={() => handleScrollToSection('sponsors')}>Sponsors</li>
        <li onClick={() => handleScrollToSection('contact')}>Contact Us</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? (
          <AiOutlineClose size={24} color='#E5F1F5' />
        ) : (
          <AiOutlineMenu size={24} color='#E5F1F5' />
        )}
      </div>

 
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full z-40 bg-[#3B250F] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img
          className='w-24 h-24 ml-4 cursor-pointer'
          alt='logo'
          src={Logo}
          onClick={() => scrollAndClose('home')}
        />
        <ul className='pt-24 p-4 text-[#E5F1F5] cursor-pointer font-semibold space-y-4 uppercase'>
          <li onClick={() => scrollAndClose('home')}>Home</li>
          <li onClick={() => scrollAndClose('about')}>About</li>
          <li onClick={() => scrollAndClose('services')}>Service</li>
          <li onClick={() => scrollAndClose('gallery')}>Gallery</li>
          <li onClick={() => scrollAndClose('sponsors')}>Sponsors</li>
          <li onClick={() => scrollAndClose('contact')}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
