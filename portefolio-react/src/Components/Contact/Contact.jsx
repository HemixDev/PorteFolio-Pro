import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaGithub, FaLinkedin, FaStackOverflow, FaDiscord} from "react-icons/fa";
import {FaPhoneVolume, FaLocationDot} from 'react-icons/fa6';
import { IoIosMail } from "react-icons/io";

const Contact = () => {

    const {t} = useTranslation()

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
                alert(res.message)
            }
        };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>{t('contact.title')}</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>{t('contact.underTitle')}</h1>
                    <p>
                        {t('contact.desc')}
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <IoIosMail style={{fontSize: '40px'}}/>
                            <p>hemixdev13@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FaPhoneVolume style={{fontSize: '34px'}}/>
                            <p>{t('contact.contact-detail.phone')}</p>
                        </div>
                        <div className="contact-detail">
                            <FaLocationDot style={{fontSize: '40px'}}/>
                            <p>Marseille, France</p>
                        </div>
                        <div className="contact-detail media">
                            <a href=""><div className="insta" target="_blank"><FaInstagram style={{ fontSize: '50px'}}/></div></a>
                            <a href="https://github.com/HemixDev" target="_blank"><div className="github"><FaGithub style={{ fontSize: '47px'}}/></div></a>
                            <a href="https://www.linkedin.com/in/maximilien-pont-951961240/" target="_blank"><div className="linkedin"><FaLinkedin style={{ fontSize: '48px'}}/></div></a>
                            <a href="https://stackoverflow.com/users/23138625/hemix" target="_blank"><div className="stack"><FaStackOverflow style={{ fontSize: '47px'}}/> </div></a>
                            <div className="stack"><FaDiscord style={{ fontSize: '47px'}}/> </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">{t('contact.contact-name.name')}</label>
                    <input type="text" placeholder={t('contact.contact-name.placeholder')} name="name" />
                    <label htmlFor="">{t('contact.contact-mail.mail')}</label>
                    <input type="email" placeholder={t('contact.contact-mail.placeholder')} name="email" />
                    <label htmlFor="">{t('contact.text.text')}</label>
                    <textarea
                        name="message"
                        rows="8"
                        placeholder={t('contact.text.placeholder')}
                    ></textarea>
                    <button type="submit" className="contact-submit">
                        {t('contact.submit')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
