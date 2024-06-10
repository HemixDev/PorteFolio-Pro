import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/index.js';
import languageIcon from '../../assets/translation-sign-16031.svg'; 
import './languageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="language-selector" onClick={toggleLanguage}>
            <img 
                src={languageIcon} 
                alt="Language" 
                className="language-icon" 
            />
        </div>
    );
};

export default LanguageSelector;
