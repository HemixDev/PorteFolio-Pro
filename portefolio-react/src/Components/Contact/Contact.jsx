import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
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
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        lobortis, dolor at molestie vestibulum, nisi lorem dignissim ipsum,
                        at dictum odio nisi vel eros. Donec.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>hemixdev13@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+33 7 86 52 29 21</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Marseille, France</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="'Enter your email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea
                        name="message"
                        rows="8"
                        placeholder="Enter your message"
                    ></textarea>
                    <button type="submit" className="contact-submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
