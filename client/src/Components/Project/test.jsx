import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className='project_card'>
            <img className='project_image' src={project.image} alt='image' />
            <div className='project_details'>
                <h1 className='project_name'> {project.name}  </h1>
                <h1 className='project_description'> {project.description}  </h1>
                <p >Link: {project.link}</p>
                <p>GitHub Link: {project.gitLink} </p>
                <p>Technology : {project.technology} </p>
            </div>
        </div>
    )
}

export default ProjectCard 