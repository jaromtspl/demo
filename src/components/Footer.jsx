import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faDesktop, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { Link } from 'react-scroll';


export default function Footer() {
  var date = new Date().getFullYear();

  return (
    <div className='2xl:container bg-[#228eab] text-white mt-16'>
      <Helmet>
        <title>TripSweet - Expert IT Services in Madurai | TSPL Web Tech</title>
        <meta name="description" content="TripSweet (TSPL) offers expert IT services including web development, software solutions, and IT consulting in Madurai. Contact us today to learn more about TripSweet Madurai and TSPL Web Tech." />
        <link rel="canonical" href="https://triptech.netlify.app" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <div className=' w-[90%] mx-auto lg:grid lg:grid-cols-4 grid-cols-3 gap-10 text-xs lg:text-sm'>
        <div>
          <h1 className='lg:text-lg text-base font-medium py-5'>About Us</h1>
          <ul className=' space-y-2'>
            <li><FontAwesomeIcon icon={faAngleRight} className='mr-1' /><span>We specialize in crafting captivating websites tailored to your needs.</span></li>
            <li><FontAwesomeIcon icon={faAngleRight} className='mr-1' /><span>Our team combines creativity and technology to deliver standout online experiences.</span></li>
            <li><FontAwesomeIcon icon={faAngleRight} className='mr-1' /><span>Let us bring your vision to life with innovative web solutions.</span></li>
          </ul>
        </div>
        <div className='lg:ml-14 hidden md:block'>
          <h1 className='lg:text-lg text-base font-medium py-5'>Quick Links</h1>
          <ul className=' space-y-2  flex flex-col'>
            <Link to='home' smooth={true} duration={500} ><li><FontAwesomeIcon icon={faAngleRight} className='mr-1 cursor-pointer' /> <span className='cursor-pointer'>Home</span></li></Link>
            <Link to='about' smooth={true} duration={500} offset={-60}  ><li><FontAwesomeIcon icon={faAngleRight} className='mr-1' /> <span className='cursor-pointer'>About Us</span></li></Link>
            <Link ><li><FontAwesomeIcon icon={faAngleRight} className='mr-1' /><span className='cursor-pointer'> Careers</span></li></Link>
            <Link to='contact' smooth={true} duration={500} offset={-40}  ><li><FontAwesomeIcon icon={faAngleRight} className='mr-1' /> <span className='cursor-pointer'>Contact</span></li></Link>
          </ul>
        </div>
        <div>
          <h1 className='lg:text-lg text-base font-medium py-5'>Contact Us</h1>
          <ul className=' space-y-2'>
            <li><FontAwesomeIcon icon={faDesktop} className='mr-1' /><span>Tripsweet Web Technologies & IT</span></li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} className='mr-1' /><span>#13 A HMS Colony Main Road , Virattipatu Madurai-625016, Tamilnadu, India.</span></li>
            <li><FontAwesomeIcon icon={faPhone} className='mr-1' /><span>+91 73888 23888</span></li>
            <li><FontAwesomeIcon icon={faEnvelope} className='mr-1' /><span>websitetspl@gmail.com</span></li>
          </ul>
        </div>

        <div>
          <h1 className='lg:text-lg text-base font-medium py-5'>Location</h1>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0185996884366!2d78.08191877479267!3d9.932408690169556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf1599b24c83%3A0x3ed86e1d8c73510f!2s13%2C%20HMS%20Colony%20Main%20Rd%2C%20HMS%20Colony%2C%20Ponmeni%2C%20Madurai%2C%20Tamil%20Nadu%20625016!5e0!3m2!1sen!2sin!4v1711109341319!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>

      <div className='mt-5 w-[95%] mx-auto'>
        <hr className='opacity-60' />
        <h1 className='text-center p-5 text-xs lg:text-sm'>Copyright ©{date} Tripsweet. All Right Reserved. Designed by <span className='font-bold'>Trip Sweet Web Technologies & IT</span></h1>
      </div>
    </div>


  )
}