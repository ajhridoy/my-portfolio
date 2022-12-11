import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ProjectDetails = () => {
    const projectDetail = useLoaderData();
    console.log(projectDetail)
    const {id, fullDetail, projectName, screenSHot, tech, liveLink, clintLink, serverLink} = projectDetail
    return (
        <div className='my-8'>
            <h1 className='text-2xl lg:text-3xl font-bold text-center mt-7'>Project Name: <span className='text-orange-500'>{projectName}</span></h1>
            <div className='my-4 lg:flex lg:flex-row lg:mx-10 gap-6'>
            <a href={liveLink} target='_blank' className='px-8 py-3 font-semibold w-1/2 mt-6 rounded-full bg-yellow-400 hover:bg-yellow-600 text-black text-center mx-auto block'>Live Website Link</a>
            <a href={clintLink} target='_blank' className='px-8 py-3 font-semibold w-1/2 mt-6 rounded-full bg-yellow-400 hover:bg-yellow-600 text-black text-center mx-auto block'>Clint Side Code Link</a>
            <a href={serverLink} target='_blank' className='px-8 py-3 font-semibold w-1/2 mt-6 rounded-full bg-yellow-400 hover:bg-yellow-600 text-black text-center mx-auto block'>Server Side Code Link</a>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 m-6 lg:m-10'>
            {
                screenSHot.map(pic => <img className='w-96 h-96' src={pic} alt=""></img>)
            }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 m-6 lg:mx-10'>
            <div>
                <h1 className='font-bold text-2xl mb-4 text-orange-700'>Features in this Project:</h1>
                {
                    fullDetail.map(detail => <li className='font-medium text-lg mb-2'>{detail}</li>)
                }
            </div>
            <div>
            <h1 className='font-bold text-2xl mb-4 text-orange-700'>Used Technology:</h1>
                {
                    tech.map(te => <li className='font-medium text-lg mb-2'>{te}</li>)
                }
            </div>
            </div>
        </div>
    );
};

export default ProjectDetails;