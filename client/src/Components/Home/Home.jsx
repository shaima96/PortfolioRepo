import React from 'react';
import './home.css'
import { Link } from 'react-router-dom'



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {

        return (
            <div className='home'>
                <div className='home_details'>
                    <div className='myphoto'>
                        <img src="https://ca.slack-edge.com/TTVPM20S0-U017VK2HE69-247cb838d39a-512" />
                    </div>
                    <div className='contact_home'>
                        <div className='button1'>
                            <Link to='/contact'>
                                <button id='contact'>Contact Me </button>
                            </Link>
                        </div>
                        <div className='button2'>
                            <a href="https://drive.google.com/file/d/1BKnuiY_GYHpOO6FMaYdYek-IjHCwX0uJ/view?usp=sharing" target='_blank'>
                                <button id='resume'>My Resume</button>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="links">
                        <a href="https://github.com/shaima96" target="_blank">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111432.svg" /></a>
                        <a href="https://www.linkedin.com/in/shaimaihdoosh/" target="_blank">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384014.svg" /></a>
                        <a href="https://twitter.com/shaimaihdoosh" target="_blank">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384017.svg" /></a>
                        <a href="https://shaima0@gmail.com" target="_blank">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/95/95627.svg" /></a>
                    </div>
                </div>
                <div className='home_detail'>
                    <h2>Hello<img src='https://www.flaticon.com/svg/static/icons/svg/599/599335.svg' width='50px' height='50px' />, I'M  Shaima' Ihdoosh</h2>
                    <h3> I am a Full Stack Web Developer </h3>
                    <br />

                    <Link to='/project'>
                        <button>View My Work </button>
                    </Link>
                </div>
            </div>
        );
    }
}


export default Home