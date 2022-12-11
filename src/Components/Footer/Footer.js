import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 shadow-lg">
	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			<Link to='/'><li className="text-yellow-300 hover:text-cyan-400 rounded-lg p-3 font-bold">Home</li></Link>
			<Link to='/about'><li className="text-yellow-300 hover:text-cyan-400 rounded-lg p-3 font-bold">About me</li></Link>
			<Link to='/blog'><li className="text-yellow-300 hover:text-cyan-400 rounded-lg p-3 font-bold">Blog</li></Link>
			<Link to='/contactme'><li className="text-yellow-300 hover:text-cyan-400 rounded-lg p-3 font-bold">Contact me</li></Link>			
		</ul>
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center space-x-4">
				<a href="#" title="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-400 hover:bg-cyan-400 text-black"><FaGithub></FaGithub></a>
				<a href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-400 hover:bg-cyan-400 text-black"><FaFacebook></FaFacebook></a>
				<a href="#" title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-400 hover:bg-cyan-400 text-black"><FaLinkedin></FaLinkedin></a>
				<a href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-400 hover:bg-cyan-400 text-black"><FaTwitter></FaTwitter></a>
			</div>
		</div>
	</div>
</footer>
    );
};

export default Footer;