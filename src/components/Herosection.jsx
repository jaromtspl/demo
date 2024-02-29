import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import hero from '../assets/hero-img.jpeg'
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

function Herosection() {
    return (
        <div className='w-[90%] pt-6 mx-auto grid grid-cols-1 lg:grid-cols-2'>
            <Helmet>
                <title>TripSweet - Expert IT Services in Madurai | TSPL Web Tech</title>
                <meta name="description" content="TripSweet (TSPL) offers expert IT services including web development, software solutions, and IT consulting in Madurai. Contact us today to learn more about TripSweet Madurai and TSPL Web Tech." />
                <link rel="canonical" href="https://triptech.netlify.app" />
                {/* Add more meta tags as needed */}
            </Helmet>
            <div className='hidden lg:flex justify-center items-start'>
                <div >
                    <img src={hero} className='h-[800px] w-[600px]' alt="hero-img " />
                </div>
            </div>

            <div>
                <div className='space-y-4'>
                    <p className='font-semibold '>WHAT WE DO</p>
                    <h2 className='text-2xl md:4xl font-bold'> Our company specializes in web technology and offers a range of solutions to meet your needs.</h2>
                    <p className='  font-semibold'>At TripSweet Web-Technologies , We specialize in providing comprehensive web development services to help businesses thrive in the digital world.</p>
                </div>
                <div className='py-6'>
                    <div className='mt-5'>
                        <div className='flex justify-start items-center gap-6  px-6 py-4 transition-all duration-500  bg-gray-100'>
                            <div >
                                <FontAwesomeIcon icon={faDesktop} className=' lg:hidden text-[#302386]' size='2x' />
                                <FontAwesomeIcon icon={faDesktop} className=' hidden text-[#302386] lg:block' size='4x' />
                            </div>
                            <div>
                                <h3 className='font-semibold py-1 lg:py-3 text-l lg:text-xl'>Custom Web Development</h3>
                                <p className=' text-base lg:text-lg'>From simple websites to complex web applications, our team of expert developers crafts tailored solutions to meet your unique requirements and objectives.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <div className='flex justify-start items-center gap-6 px-6 py-4 transition-all duration-500  bg-gray-100'>

                            <div >
                                <FontAwesomeIcon icon={faStore} className=' lg:hidden text-[#302386] ' size='2x' />
                                <FontAwesomeIcon icon={faStore} className=' hidden lg:block text-[#302386] ' size='4x' />
                            </div>
                            <div>
                                <h3 className='font-semibold py-1 lg:py-3 text-l lg:text-xl'>E-Commerce Solutions</h3>
                                <p className='text-base lg:text-lg'> Launch and grow your online store with our cutting-edge e-commerce development services, equipped with robust features and seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <div className='flex justify-start items-center gap-6 px-6 py-4   transition-all duration-500  bg-gray-100'>
                            <div >
                                <FontAwesomeIcon icon={faIdCard} className=' lg:hidden text-[#302386] ' size='2x' />
                                <FontAwesomeIcon icon={faIdCard} className=' lg:block text-[#302386] hidden' size='4x' />
                            </div>
                            <div>
                                <h3 className='font-semibold py-1 lg:py-3 text-l lg:text-xl'>Responsive Design</h3>
                                <p className='text-base lg:text-lg'>Ensure your website looks and performs flawlessly across all devices and screen sizes with our responsive web design expertise, maximizing user engagement and satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Herosection
