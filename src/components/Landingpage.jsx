import React from 'react';
import { Link } from 'react-scroll';

export default function LandingPage() {
  return (
    <section name="landing" className='lg:w-[90%] mx-auto mt-20 lg:mt-32 w-11/12 text-white tracking-wider h-[500px]'>
      <h2>Welcome To Trip Sweet IT Solution</h2>
      <h1 className='py-6 text-2xl lg:text-4xl font-semibold'>
        Empowering Growth with Seamless Technical Solutions
      </h1>
      <p className='text-sm lg:text-lg lg:w-3/5'>
        We design and develop custom web solutions across all software development life-cycle stages to implement ideas into working applications.
      </p>
    <Link to='contact' smooth="true" duration={500} > <button className='px-8 lg:px-10 lg:py-3 py-2 mt-6 bg-blue-900 cursor-pointer text-white font-medium hover:text-blue-900 hover:bg-white transition-all duration-500'>
        Get Started
      </button></Link> 
    </section>
  );
}
