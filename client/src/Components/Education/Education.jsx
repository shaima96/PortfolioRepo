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