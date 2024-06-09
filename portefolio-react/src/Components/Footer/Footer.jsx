import React from "react";
import './Footer.css'
import footer_logo from '../../assets/logo-footer.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis, dolor at molestie vestibulum, nisi lorem dignissim ipsum, at dictum odio nisi vel eros. Donec.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">ALl right reserved</p>
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