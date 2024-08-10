import React, { useEffect, useRef, useState } from "react";
import './About.css';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    const barsRef = useRef([]);
    const sectionRef = useRef(null);

    const skills = [
        { name: 'html5', color: '#E34C26' },
        { name: 'css3', color: '#1572B6' },
        { name: 'javascript', color: '#F7DF1E' },
        { name: 'react', color: '#61DAFB' },
        { name: 'nodejs', color: '#339933' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        barsRef.current.forEach(bar => {
                            if (bar) {
                                bar.classList.remove('hidden');
                                bar.classList.add('animate');
                            }
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <section className="body">
            <h1 className="sub-title">
                My <span>Skills</span>
            </h1>
            <section className="sub-section">
            <div className="container1" id="skills" ref={sectionRef}>
            <h1 className="heading">Technical skills</h1>
            <div className="technical-bars">
                {skills.map((skill, index) => (
                    <div
                        className={`bar hidden`}
                        key={index}
                        ref={el => barsRef.current[index] = el}
                    >
                        <i className={`bx bxl-${skill.name}`} style={{ color: skill.color }}></i>
                        <div className="info">
                            <span>{skill.name.toUpperCase()}</span>
                        </div>
                        <div className={`progress-line ${skill.name}`}>
                            <span></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="container1" ref={sectionRef}>
            <h1 className="heading">Professional Skills</h1>
            <div className="radial-bars">
                <div className="radial-bar hidden" ref={el => barsRef.current[5] = el}>
                    <svg x='0px' y='0px' viewBox="0 0 200 200">
                        <circle className="progress-bar" cx='100' cy='100' r='80'></circle>
                        <circle className="path path-1" cx='100' cy='100' r='80'></circle>
                    </svg>
                    <div className="percentage">70%</div>
                    <div className="text">Creativity</div>
                </div>
                <div className="radial-bar hidden" ref={el => barsRef.current[6] = el}>
                    <svg x='0px' y='0px' viewBox="0 0 200 200">
                        <circle className="progress-bar" cx='100' cy='100' r='80'></circle>
                        <circle className="path path-2" cx='100' cy='100' r='80'></circle>
                    </svg>
                    <div className="percentage">90%</div>
                    <div className="text">Team working</div>
                </div>
                <div className="radial-bar hidden" ref={el => barsRef.current[7] = el}>
                    <svg x='0px' y='0px' viewBox="0 0 200 200">
                        <circle className="progress-bar" cx='100' cy='100' r='80'></circle>
                        <circle className="path path-3" cx='100' cy='100' r='80'></circle>
                    </svg>
                    <div className="percentage">50%</div>
                    <div className="text">English</div>
                </div>
                <div className="radial-bar hidden" ref={el => barsRef.current[8] = el}>
                    <svg x='0px' y='0px' viewBox="0 0 200 200">
                        <circle className="progress-bar" cx='100' cy='100' r='80'></circle>
                        <circle className="path path-4" cx='100' cy='100' r='80'></circle>
                    </svg>
                    <div className="percentage">80%</div>
                    <div className="text">Learning</div>
                </div>
            </div>
        </div>
            </section>
        </section>
    );
}

export default About;
