import React from 'react'
import "./index.scss"
import Header from '../Header/Header'
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oe13zq7', 'template_agk0mjm', form.current, 'egyj_QBoyO0wlfngI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className='smtng'>
            <Header />
            <div className='contact'>

                <div className='contact--container'>
                    <div className='contact--container__left'>
                        <h2>Let's Chat.</h2>
                        <h3>Tell me about your project</h3>
                    </div>
                    <div className='contact--container__form'>
                        <h2>Contact Me</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">

                                <input placeholder='Name' type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">

                                <input placeholder='CellPhone' type="tel" id="cellphone" name="cellphone" required />
                            </div>

                            <div className="form-group">

                                <input placeholder='E-Mail' type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">

                                <textarea placeholder='Leave A Message' id="message" name="message" rows="4" required></textarea>
                            </div>
                            <div className='buttonWrap'><button type="submit" value="Send" className='submitBtn'>Submit</button></div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Contact