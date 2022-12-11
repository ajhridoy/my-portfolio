import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
	const [projects, setProjects] = useState([])
	useEffect(() => {
		fetch('https://my-portfolio-server-seven.vercel.app/projects')
		.then(res => res.json())
		.then(data => setProjects(data))
	}, [])
	console.log(projects)
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-center mb-5'>My Projects</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-12'>
				{
					projects?.map(project => <Project
						key={project.id}
						project={project}
					></Project>)
				}
			</div>
        </div>
    );
};

export default Projects;