import React from 'react'
import './Hero.css'
import logo from '../../assets/logo-home.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HeroDesc from '../../Content/HeroDesc'


const Hero = () => {
    return (
        <div className='hero'>
            <img src={logo} alt="" />
            <h1>
                <span id='home'>Bonjours à tous, je suis HemixDev,</span> jeune développeur de Marseille.
            </h1>
            <p>
                {HeroDesc}
            </p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu('contact')}>Me Contacter</AnchorLink></div>
                <div className="hero-resume">Mon CV</div>
            </div>
        </div>
    )
}

export default Hero