import React from 'react';
import Logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    return (
        <nav className='w-[90%] mx-auto '>
            <div className='flex justify-between '>
                <div>
                    <img src={Logo} className='h-20' alt="logo" />
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <div>
                        <FontAwesomeIcon icon={faClock} size={'xl'} className='hidden md:block'/>
                    </div>
                    <div className=' text-base lg:text-l hidden md:block'>
                        <h2>Monday - Friday</h2>
                        <h2>8:00AM-8:00PM</h2>
                    </div>
                </div>

                <div className=' flex justify-center items-center gap-1 md:gap-3'>
                    <div>
                        <FontAwesomeIcon icon={faPhone} size={'xl'} className='hidden md:block' />
                    </div>
                    <div className='text-base md:text-l hidden md:block'>
                        <h2>Call Us</h2>
                        <h2>+91-7388823888</h2>
                    </div>
                </div>
              <div>
              <div className='flex justify-center items-center  gap-3 py-5'>
                    <a href="https://www.instagram.com/tspl_web_tech/" target='_blank'><div className='w-10 h-10  hover:bg-blue-900 hover:text-white  bg-gray-200 flex justify-center items-center rounded-full'>
                        <FontAwesomeIcon icon={faInstagram} className='  cursor-pointer'/>
                    </div></a>
                    <a href="https://twitter.com/TripsweetIT" target='_blank'>
                    <div className='w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full hover:bg-blue-900 hover:text-white'>
                        <FontAwesomeIcon icon={faXTwitter} className='cursor-pointer'/>
                    </div></a>
                    <a href="https://www.linkedin.com/in/tripsweet-it/" target='_blank'>
                    <div className='w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full hover:bg-blue-900 hover:text-white '>
                        <FontAwesomeIcon icon={faLinkedinIn} className='cursor-pointer'/>
                    </div></a>
                </div>
              </div>
            </div>
        </nav>
    );
}

export default Navbar;
