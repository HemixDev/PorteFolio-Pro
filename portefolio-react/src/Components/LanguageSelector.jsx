import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/index.js';
import { MdLanguage } from "react-icons/md"; 

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="language-selector" onClick={toggleLanguage}>
            <MdLanguage style={{fontSize: '45px'}}/>
        </div>
    );
};

export default LanguageSelector;
