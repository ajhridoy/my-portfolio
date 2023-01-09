import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../../assests/Pastel Purple Mustard White Simple Professional Employment LinkedIn Profile Picture (1)-modified.png'

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-gray-900 shadow-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to='/'>
                        <h2 className="text-2xl font-bold flex flex-col md:flex-row items-center"><span className='w-16'><img src={myImage} alt="" data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" /></span><span className='ml-2 text-yellow-400 hover:text-cyan-400 uppercase' data-aos="fade-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Abu Zubayer</span></h2>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            title='Click for Nav Menu'
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-yellow-300"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                             ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-yellow-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <Link to='/'><li className="text-yellow-300 hover:text-cyan-400 rounded-lg p-3 font-bold">Home</li></Link>

                    <Link to='/about'><li className="text-yellow-300 hover:text-cyan-400  rounded-lg p-3 font-bold">About me</li></Link>
                        
                    <Link to='/blog'><li className="text-yellow-300 hover:text-cyan-400 rounded-lg p-3 font-bold">Blog</li></Link>         
                    <Link to='/contactme'><li className="text-yellow-300 hover:text-cyan-400 rounded-lg p-3 font-bold">Contact me</li></Link>         
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Header;