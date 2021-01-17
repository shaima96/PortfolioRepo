import React from 'react';

import './contact.css'
function Contact() {
    return (
        <div className="contact">
            <div className='conc'>
                <h2 id='h2'>Get In Touch</h2>
            </div>
            <div className='form'>
                <input id='input' placeholder='Your Name'  value='Your Name' type="submit" ></input>
                <br />
                <br />
                <input id='input' placeholder='Your Email'  value='Your Email' type="submit" ></input>
                <br />
                <br />
                <input id='input' placeholder='Write Your Message'  value='Write Your Message' type="submit" ></input>
                <br />
                <br />
                <br />
                <button>Send Message</button>
            </div>
            <div className='con_contact'>
                <div >
                    <img src="https://www.flaticon.com/svg/static/icons/svg/597/597177.svg" width='40px' height='40px' />
                    <a href='https://wa.me//972595199606' target='_blank'><h3>+970595199606</h3></a>
                </div>
                <div>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3313/3313929.svg" width='40px' height='40px' />
                    <a href="https://www.researchgate.net/profile/K_Awawdeh/publication/265335402/figure/fig1/AS:684053346934808@1540102435966/West-Bank-geographical-map-and-sample-location-of-the-Hebron-region.ppm" target="_blank"><h3>Hebron_Palestine</h3></a>
                </div>
                <div>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/725/725643.svg" width='40px' height='40px' />
                    <a href="https://mail.google.com/mail/" target="_blank"><h3>shaimaazmi0@gmail.com</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;