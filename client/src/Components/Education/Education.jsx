import React from 'react';
import './education.css';

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className='eduction'>
                <div className='educ'>
                    <div className='edu_image'>
                       <a href='https://www.ppu.edu/p/ar' target='_blank'><img src="https://www.ppu.edu/p/sites/default/files/ppu-1580285179-%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9.png"/> </a>
                    </div>
                    <h2>Palestine Polytechnic University</h2>
                    <h5>Jun 2014 - Aug 2018</h5>
                    <h4>Bachelor's Information Technology</h4>
                    <p>
                        <span>Main subjects covered:</span>
                        <br/>
                        programming courses:(C++,Java,PHP)
                        <br />
                        Web development courses:(Html, CSS, Javascript)
                        <br />
                        Management courses
                        <br />
                        Android development courses
                        <br />
                        Database systems design

                    </p>

                </div>
            </div>
        );
    }
}


export default Education