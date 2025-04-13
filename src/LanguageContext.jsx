import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const supportedLanguages = ["en", "es", "de", "fr"];

    const getDefaultLanguage = () => {
        const browserLanguage = navigator.language.slice(0, 2);
        return supportedLanguages.includes(browserLanguage)
            ? browserLanguage
            : "en";
    };

    const [language, setLanguage] = useState(getDefaultLanguage);

    const toggleLanguage = () => {
        const currentIndex = supportedLanguages.indexOf(language);
        const nextIndex = (currentIndex + 1) % supportedLanguages.length;
        setLanguage(supportedLanguages[nextIndex]);
    };

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, toggleLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook for easy use
export const useLanguage = () => useContext(LanguageContext);
