import React from 'react';
import myImage from '../../../assests/Pastel Purple Mustard White Simple Professional Employment LinkedIn Profile Picture (2).png'
import { Typewriter } from 'react-simple-typewriter'
import { FaFileAlt } from "react-icons/fa";

const Banner = () => {
    return (
            <section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
            <h1 className='text-2xl md:text-4xl font-bold uppercase text-cyan-400'>HI! <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['this is Abu Zubayer']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </span></h1>
            <p className='md:text-lg font-mono mt-3 text-orange-500'>A front-end focused developer Who has deep knowledge about Mern Stack Development. I have worked on many projects using JavaScript, React.JS, Node.JS and MongoDB.</p>
            <a href='https://drive.google.com/file/d/1Q0MRV1z9hRgHZnW-7hrpdk7nY92MUaFU/view?usp=share_link' target='_blank' className='px-8 py-3 font-semibold w-1/2 mt-6 rounded-full bg-yellow-400 hover:bg-cyan-400 text-black text-center mx-auto lg:mx-0 flex flex-row justify-center items-center'><span className='mr-2'>My Resume</span> <span><FaFileAlt></FaFileAlt></span></a>
		</div>
		<div className="flex items-center justify-center rainbow p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={myImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    );
};

export default Banner;