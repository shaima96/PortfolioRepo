import React from 'react';
import './home.css'


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
                    <div className='home_detail'>
                        <h3>Hello, I'M</h3>
                        <h1 >Shaima' Ihdoosh </h1>
                        <h3>Full Stack Web Developer </h3>
                    </div>
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
            </div>
        );
    }
}


export default Home