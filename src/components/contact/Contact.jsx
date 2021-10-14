import React from 'react'
import { useRef } from 'react';
import "./Contact.css"
import ContactDetails from "../../img/contact.png"
import Email from "../../img/e-mail.png"
import Adress from "../../img/adress.png"

import emailjs from 'emailjs-com';

export default function Contact() {

    const formRef = useRef()
    const [done, setDone] = useRef(false)

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_608ex8d', 'template_d6v9e9b', formRef.current, 'user_90HPLdkl9udbubEiowKof')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Me contacter
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={ContactDetails}
                                alt=""
                                className="c-icon" />
                            07 68 22 99 52
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon" />
                            mathias.nieuwjaer@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Adress}
                                alt=""
                                className="c-icon" />
                            137 rue des Rozais 51500 Rilly-La-Montagne
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <h1 className="c-title"><span>Envoyer un email</span></h1>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input type="text" placeholder="Nom" name="user_name" />
                        <input type="text" placeholder="Sujet" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" name="message" placeholder="Message"></textarea>
                        <button>Envoyer</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
