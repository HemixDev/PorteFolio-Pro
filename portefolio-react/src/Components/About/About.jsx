import React, {useEffect, useRef} from "react";
import './About.css'
import profile_img from '../../assets/photo-marseille.jpg'
import { useTranslation } from "react-i18next";

const About = () => {

    const SkillBar = ({ skillClass, width, animationName }) => {
        const skillRef = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                            observer.unobserve(entry.target); // arrête l'observation une fois l'animation lancée
                        }
                    });
                },
                { threshold: 0.5 } // déclenche à 50% de visibilité
            );
    
            if (skillRef.current) {
                observer.observe(skillRef.current);
            }
    
            return () => {
                if (skillRef.current) {
                    observer.unobserve(skillRef.current);
                }
            };
        }, []);
    
        return (
            <div className={`skillbar ${skillClass}`} ref={skillRef}>
                <span></span>
            </div>
        );
    };

    const { t } = useTranslation()

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
                    </div>
                    <div className="about-skills">
                        <h2>My Skills</h2>
                        <li>
                            <span className="heading">HTML & CSS</span>
                            <SkillBar skillClass="html" width="80%" animationName="html" />

                        </li>
                        <li>
                            <span className="heading">ReactJS</span>
                            <SkillBar skillClass="react" width="50%" animationName="react" />

                        </li>
                        <li>
                            <span className="heading">NodeJS</span>
                            <SkillBar skillClass="node" width="40%" animationName="node" />
                        </li>
                        <li>
                            <span className="heading">MongoDB</span>
                            <SkillBar skillClass="mongo" width="60%" animationName="mongo" />
                        </li>
                    </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>+1</h1>
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