import React from 'react'
import "./index.scss"
import Header from '../Header/Header'

const Contact = () => {
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
                        <form>
                            <div className="form-group">

                                <input placeholder='Name' type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">

                                <input placeholder='CellPhone' type="tel" id="cellphone" name="cellphone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            </div>

                            <div className="form-group">

                                <input placeholder='E-Mail' type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">

                                <textarea placeholder='Leave A Message' id="message" name="message" rows="4" required></textarea>
                            </div>
                            <div className='buttonWrap'><button type="submit" className='submitBtn'>Submit</button></div>

                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Contact