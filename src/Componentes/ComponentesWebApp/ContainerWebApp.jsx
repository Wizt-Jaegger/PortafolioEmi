import React from "react";
import NavbarWebApp from "../Navbar/NavbarWebApp";
import PresentacionWebApp from "../Presentacion/PresentacionWebApp";
import Titulo from "../Titulo/Titulo";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";

// Import the components
import Frontend from "./Frontend";
import Backend from "./Backend";
import WebDevelopment from "./WebDevelopment";

const ContainerApp = () => {
    const { language } = useLanguage();

    // Translation Dictionary
    const translations = {
        en: {
            frontendSub: "Frontend development experience",
            frontendTitle: "Need a Frontend?",
            // Swapped/Updated titles for better flow
            fullstackSub: "Modules & Features",
            fullstackTitle: "Complete Feature Implementation",
            backendSub: "Robust Architecture & APIs",
            backendTitle: "Backend Logic"
        },
        es: {
            frontendSub: "Experiencia en desarrollo frontend",
            frontendTitle: "¿Necesitas un Frontend?",
            fullstackSub: "Módulos y Funcionalidades",
            fullstackTitle: "Implementación de Features Completas",
            backendSub: "Arquitectura robusta y APIs",
            backendTitle: "Lógica Backend"
        },
        fr: {
            frontendSub: "Expérience en développement frontend",
            frontendTitle: "Besoin d'un Frontend ?",
            fullstackSub: "Modules et Fonctionnalités",
            fullstackTitle: "Implémentation Complète",
            backendSub: "Architecture robuste et API",
            backendTitle: "Logique Backend"
        },
        de: {
            frontendSub: "Erfahrung in der Frontend-Entwicklung",
            frontendTitle: "Brauchen Sie einen Frontend?",
            fullstackSub: "Module und Funktionen",
            fullstackTitle: "Komplette Feature-Implementierung",
            backendSub: "Robuste Architektur & APIs",
            backendTitle: "Backend-Logik"
        }
    };

    // Default to English if language is not found
    const t = translations[language] || translations.en;

    return (
        <div>
            <NavbarWebApp />
            <PresentacionWebApp />
            
            {/* 1. FRONTEND: The Visual Hook (Immediate Relevance) */}
            <div id="frontend">
                <Titulo 
                    subTitulo={t.frontendSub} 
                    titulo={t.frontendTitle} 
                />
                <Frontend />
            </div>

            {/* 2. WEB DEVELOPMENT: The "Meat" (Your Fullstack Strength) 
                Moved here to capture interest right after the visual hook.
                This demonstrates that you understand the entire lifecycle of a feature.
                ID matches the 'to="fullstack"' link in Navbar.
            */}
            <div id="fullstack">
                <Titulo 
                    subTitulo={t.fullstackSub} 
                    titulo={t.fullstackTitle} 
                />
                <WebDevelopment />
            </div>

            {/* 3. BACKEND: The Foundation (Reliability) 
                Placed last to solidify trust without distracting from the UI focus.
            */}
            <div id="backend">
                <Titulo 
                    subTitulo={t.backendSub} 
                    titulo={t.backendTitle} 
                />
                <Backend />
            </div>

            <div className="container">
               {/* Any other existing content */}
            </div>
            
            <Footer />
        </div>
    );
}

export default ContainerApp;