import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {id, projectName, proImage, proDetail} =project
    return (
        <div className="max-w-sm rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={proImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{projectName}</h2>
			<p className="dark:text-gray-100">{proDetail}</p>
		</div>
		<Link to={`/projectDetails/${id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-yellow-400 hover:bg-yellow-600 text-black">See More Details</button></Link>
	</div>
</div>
    );
};

export default Project;