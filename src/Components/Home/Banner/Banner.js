import React from 'react';
import myImage from '../../../assests/Pastel Purple Mustard White Simple Professional Employment LinkedIn Profile Picture (1)-modified.png'

const Banner = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className='text-2xl font-bold uppercase'>Hello, this is Abu Zubayer</h1>
            <h2>I am a Mern Stack Developer</h2>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={myImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;