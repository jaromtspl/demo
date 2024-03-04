import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Careers({ isOpen, setIsOpen }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [resume, setResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleClose = () => {
    setIsOpen(false);
    setSubmissionStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      role,
      resume,
      coverLetter
    };

    try {
      if (Object.values(formData).every(value => value !== '')) {
        const response = await emailjs.sendForm('service_8k4kz96', 'template_jvrw8j6', e.target, 'K1QG-gfSz2IXlHIO7');
        console.log('SUCCESS!', response.status, response.text);
        setSubmissionStatus('Submitted');
        // Clearing form fields after submission
        setFullName('');
        setEmail('');
        setRole('');
        setResume('');
        setCoverLetter('');
        
      } else {
        console.log('Please fill in all fields');
        setSubmissionStatus('Please Fill in all Fields');
      }
    } catch (error) {
      console.log('FAILED...', error);
      setSubmissionStatus('Failed to submit. Please try again later.');
    }
  };

  const modalClass = isOpen ? "fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50" : "hidden";

  return (
    <>
      <div className={modalClass}>
        <div className="w-11/12 max-w-lg bg-white p-8 rounded shadow-lg relative">
          <button
            className="absolute top-0 right-0 mt-3 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} size='1x' />
          </button>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                name='from_fullname'
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email ID:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name='from_email'
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                Role:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="role"
                name='from_role'
                type="text"
                placeholder="Software Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                Resume Link:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="resume"
                name='from_resume'
                placeholder="Resume or Portfolio Link"
                type="text"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
                Cover Letter:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="coverLetter"
                name='from_cover'
                type="text"
                placeholder="Cover Letter"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <p className={`mt-4 text-center text-${submissionStatus === 'Submitted' ? 'green' : 'red'}-700`}>
            {submissionStatus}
          </p>
        </div>
      </div>
    </>
  );
}
