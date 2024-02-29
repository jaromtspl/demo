import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faDesktop,  faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

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
            <li><FontAwesomeIcon icon={faAngleRight} className='mr-1'/><span>We specialize in crafting captivating websites tailored to your needs.</span></li>
            <li><FontAwesomeIcon icon={faAngleRight} className='mr-1'/><span>Our team combines creativity and technology to deliver standout online experiences.</span></li>
            <li><FontAwesomeIcon icon={faAngleRight} className='mr-1'/><span>Let us bring your vision to life with innovative web solutions.</span></li>
        </ul>
      </div>
      <div className='lg:ml-14 hidden md:block'>
        <h1 className='lg:text-lg text-base font-medium py-5'>Quick Links</h1>
        <ul className=' space-y-2'>
            <li><FontAwesomeIcon icon={faAngleRight}  className='mr-1'/> <span>Home</span></li>
            <li><FontAwesomeIcon icon={ faAngleRight} className='mr-1' /> <span>About Us</span></li>
            <li><FontAwesomeIcon icon={ faAngleRight} className='mr-1' /><span> Careers</span></li>
            <li><FontAwesomeIcon icon={ faAngleRight} className='mr-1' /> <span>Contact</span></li>
        </ul>
      </div>
      <div>
        <h1 className='lg:text-lg text-base font-medium py-5'>Contact Us</h1>
        <ul className=' space-y-2'>
            <li><FontAwesomeIcon icon={faDesktop} className='mr-1'/><span>Tripsweet Web Technologies & IT</span></li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} className='mr-1'/><span>#19 , Kalavasal , Byepass Madurai 625016, Tamilnadu, India.</span></li>
            <li><FontAwesomeIcon icon={faPhone} className='mr-1'/><span>+91 88389 29422</span></li>
            <li><FontAwesomeIcon icon={faPhone} className='mr-1'/><span>+91 63837 53859</span></li>
            <li><FontAwesomeIcon icon={faEnvelope} className='mr-1'/><span>managertspl@gmail.com</span></li>
        </ul>
      </div>

      <div>
        <h1  className='lg:text-lg text-base font-medium py-5'>Location</h1>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.155023243375!2d78.09040487479253!3d9.92104419018035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfc5ec149aa9%3A0xc4b9664c62351392!2sTspl%20Mdu!5e0!3m2!1sen!2sin!4v1708328660236!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      </div>

      <div className='mt-5 w-[95%] mx-auto'>
      <hr className='opacity-60'/>
      <h1 className='text-center p-5 text-xs lg:text-sm'>Copyright ©{date} Tripsweet. All Right Reserved. Designed by <span className='font-bold'>Trip Sweet Web Technologies & IT</span></h1>
        </div>
    </div>


  )
}