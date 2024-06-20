import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translateEn from "../Locales/en/translation.json"
import translateFr from "../Locales/fr/translation.json"

const resources = {
    en:{
        translation: translateEn
    },
    fr:{
        translation: translateFr
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr',
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        ns: 'translation',
        defaultNS: 'translation'
    })

export default i18n;
