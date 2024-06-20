import React from "react";
import './Footer.css'
import footer_logo from '../../assets/logo-footer.svg'
import user_icon from '../../assets/user_icon.svg'
import { useTranslation } from "react-i18next";


const Footer = () => {

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
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                </div>
                <form onSubmit={onSubmit} className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" name="email" placeholder={t('footer.email')}/>
                    </div>
                    <button type="submit" className="footer-subscribe">
                        {t('footer.submit')}
                    </button>
                </form>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© All right reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer