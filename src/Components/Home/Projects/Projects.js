import React from 'react';
import website1 from '../../../assests/website-1.PNG'
import website3 from '../../../assests/website-3.PNG'
import website2 from '../../../assests/photo-1542038784456-1ea8e935640e.a3a4fc71478b5196fa57.jpg'

const Projects = () => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-center mb-5'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-12'>
            <div className="max-w-sm rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={website1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">LAPTOP-ZONE</h2>
			<p className="dark:text-gray-100">This is Full Stack web page where admin, seller and buyer have their different role...</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-yellow-400 hover:bg-yellow-600 text-black">See More Details</button>
	</div>
</div>
<div className="max-w-sm rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={website2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">PHOTO-HUB</h2>
			<p className="dark:text-gray-100">A full stack website where people sell their photography services, review service and...</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-yellow-400 hover:bg-yellow-600 text-black">See More Details</button>
	</div>
</div>
<div className="max-w-sm rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={website3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Tech-Knowledge</h2>
			<p className="dark:text-gray-100">This website based on tech courses people buy course and download course pdf...</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-yellow-400 hover:bg-yellow-600 text-black">See More Details</button>
	</div>
</div>
            </div>
        </div>
    );
};

export default Projects;