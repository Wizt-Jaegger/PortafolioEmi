import React from 'react';
import logoFooter from "../../assets/logoPortafolio.svg";
import "./Footer.css";
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const Footer = () => {
    const { language } = useLanguage();

    const translations = {
        privacy: {
            es: "Política de privacidad",
            en: "Privacy Policy",
            de: "Datenschutzrichtlinie",
            fr: "Politique de confidentialité"
        },
        terms: {
            es: "Términos y condiciones",
            en: "Terms and Conditions",
            de: "Allgemeine Geschäftsbedingungen",
            fr: "Termes et conditions"
        },
        index: {
            es: "Índice",
            en: "Index",
            de: "Inhalt",
            fr: "Index"
        },
        home: {
            es: "Inicio",
            en: "Home",
            de: "Startseite",
            fr: "Accueil"
        },
        webSystems: {
            es: "Sistemas Web",
            en: "Web Systems",
            de: "Websysteme",
            fr: "Systèmes Web"
        },
        devOps: {
            es: "DevOps (Virtualización)",
            en: "DevOps (Virtualization)",
            de: "DevOps (Virtualisierung)",
            fr: "DevOps (Virtualisation)"
        },
        embeddedSystems: {
            es: "Sistemas Embebidos",
            en: "Embedded Systems",
            de: "Eingebettete Systeme",
            fr: "Systèmes Embarqués"
        },
        linuxEngineering: {
            es: "Ingeniería Linux",
            en: "Linux Engineering",
            de: "Linux-Engineering",
            fr: "Ingénierie Linux"
        },
        robotics: {
            es: "Robótica",
            en: "Robotics",
            de: "Robotik",
            fr: "Robotique"
        },
        artificialIntelligence: {
            es: "Inteligencia Artificial",
            en: "Artificial Intelligence",
            de: "Künstliche Intelligenz",
            fr: "Intelligence Artificielle"
        },
        
        contact: {
            es: "Contacto",
            en: "Contact",
            de: "Kontakt",
            fr: "Contact"
        },
        follow: {
            es: "Síguenos",
            en: "Follow us",
            de: "Folge uns",
            fr: "Suivez-nous"
        },
        addressLine1: {
            es: "Boulevard Cuauhnáhuac #566, Col. Lomas del Texcal, Código postal 62550",
            en: "Boulevard Cuauhnahuac #566, Col. Lomas del Texcal, Postal code 62550",
            de: "Boulevard Cuauhnahuac #566, Col. Lomas del Texcal, Postleitzahl 62550",
            fr: "Boulevard Cuauhnahuac #566, Col. Lomas del Texcal, Code postal 62550"
        },
        addressLine2: {
            es: "Jiutepec, Morelos, México",
            en: "Jiutepec, Mor. Mex",
            de: "Jiutepec, Mor. Mexiko",
            fr: "Jiutepec, Mor. Mexique"
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* Company Section */}
                    <div className="footer-col" id="company">
                        <h3 className="footer-h3">
                            <span className="footer-logo-container">
                                <img src={logoFooter} alt="Logo" className="footer-logo" />
                            </span>
                        </h3>
                        <div className="footer-links">
                            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                                {translations.privacy[language]}
                            </a>
                            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                                {translations.terms[language]}
                            </a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-col" id="services">
                        <h3 className="footer-h3">
                            {translations.index[language]}
                        </h3>
                        <div className="footer-links">
                            <a href="/linux">
                                {translations.linuxEngineering[language]}
                            </a>
                            <a href="/devops">
                                {translations.devOps[language]}
                            </a>
                            <a href="/robots">
                                {translations.robotics[language]}
                            </a>
                            <a href="/ai">
                                {translations.artificialIntelligence[language]}
                            </a>
                            <a href="/embedded">
                                {translations.embeddedSystems[language]}
                            </a>
                            <a href="/web">
                                {translations.webSystems[language]}
                            </a>
                        </div>

                    </div>

                    {/* Contact Section */}
                    <div className="footer-col" id="contact">
                        <h3 className="footer-h3">
                            {translations.contact[language]}
                        </h3>
                        <div className="footer-contact-details">
                            <i className="fa fa-location"></i> 
                            <p>
                                {translations.addressLine1[language]}<br />
                                {translations.addressLine2[language]}
                            </p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-phone"></i>
                            <p>+52 777 990 4960</p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="footer-col" id="servicios">
                        <h3 className='footer-h3'>{translations.follow[language]}</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/share/1B6xR3dHLi/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/argi_wizt?igsh=YjN1MHc0cGszYm85" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/527779904960" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/luis-emiliano-reyes-gutierrez-231833208/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
