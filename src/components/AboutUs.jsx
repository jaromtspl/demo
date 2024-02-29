import React, { useState } from 'react';
import { Helmet } from 'react-helmet';


function AboutUs() {


    const [isHover, setIsHover] = useState(false)
    return (
        <div name="about" className="py-16" style={{zIndex:"1"}}>
             <Helmet>
                <title>TripSweet - Expert IT Services in Madurai | TSPL Web Tech</title>
                <meta name="description" content="TripSweet (TSPL) offers expert IT services including web development, software solutions, and IT consulting in Madurai. Contact us today to learn more about TripSweet Madurai and TSPL Web Tech." />
                <link rel="canonical" href="https://triptech.netlify.app" />
                {/* Add more meta tags as needed */}
            </Helmet>
            <div className="2xl:container relative ">
                <div className="w-[90%] mx-auto grid grid-cols-1 ">
                    <div className="flex justify-start items-start flex-col rounded-lg p-4 border-2 border-gray ">
                        <div className=" text-2xl lg:text-3xl font-bold absolute -top-4 bg-white px-3 text-[#302386]">
                            <h1> About-Us</h1>
                        </div>
                        <div className="p-4 space-y-6  ">
                            <div>
                                <h1 className=" py-3 lg:py-5 text-xl lg:text-3xl text-[#302386] font-bold">
                                    Welcome to TripSweet Web-technologies & IT
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3  ">
                                <div name="1" className="lg:flex flex-col items-center w-full hidden justify-start p-5 row-span-2 bg-gray-100 relative hover:-translate-x-2 transition-transform duration-300 h-[100%] shadow-xl rounded-lg  bg-cover " style={{ backgroundImage: "url('https://ik.imagekit.io/7ymcb1ihc/tripsweet/group-people-working-out-business-plan-office.jpg?updatedAt=1708923933964')" }}

                                    onMouseEnter={() => setIsHover(true)}
                                    onMouseLeave={() => setIsHover(false)}
                                >
                                    {isHover && ( // Render text content only when isHover is true
                                        <div
                                            className={`absolute bottom-0 left-0 rounded-lg w-full bg-[#228eab] text-white bg-opacity-75 p-5 h-[100%] transition-transform duration-500 ${isHover ? 'translate-y-0' : '-translate-y-full'}`}
                                        >
                                            <h1 className='text-xl py-2 font-bold'>Who We Are ?</h1>
                                            <p className='text-lg'>
                                            At TripSweet Web Technology & IT, we're more than just a technology company. We're the architects of digital transformation, the creators of innovative solutions, and the partners in your journey towards success.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div name="2" className="lg:flex flex-col hidden justify-center items-start p-5 bg-gray-100 hover:-translate-y-2 transition-transform duration-300 shadow-lg rounded-lg">
                                    <h1 className='text-lg font-bold py-2 text-[#302386] '>Digital Innovators</h1>
                                    <p className="text-lg">

                                        Welcome to Trispsweet Web Technologies & IT! We're a group of tech enthusiasts on a mission to help businesses thrive in the digital world. Our team is dedicated to creating smart, user-friendly solutions that make a difference.
                                    </p>
                                </div>
                                <div name="3" className="lg:flex flex-col hidden justify-center items-start p-5 bg-gray-100 hover:-translate-x-2 transition-transform duration-300 shadow-lg rounded-lg">
                                <h1 className='text-lg font-bold py-2 text-[#302386] '>Our Mission</h1>
                                    <p className="text-lg ">
                                        At Trispsweet, we're all about making technology work for you. Our goal is to give businesses the tools they need to grow and succeed online. We're here to listen, learn, and create solutions that make your life easier.
                                    </p>
                                </div>
                                <div name="4" className="lg:flex hidden justify-center items-start p-5 col-span-2 bg-gray-100 hover:-translate-x-2 transition-transform duration-300  shadow-lg rounded-lg">
                                    <p className="text-lg">
                                        <span className='font-bold text-[#302386]'>"Once again worm welcome to Trispsweet Web Technologies & IT!</span> We're passionate about leveraging technology to empower your business. Our team is dedicated to delivering innovative solutions tailored to your needs. Let's work together to achieve your digital goals. Explore our services and embark on a journey of growth with us. Get in touch today and let's create something amazing!"
                                    </p>
                                </div>
                                <div name="5" className="flex justify-center items-start p-2  bg-gray-100 hover:-translate-x-2 transition-transform lg:hidden duration-300 shadow-lg rounded-lg">
                                    <p className="text-base ">
                                        Welcome to Trispsweet Web Technologies & IT! We're a group of tech enthusiasts on a mission to help businesses thrive in the digital world. Our team is dedicated to creating smart, user-friendly solutions that make a difference.
                                    </p>
                                </div>
                                <div name="6" className="flex justify-center items-start p-2  bg-gray-100 hover:-translate-x-2 transition-transform lg:hidden duration-300   shadow-lg rounded-lg">
                                    <p className="text-base">
                                        At Trispsweet, we're all about making technology work for you. Our goal is to give businesses the tools they need to grow and succeed online. We're here to listen, learn, and create solutions that make your life easier.
                                    </p>
                                </div>
                                <div name="7" className="flex justify-center items-start p-2  bg-gray-100 hover:-translate-x-2 transition-transform lg:hidden duration-300 shadow-lg rounded-lg">
                                    <p className="text-base ">
                                        "Once again worm welcome to Trispsweet Web Technologies & IT! We're passionate about leveraging technology to empower your business. Our team is dedicated to delivering innovative solutions tailored to your needs. Let's work together to achieve your digital goals. Explore our services and embark on a journey of growth with us. Get in touch today and let's create something amazing!"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
