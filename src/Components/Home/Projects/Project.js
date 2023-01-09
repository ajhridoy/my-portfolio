import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Project = ({project}) => {
    const {id, projectName, proImage, proDetail} =project
    return (
        <div className="max-w-sm rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100" data-aos="flip-left"
		data-aos-easing="linear"
		data-aos-duration="1500">
	<img src={proImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="2500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{projectName}</h2>
			<p className="dark:text-gray-100">{proDetail}</p>
		</div>
		<Link to={`/projectDetails/${id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-yellow-400 hover:bg-cyan-400 text-black">See More Details <span className='ml-2' data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="3000"><FaArrowRight></FaArrowRight></span></button></Link>
	</div>
</div>
    );
};

export default Project;