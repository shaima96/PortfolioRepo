import React from 'react';

import './project.css'



function ProjectCard({ project }) {
    return (
        <div id='project'>
            <div className='project_image'>
                <img src={project.image} />
            </div>
            <div className='project_desc'>
                <a href={project.link} target="_blank" ><h1>{project.name}</h1></a>
                <p>{project.description}</p>
                <h3><span>Technology: </span>{project.technology}</h3>
                <br/>
            <div className='project_link'>
                <div className='project_button1'>
                    <a href={project.link} target='_blank'> <button> View App</button></a>
                </div>
                <div className='project_button2'>
                    <a href={project.gitLink} target='_blank'>
                        <button>Github Link </button>
                    </a>
                </div>
            </div>
            </div>
        </div>

    );

}

export default ProjectCard