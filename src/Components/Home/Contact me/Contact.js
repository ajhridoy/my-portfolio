import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs.sendForm('service_ko50gso', 'template_9tgl4xu', form.current, '36P0nA0lWhwvYxeIY')
      .then((result) => {
          console.log(result.text);
            form.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-center my-6'>Contact Me</h2>
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50 mx-6 lg:mx-12 rounded-lg">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Rajshahi, Bangladesh</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801704330778</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>ajhridoy461@gmail.com</span>
				</p>
				<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex space-x-4 mt-3">
				<a href="https://github.com/ajhridoy" target='_blank' title="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-400 hover:bg-cyan-400 text-black"><FaGithub></FaGithub></a>
				<a href="https://www.facebook.com/redoy.khan.102977/" target='_blank' title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-400 hover:bg-cyan-400 text-black"><FaFacebook></FaFacebook></a>
				<a href="https://www.linkedin.com/in/abu-zubayer/" target='_blank' title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-400 hover:bg-cyan-400 text-black"><FaLinkedin></FaLinkedin></a>
				<a href="https://twitter.com/sobar_hridoy" target='_blank' title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-400 hover:bg-cyan-400 text-black"><FaTwitter></FaTwitter></a>
			</div>
		</div>
			</div>
		</div>
		<form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" name="to_name" placeholder="Your Name" className="block w-full rounded-md pl-2 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" name="from_name" placeholder="Your Email" className="block w-full pl-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" name="message" placeholder='Your Message' className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2"></textarea>
			</label>
            <input type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-yellow-400 cursor-pointer text-black" value="Send message" />
		</form>
	</div>
</section>
        </div>
    );
};

export default Contact;