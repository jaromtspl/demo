import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideNav from './SideNav';
import { Link } from 'react-scroll';
import Careers from './Careers';

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Initialize with "home" as default

  useEffect(() => {
    const handleScroll = () => {
        const home = document.querySelector('[name="home"]').getBoundingClientRect().top;
        const landing = document.querySelector('[name="landing"]').getBoundingClientRect().top;
        const about = document.querySelector('[name="about"]').getBoundingClientRect().top;
        const contact = document.querySelector('[name="contact"]').getBoundingClientRect().top;

        // Determine the distance of each section from the top of the viewport
        const homeDistance = Math.abs(home);
        const landingDistance = Math.abs(landing);
        const aboutDistance = Math.abs(about);
        const contactDistance = Math.abs(contact);

        // Find the minimum distance among the sections
        const minDistance = Math.min(home < 0 ? homeDistance : Infinity, 
                                    landing < 0 ? landingDistance : Infinity, 
                                    about < 200 ? aboutDistance : Infinity, 
                                    contact < 100 ? contactDistance : Infinity);

        // Set the active section based on the minimum distance
        if (minDistance === homeDistance) {
            setActiveSection("home");
        } else if (minDistance === landingDistance) {
            setActiveSection("home");
        } else if (minDistance === aboutDistance) {
            setActiveSection("about");
        } else if (minDistance === contactDistance) {
            setActiveSection("contact");
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);



  

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

  window.addEventListener('scroll', handleScroll);

  const [side, setSide] = useState(false);

  const Clicked = () => {
    setSide(true);
  };

  var cls = `flex justify-between lg:w-[90%]  md:bg-cyan-100 bg-[#228eab] md:bg-opacity-15 z-10 mx-auto text-white tracking-wider sticky top-0 md:transition-all md:duration-500 }`;

  return (
    <nav className={cls} style={scrolling ? { backgroundColor: "#228eab", width: "100%", zIndex: "3" } : {}} id='nav'>
      <SideNav side={side} setSide={setSide} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Careers isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='hidden lg:flex space-x-20 p-5 lg:font-bold'>
        <Link to='home' smooth={true} duration={500}><h2 className={activeSection === "home" ? 'text-[#302386] hover:text-[#302386] transition-all duration-300 cursor-pointer' : 'hover:text-[#302386] transition-all duration-300 cursor-pointer'}>Home</h2></Link>
        <Link to="about" smooth={true} duration={500} offset={-60}><h2 className={activeSection === "about" ? 'text-[#302386] hover:text-[#302386] transition-all duration-300 cursor-pointer' : 'hover:text-[#302386] transition-all duration-300 cursor-pointer'}>About Us</h2></Link>
        <h2 className='cursor-pointer hover:text-[#302386] transition-all duration-300' onClick={() => setIsOpen(true)}>Careers</h2>
        <Link to="contact" smooth={true} duration={500} offset={-40} className={activeSection === "contact" ? 'text-[#302386] hover:text-[#302386] transition-all duration-300' : 'hover:text-[#302386] transition-all duration-300 cursor-pointer'}>
          <h2>Contact</h2>
        </Link>
      </div>
      <div className='flex p-5 lg:font-normal lg:hidden items-center space-x-2 text-blue-950' onClick={Clicked}>
        <FontAwesomeIcon icon={faBars} />
        <h1 className='font-medium'>Menu</h1>
      </div>
      <div className='flex justify-center items-center'>
        <h2 className='bg-blue-900 text-white py-5 px-10 lg:font-bold'>Trip Sweet Solution</h2>
      </div>
    </nav>
  );
}