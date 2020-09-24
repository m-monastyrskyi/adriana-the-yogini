import i18n from "i18next";
import {reactI18nextModule} from "react-i18next";
import detector from "i18next-browser-languagedetector";

const translationEN = {
    "Welcome to React": "Welcome to React and react-i18next"
}

// the translations
const resources = {
    pl: {
        translation: translationEN
    }
};


i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
       // lng: "pl",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;