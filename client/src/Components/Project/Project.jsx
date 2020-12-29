import React from 'react';
import ProjectCard  from './ProjectCard'


class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []

        }
    }
    componentDidMount() {
        this.getProjects()
    }
    getProjects = () => {
        fetch('http://localhost:8000/project/')
            .then(response => response.json())
            .then(project => {
                console.log("result", project)
                this.setState({ projects: project })
            })
    }


    render() {
        const { projects } = this.state
        return (
            <div className='project'>
                <div>
                    {
                        projects ? projects.map((pro, i) => <ProjectCard  project={pro} key={i} />) : <div></div>
                    }                </div>
            </div>
        );
    }
}


export default Project 