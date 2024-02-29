import React from 'react'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Helmet} from 'react-helmet';

export default function SideNav({side,setSide,isOpen,setIsOpen}) {



    var Class=`absolute w-7/12 h-screen bg-blue-900 text-white top-0 lg:hidden transition-all duration-700  ${side ? 'left-0':'-left-[60%]'}`

    function Clicked(){
        
        setSide(false)
      
    }

  return (

    <div className={Class}>
         <Helmet>
                <title>TripSweet - Expert IT Services in Madurai | TSPL Web Tech</title>
                <meta name="description" content="TripSweet (TSPL) offers expert IT services including web development, software solutions, and IT consulting in Madurai. Contact us today to learn more about TripSweet Madurai and TSPL Web Tech." />
                <link rel="canonical" href="https://triptech.netlify.app" />
                {/* Add more meta tags as needed */}
            </Helmet>
     
      <div>
      <h2 className='text-blue-900 bg-white h-full p-5 font-semibold flex justify-between items-center transition-all duration-700  text-base'><span>Trip Sweet</span><FontAwesomeIcon icon={faTimes} onClick={Clicked}/></h2>
      </div>

      <ul className='py-2 px-5 text-base'>
      <Link to='home' smooth={true} duration={500} >  <li className='cursor-pointer mt-6' onClick={Clicked}>Home</li></Link>
       <Link to='about' smooth={true} duration={500}><li className='cursor-pointer mt-6' onClick={Clicked}>About Us</li></Link>
       <li className='cursor-pointer mt-6'  onClick={() => setIsOpen(true)} >Careers</li>
       <Link to="contact" smooth={true} duration={500}> <li  className='cursor-pointer mt-6'  onClick={Clicked}>Contact</li></Link>
       </ul>
      
    </div>
  )
}
