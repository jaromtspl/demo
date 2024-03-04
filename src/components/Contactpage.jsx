import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Helmet from 'react-helmet';

function Contactpage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_c7wre6j', 'template_f3ykpz8', formRef.current, 'K1QG-gfSz2IXlHIO7')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsLoading(false);
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 1000);
            })
            .catch((error) => {
                console.log('FAILED...', error);
                setIsLoading(false);
            });

        // Reset form fields after submission
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
    };

    return (
        <div name='contact' style={{ scrollBehavior: "smooth" }} className='2xl:screen py-6'>
             <Helmet>
                <title>TripSweet - Expert IT Services in Madurai | TSPL Web Tech</title>
                <meta name="description" content="TripSweet (TSPL) offers expert IT services including web development, software solutions, and IT consulting in Madurai. Contact us today to learn more about TripSweet Madurai and TSPL Web Tech." />
                <link rel="canonical" href="https://triptech.netlify.app" />
                {/* Add more meta tags as needed */}
            </Helmet>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='justify-center flex items-center'>
                    <img src="https://ik.imagekit.io/7ymcb1ihc/tripsweet/10586.jpg?updatedAt=1708345359241" alt="img" />
                </div>
                <div className='pt-4'>
                    <h1 className='text-2xl lg:text-3xl text-center font-bold'>Get In Touch</h1>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className={`form-group my-8 ${name ? '' : 'required'}`}>
                            <label className='text-xl lg:text-xl font-semibold' htmlFor="name">Your Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-2 mt-1 rounded-lg text-xl focus:outline-none focus:bg-white border-b-2 border-gray-300"
                            />
                        </div>
                        <div className={`form-group my-4 ${email ? '' : 'required'}`}>
                            <label className='text-xl lg:text-xl font-semibold' htmlFor="email">Your Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 mt-1 rounded-lg text-xl focus:outline-none focus:bg-white border-b-2 border-gray-300"
                            />
                        </div>
                        <div className={`form-group my-4 ${phoneNumber ? '' : 'required'}`}>
                            <label className='text-xl lg:text-xl font-semibold' htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="from_number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                className="w-full px-4 py-2 mt-1 rounded-lg text-xl focus:outline-none focus:bg-white border-b-2 border-gray-300"
                            />
                        </div>
                        <div className={`form-group my-4 ${message ? '' : 'required'}`}>
                            <label className='text-xl lg:text-xl font-semibold' htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full px-4 py-2 h-24 mt-1 rounded-lg text-xl focus:outline-none focus:bg-white border-b-2 border-gray-300"
                            />
                        </div>
                        <div className="form-group my-4">
                            <button
                                className={`lg:px-6 lg:py-3 px-4 py-2 lg:text-xl rounded-xl text-white bg-[#302386] bg-${isSubmitted ? 'green' : '#302386'}`}
                                type="submit"
                                disabled={isLoading} // Disable button while form is being submitted
                            >
                                {isLoading ? 'Submitting...' : isSubmitted ? 'Submitted Successful ✓' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contactpage;
