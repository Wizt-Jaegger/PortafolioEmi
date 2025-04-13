import React from 'react';
import logoFooter from "../../assets/logo.svg";
import "./Footer.css";
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext"; // Import context

const Footer = () => {
    const { language } = useLanguage(); // Get language state

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
                                {language === "es" ? "Política de privacidad" : "Privacy Policy"}
                            </a>
                            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                                {language === "es" ? "Términos y condiciones" : "Terms and Conditions"}
                            </a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-col" id="services">
                        <h3 className="footer-h3">
                            {language === "es" ? "Índice" : "Index"}
                        </h3>
                        <div className="footer-links">
                            <Link to="presentacion" smooth={true} offset={0} duration={500}>
                                {language === "es" ? "Inicio" : "Home"}
                            </Link>
                            <Link to="acercaDe" smooth={true} offset={-150} duration={500}>
                                {language === "es" ? "Acerca de" : "About"}
                            </Link>
                            <Link to="planes" smooth={true} offset={-260} duration={500}>
                                {language === "es" ? "Planes" : "Plans"}
                            </Link>
                            <Link to="galeria" smooth={true} offset={-260} duration={500}>
                                {language === "es" ? "Galería" : "Gallery"}
                            </Link>
                            <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                                {language === "es" ? "Testimonios" : "Testimonials"}
                            </Link>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-col" id="contact">
                        <h3 className="footer-h3">
                            {language === "es" ? "Contacto" : "Contact"}
                        </h3>
                        <div className="footer-contact-details">
                            <i className="fa fa-location"></i> 
                            <p>
                                {language === "es" ? "Boulevard Cuauhnáhuac #566, Col. Lomas del Texcal, Código postal 62550" : "Boulevard Cuauhnahuac #566, Col. Lomas del Texcal, Postal code 62550"}<br />
                                {language === "es" ? "Jiutepec, Morelos, México" : "Jiutepec, Mor. Mex"}
                            </p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-phone"></i>
                            <p>+52 777 990 4960</p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="footer-col"id='servicios'>
                        <h3 className='footer-h3'>{language === "es" ? "Síguenos" : "Follow us"}</h3>
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
