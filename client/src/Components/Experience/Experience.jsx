import React from 'react';
import './experience.css'


class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className='exp'>
                <div className='experience'>
                    <h2>Freelancer Platforms</h2>
                    {/* <h5>Jun 2019 - Aug 2019</h5> */}
                    <h4>Freelance Full Stack Web Developer</h4>
                    <p>
                        <li>Freelance Full Stack Web Developer At Upwork/mostaql/Freelancer</li>
                        <br />
                        <li>Developing responsive websites </li>
                        <br />
                        <li> Programming application and sites</li>
                        <br />
                        <li>Hosting an app</li>
                        <br />
                        <li><span id="tech">Technology:</span>JavaScript/Express.js/React.js/ GitHub</li>
                    </p>

                </div>
                <div className='experience'>
                    <h2>Founders and Coders Programs</h2>
                    {/* <h5>Jun 2019 - Aug 2019</h5> */}
                    <h4>Full Stack Web Developer</h4>
                    <p>
                        <li>Developed an app using react js to facilitate young entrepreneurs in growing their
                    business </li>
                        <br />
                        <li>Worked with client remotely</li>
                        <br />
                        <li>Collaborated with a team to make new functionality and
                    speed</li>
                        <br />
                        <li>Hosted for pages in an app</li>
                        <br />
                        <li><span id="tech">Technology:</span>AirTable/React.js/Express.js/MongoDB</li>
                    </p>

                </div>
            </div>
        );
    }
}


export default Experience