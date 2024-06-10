import React from "react";
import './About.css'
import profile_img from '../../assets/profile_img.svg'
import { useTranslation } from "react-i18next";

const About = () => {

    const {t} = useTranslation()

    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>{t('about.title')}</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>{t('about.para1')}</p>
                        <p>{t('about.para2')}</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                        <div className="about-skill"><p>Nodejs</p><hr style={{width: "50%"}}/></div>
                        <div className="about-skill"><p>React</p><hr style={{width: "50%"}}/></div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{width: "50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>+3</h1>
                    <p>{t('about.experience')}</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>+10</h1>
                    <p>{t("about.project")}</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>x</h1>
                    <p>{t('about.client')}</p>
                </div>
            </div>
        </div>
    )
}

export default About