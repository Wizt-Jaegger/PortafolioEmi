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
        about: {
            es: "Acerca de",
            en: "About",
            de: "Über uns",
            fr: "À propos"
        },
        plans: {
            es: "Planes",
            en: "Plans",
            de: "Pläne",
            fr: "Plans"
        },
        gallery: {
            es: "Galería",
            en: "Gallery",
            de: "Galerie",
            fr: "Galerie"
        },
        testimonials: {
            es: "Testimonios",
            en: "Testimonials",
            de: "Erfahrungsberichte",
            fr: "Témoignages"
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
                            <span className="footer-company-name">SA de CV</span>
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
                            <Link to="presentacion" smooth={true} offset={0} duration={500}>
                                {translations.home[language]}
                            </Link>
                            <Link to="acercaDe" smooth={true} offset={-150} duration={500}>
                                {translations.about[language]}
                            </Link>
                            <Link to="planes" smooth={true} offset={-260} duration={500}>
                                {translations.plans[language]}
                            </Link>
                            <Link to="galeria" smooth={true} offset={-260} duration={500}>
                                {translations.gallery[language]}
                            </Link>
                            <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                                {translations.testimonials[language]}
                            </Link>
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
                            <a href="https://www.facebook.com/profile.php?id=61566404114321" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/techpal_mx/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/527779712940" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://x.com/TechPal_mx" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/techpal-mx/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
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
