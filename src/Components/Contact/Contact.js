import React from 'react';
import './Contact.css';
// import Contactus from './contactassets/contactus.jpeg';

function Contact(){
    return(
        <>
            <div className='contact-con'>
                <div className='conatct-form'>
                    <p>Contact With Us</p>
                    <h1>Feel Free to Write us Anytime</h1>
                    <div className='contact-inner-form'>
                        {/* first div */}
                        <div>
                            <input type='text' placeholder='Name'/>
                            <input type='email' placeholder='Email Address'/>
                        </div>
                        {/* second div */}
                        <div>
                            <input type='number' placeholder='Phone'/>
                            <select placeholder='select option'>
                                <option>student</option>
                                <option>teacher</option>
                            </select>
                        </div>
                        {/* thirs div */}
                        <div>
                            <input type='text' placeholder='Area'/>
                        </div>
                        <textarea placeholder='Write a Message'/>
                        <button>send a message</button>

                    </div>
                </div>
            </div>
            <div>
                <h1>hello world</h1>
            </div>
        </>
    );
}

export default Contact;