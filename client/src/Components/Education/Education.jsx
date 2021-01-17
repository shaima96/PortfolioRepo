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
                        <img src="data:image/png;base64,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"/>
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