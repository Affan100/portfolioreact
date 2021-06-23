import React from 'react'
import './contact.scss';
import { useState } from 'react';

const Contact = () => {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id="contact">

            <div className='left2'>
                <img src="assests/Handshake.png" alt="" />
            </div>

            <div className='right2'>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanke, I'll reply ASAP!!!</span>}
                </form>
            </div>

        </div>
    )
}
export default Contact;