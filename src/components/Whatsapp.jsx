import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Whatsapp = () => {
  return (
    <a href="https://wa.me/7388823888?text=Hello!%20I'Am%20Interested%20in%20your%20IT%20services.%20Can%20you%20share%20more%20info,%20please?" target='_blank' rel='noopener noreferrer'>
      <div className='bg-green-600 rounded-full lg:w-16 lg:h-16 w-16 h-16 flex flex-col items-center justify-center fixed bottom-8 right-6 cursor-pointer z-10 '>
        <FontAwesomeIcon icon={faWhatsapp} size='2x' className='text-white lg:block hidden'/>
        <FontAwesomeIcon icon={faWhatsapp} size='2x' className='text-white lg:hidden '/>
      </div>
    </a>
  );
};

export default Whatsapp;