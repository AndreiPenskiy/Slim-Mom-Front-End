import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import translationUA from "../locales/ua/translationUA.json";
import translationEN from "../locales/en/translationEN.json";
import translationRU from "../locales/ru/translationRU.json";

const resources = {
   ua: {
     translation: translationUA
    },
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
 };


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "ua",
        whitelist: ["ua", "ru", "en"],
        debug: true,
        detection: {
            order: ["localStorage", "cookie"],
            caches: ["localStorage", "cookie"],
        },
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;