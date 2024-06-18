import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import logo from '../../assets/transparent_logo (1).png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useTranslation } from 'react-i18next'
import ResumeCv from '../../Public/MonCV.pdf'

const Hero = () => {

    const { t } = useTranslation()
    
    const [text, setText] = useState('')
    const [charIndex, setCharIndex] = useState(0)
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const fullText = ['Hemix Dev', 'Maximilien']

    useEffect(() => {
        const randomSpeed = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const play = () => {
            const currentText = fullText[currentTextIndex]
            setText(currentText.slice(0, charIndex))
            setCharIndex(prevIndex => {
                if (prevIndex >= currentText.length) {
                    setCurrentTextIndex((currentTextIndex + 1) % fullText.length)
                    return 0
                }
                return prevIndex + 1
            })
        }
        const timer = setInterval(play, randomSpeed(100, 300))
        return () => clearInterval(timer)
    }, [charIndex, currentTextIndex, fullText])

    return (
        <div className='hero'>
            <div className="hero-logo">
                <img src={logo} alt="" />
            </div>
            <h1>
                <span id='home' className='home1'>{t('hero.welcome')}</span>
                <br />
                <span id='autotext'>{text}</span>
                <br />
                <span className='home2'>
                    {t("hero.under-pseudo")}
                </span>
            </h1>
            <p>
                {t('hero.mission')}
            </p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu('contact')}>{t("hero.contact")}</AnchorLink></div>
                <a className="hero-resume" href={ResumeCv} download="MonCV.pdf">
                    {t('hero.resume')}
                </a>
            </div>
        </div>
    )
}

export default Hero