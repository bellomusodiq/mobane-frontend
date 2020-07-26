import React from 'react';
import './Contact.css';


const Contact = props => {

    return (
        <form className="Contact">
            <h1 id="ContactUs">Contact Us</h1>
            <div className="Card">
                <h4>Send us a message</h4>
                <p>Email</p>
                <input type="email"  />
                <p>Message</p>
                <textarea name="" cols="30" rows="10"></textarea>
                <button type="submit" className="Send">Send</button>
            </div>
        </form>
    )
}

export default Contact;