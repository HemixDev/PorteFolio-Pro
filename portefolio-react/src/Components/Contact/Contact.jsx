import React, { useState } from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaGithub, FaLinkedin, FaStackOverflow, FaDiscord } from "react-icons/fa";
import { FaPhoneVolume, FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {

    const { t } = useTranslation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2ecba564-c57e-4b36-832f-8a7ddd3b1542");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            resetForm();
        }
    };

    function copy(text, event) {
        navigator.clipboard.writeText(text).then(() => {
            const confirmationMessage = document.createElement('div');
            confirmationMessage.textContent = t('other.copy');
            confirmationMessage.classList.add('copy-confirm');

            confirmationMessage.style.top = `${event.clientY - 40}px`;
            confirmationMessage.style.left = `${event.clientX - 43}px`;

            document.body.appendChild(confirmationMessage);

            setTimeout(() => {
                confirmationMessage.remove();
            }, 500);
        }).catch(err => {
            console.error('Failed to copy', err);
        });
    }

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>{t('contact.title')}</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>{t('contact.underTitle')}</h1>
                    <div className="media">
                        <a href="#" target="_blank"><div className="icon insta"><FaInstagram style={{ fontSize: '50px' }} /></div></a>
                        <a href="https://github.com/HemixDev" target="_blank"><div className="icon github"><FaGithub style={{ fontSize: '47px' }} /></div></a>
                        <a href="https://www.linkedin.com/in/maximilien-pont-951961240/" target="_blank"><div className="icon linkedin"><FaLinkedin style={{ fontSize: '48px' }} /></div></a>
                        <a href="https://stackoverflow.com/users/23138625/hemix" target="_blank"><div className="icon stack"><FaStackOverflow style={{ fontSize: '47px' }} /> </div></a>
                        <a href="#" target="_blank"><div className="icon facebook"><FaFacebook style={{ fontSize: '47px' }} /> </div></a>
                        <a href="#"><div className="icon discord"><FaDiscord style={{ fontSize: '47px' }} /> </div></a>
                    </div>
                        <div className="contact-details">
                            <div className="contact-detail email" onClick={(e) => copy('hemixdev13@gmail.com', e)} >
                                <IoIosMail className="icon-contact" title="copy" style={{ fontSize: '40px' }} />
                                <p>Email</p>
                                <p>hemixdev13@gmail.com</p>
                            </div>
                            <hr />
                            <div className="contact-detail phone" onClick={(e) => copy(t('contact.contact-detail.phone'), e)}>
                                <FaPhoneVolume className="icon-contact" title="copy" style={{ fontSize: '34px' }} />
                                <p>Phone</p>
                                <p>{t('contact.contact-detail.phone')}</p>
                            </div>
                            <hr />
                            <div className="contact-detail location" onClick={(e) => copy('Marseille, France', e)} >
                                <FaLocationDot className="icon-contact" title="copy" style={{ fontSize: '40px' }} />
                                <p>Location</p>
                                <p className="contact-text">Marseille, France</p>
                            </div>
                    </div>

                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <div className="form-group">
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="" />
                        <span>{t('contact.contact-name.name')}</span>
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="" />
                        <span>{t('contact.contact-mail.mail')}</span>
                    </div>
                    <div className="form-group textarea">
                        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="8" placeholder=""></textarea>
                        <span>{t('contact.text.text')}</span>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="contact-submit">
                            {t('contact.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
