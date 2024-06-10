import React from 'react'
import './Hero.css'
import logo from '../../assets/logo-home.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useTranslation } from 'react-i18next'


const Hero = () => {

    const { t } = useTranslation()

    return (
        <div className='hero'>
            <img src={logo} alt="" />
            <h1>
                <span id='home'>{t('hero.welcome')}</span>{t("hero.under-pseudo")}
            </h1>
            <p>
                {t('hero.mission')}
            </p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu('contact')}>{t("hero.contact")}</AnchorLink></div>
                <div className="hero-resume">{t('hero.resume')}</div>
            </div>
        </div>
    )
}

export default Hero