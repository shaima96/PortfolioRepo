import React from 'react';

import './contact.css'
function Contact() {
    return (
        <div className="contact">
            <div className='conc'>
                <br/>
                <br/>
                <br/>
            <h2>Get In Touch</h2>
            </div>
             {/* <div className='form'>
               <input placeholder='Your Name'></input>
               <br/>
               <br/>
               <input placeholder='Your Email'></input>
               <br/>
               <br/>
               <input placeholder='Write a message'></input>
               <br/>
               <br/>
               <button>SEND MESSAGE</button>
              </div>  */}

            <div className='con'>
           <div >
               <img src="https://www.flaticon.com/svg/static/icons/svg/597/597177.svg" width='40px' height='40px'/>
               <h3>0595199606</h3>
           </div>
           <div>
               <img src="https://www.flaticon.com/svg/static/icons/svg/3313/3313929.svg" width='40px' height='40px'/>
               <h3>Sourif_Hebron_Palestine</h3>
           </div>
           <div>
               <img src="https://www.flaticon.com/svg/static/icons/svg/725/725643.svg" width='40px' height='40px'/>
               <h3>shaimaazmi0@gmail.com</h3>
           </div>
           </div>
        </div>
    );
}

export default Contact;