import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideNav from './SideNav';
import {Link} from 'react-scroll'
import Careers from './Careers';

export default function nav() {

  const [Scrolling, setScrolling] = useState(false)
  const [isOpen, setIsOpen] = useState(false);


  const handleScroll = () => {
    const element = document.getElementById("nav");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      if (elementPosition <= 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
  };



  window.addEventListener('scroll', handleScroll)

  const [side, setside] = useState(false)

  const Clicked = () => {
    setside(true)
  }





  var cls = `flex justify-between lg:w-[90%] md:bg-cyan-100 bg-[#228eab] md:bg-opacity-15 mx-auto text-white tracking-wider sticky top-0 md:transition-all md:duration-500 }`

  return (

    <nav className={cls} style={Scrolling ? { backgroundColor: "#228eab", width: "100%", zIndex: "3" } : {}} id='nav'>
      <SideNav side={side} setSide={setside} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Careers isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className=' hidden lg:flex space-x-20 p-5 lg:font-bold '>
        <Link to='home' smooth={true} duration={500} ><h2 className='cursor-pointer hover:text-[#302386] transition-all duration-300'>Home</h2></Link>
       <Link to="about" smooth={true} duration={500} offset={-60} > <h2 className='cursor-pointer hover:text-[#302386] transition-all duration-300'>About Us</h2></Link>
        <h2 className='cursor-pointer hover:text-[#302386] transition-all duration-300' onClick={() => setIsOpen(true)}>Careers</h2>
        <Link to="contact" smooth={true} duration={500} offset={-40}  className='cursor-pointer hover:text-[#302386] transition-all duration-300'>
          <h2>Contact</h2>
        </Link>
      </div>
      <div className='flex p-5 lg:font-normal lg:hidden items-center space-x-2 text-blue-950' onClick={Clicked}>
        <FontAwesomeIcon icon={faBars} />
        <h1 className='font-medium'>Menu</h1>
      </div>
      <div className='flex justify-center items-center' >
        <h2 className='bg-blue-900 text-white py-5 px-10 lg:font-bold '>Trip Sweet Solution</h2>
      </div>

    </nav>

  )
}
