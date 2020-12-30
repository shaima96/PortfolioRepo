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
                    <h2>Founders and Coders Programs</h2>  
                    {/* <h5>Jun 2019 - Aug 2019</h5> */}
                    <h3>London (United Kingdom) </h3>
                    <h4>Full Stack Web Developer</h4>
                    <p>
                        <li>Developed an app using react js to facilitate young entrepreneurs in growing their
                    business </li>
                    <li>Worked with client remotely</li>
                        <li>Collaborated with a team to make new functionality and
                    speed</li>
                        <li>Hosted for pages in an app</li>
                        <br/>
                        <li><span>Technologies used:</span> AirTable/React.js/ Express.js/MongoDB</li>
                    </p>

                </div>
                <br />
                <br />
            </div>
        );
    }
}


export default Experience