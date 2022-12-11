import React from 'react';
import myImage from '../../assests/Pastel Purple Mustard White Simple Professional Employment LinkedIn Profile Picture (1)-modified.png'

const About = () => {
    return (
            <section className="bg-gray-600">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
            <p className='md:text-lg font-medium font-mono mt-3 text-cyan-300'>Hello, This is Abu Zubayer form Rajshahi, Bangladesh. I am a web developer focused on Front-End Development Also have good knowledge about Mern Stack Development. I have been working with web development since last 1 year and during this time I have deep understanding of core subjects of frontend development like JavaScript, React.js. I'm learning React.Js and Express.Js for backend and MongoDB for server.</p>
            <p className='md:text-lg font-medium font-mono mt-3 text-cyan-300 mt-2'>I am a quick learner, responsible, disciplined, and deadline-oriented person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.</p>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={myImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    );
};

export default About;