import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logomark.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../LanguageSelector'
import { BiRefresh } from 'react-icons/bi'


const Navbar = () => {

    const [menu, setMenu] = useState("home")
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "-50px";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-400px";
    }

    const { t } = useTranslation()

    const refreshPage = () => {
        window.location.reload(false)
    }

    return (
        <div className='navbar'>
            
            <img className='navbar-logo' src={logo} alt='' onClick={refreshPage}/>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu('home')}>{t("navbar.home")}</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')}>{t("navbar.about me")}</p></AnchorLink></li>
                {/* <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('services')}>{t("navbar.services")}</p></AnchorLink></li> */}
                <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={() => setMenu('mywork')}>{t("navbar.portfolio")}</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>{t("navbar.contact")}</p></AnchorLink></li>
            </ul>
            <div className="nav-action">
                <div className='lng'>
                    <LanguageSelector />
                </div>
                <div className="nav-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu('contact')}>{t("navbar.contact-button")}</AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar