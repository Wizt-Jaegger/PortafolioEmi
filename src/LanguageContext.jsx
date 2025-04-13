import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const getDefaultLanguage = () => {
        const browserLanguage = navigator.language || navigator.userLanguage;
        return browserLanguage.startsWith("es") ? "es" : "en";
    };

    const [language, setLanguage] = useState(getDefaultLanguage);

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook for easy use
export const useLanguage = () => useContext(LanguageContext);
