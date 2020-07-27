import React, { useState, Fragment } from 'react';
import './Contact.css';
import { BASE_URL } from '../CONFIG';
import axios from 'axios';
import Loading from './Loading';


const Contact = props => {

    const [email, changeEmail] = useState('')
    const [comment, changeComment] = useState('')
    const [showAlert, changeShowAlert] = useState(false);
    const [error, changeError] = useState(false);
    const [loading, changeLoading] = useState(false);

    const submitComment = e => {
        e.preventDefault();
        const data = {
            email: email,
            message: comment
        }
        const url = BASE_URL + '/api/contacts/';
        changeLoading(true);
        axios.post(url, data)
            .then(res => {
                changeLoading(false);
                changeError(false);
                changeShowAlert(true);
                changeEmail('');
                changeComment('');
                setTimeout(() => {
                    changeShowAlert(false);
                }, 3000);
            })
            .catch(() => {
                changeLoading(false);
                changeShowAlert(true);
                changeError(true);
                setTimeout(() => {
                    changeShowAlert(false);
                }, 3000);
            })
    }

    return (
        <form onSubmit={submitComment} className="Contact">
            <h1 id="ContactUs">Contact Us</h1>
            {showAlert ? <h4 style={{ color: error ? 'tomato' : 'green' }} >
                {error ? 'Something went wrong!' : 'Message sent successful'}
            </h4> : null}
            <div className="Card">
                {!loading ?
                    <Fragment>
                        <h4>Send us a message</h4>
                        <p>Email</p>
                        <input type="email" value={email} onChange={e => changeEmail(e.target.value)} />
                        <p>Message</p>
                        <textarea name="" style={{ resize: 'none' }}
                            value={comment} onChange={e => changeComment(e.target.value)}
                            cols="30" rows="10"></textarea>
                        <button type="submit" className="Send">Send</button>
                    </Fragment> :
                    <h4>Loading...</h4>
                }
            </div>
        </form>
    )
}

export default Contact;