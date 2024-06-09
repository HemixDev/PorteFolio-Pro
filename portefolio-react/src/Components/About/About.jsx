import React from "react";
import './About.css'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat sollicitudin ligula, nec tristique nisi suscipit quis. Duis purus metus, laoreet ut ipsum id, ultricies varius felis. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat sollicitudin ligula, nec tristique nisi suscipit quis. Duis purus metus, laoreet ut ipsum id, ultricies varius felis. </p>
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
                    <h1>xdd</h1>
                    <p>years of experience</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>x</h1>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>x</h1>
                    <p>Client satisfected</p>
                </div>
            </div>
        </div>
    )
}

export default About