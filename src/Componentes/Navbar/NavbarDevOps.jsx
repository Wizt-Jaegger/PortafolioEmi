import React, { useState, useEffect } from "react";
import './Navbar.css'; // You can reuse Navbar.css or create a NavbarDevOps.css if needed
import logo from '../../assets/logoPortafolio.svg';
import menu_icon from '../../assets/menu-icon.svg';
import tache_icon from '../../assets/tache.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const NavbarDevOps = () => {
    const { language, toggleLanguage } = useLanguage();
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // UserWay Widget (Accessibility)
    useEffect(() => {
        if (!document.querySelector('script[data-userway]')) {
            const script = document.createElement("script");
            script.src = "https://cdn.userway.org/widget.js";
            script.dataset.account = "kjnkkEfZx0";
            script.dataset.userway = "true";
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);
    
    const toggleMenu = () => setMobileMenu(!mobileMenu);

    const translations = {
        es: {
            home: "Inicio",
            support: "Soporte Técnico",
            automation: "Automatización",
            infra: "Infraestructura",
            contact: "Regresar"
        },
        en: {
            home: "Home",
            support: "Technical Support",
            automation: "Automation",
            infra: "Infrastructure",
            contact: "Go back"
        },
        de: {
            home: "Startseite",
            support: "Technischer Support",
            automation: "Automatisierung",
            infra: "Infrastruktur",
            contact: "Rückkehr"
        },
        fr: {
            home: "Accueil",
            support: "Support Technique",
            automation: "Automatisation",
            infra: "Infrastructure",
            contact: "Retour"
        }
    };

    const t = translations[language];

    return (
        <div>
            {/* WhatsApp Floating Button */}
            <a
                className="botonFlotante"
                href="https://wa.me/527779904960"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>

            {/* Scroll Up Button */}
            <a className={`botonUp ${sticky ? 'dark-botonUp' : ''}`} title="Up">
                <Link to="presentacion" smooth={true} offset={0} duration={800}>
                    <i className='bx bx-chevron-up-circle'></i>
                </Link>
            </a>

            {/* Scroll Down Button */}
            <a className={`botonDown ${sticky ? 'dark-botonDown' : ''}`} title="Down">
                <Link to="footer" smooth={true} offset={0} duration={1000}>
                    <i className='bx bx-chevron-down-circle'></i>
                </Link>
            </a>

            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                {/* LOGO LINK updated to emireyes.com */}
                <a href="https://emireyes.com">
                    <img src={logo} alt="logo Emi" className="logo" />
                </a>

                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    {/* 1. HOME (Presentacion) */}
                    <li>
                        <Link to="presentacion" smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>
                            {t.home}
                        </Link>
                    </li>

                    {/* 2. SUPPORT Section */}
                    <li>
                        <Link to="support" smooth={true} offset={-60} duration={500} onClick={() => setMobileMenu(false)}>
                            {t.support}
                        </Link>
                    </li>

                    {/* 3. AUTOMATION Section */}
                    <li>
                        <Link to="automation" smooth={true} offset={-60} duration={500} onClick={() => setMobileMenu(false)}>
                            {t.automation}
                        </Link>
                    </li>

                    {/* 4. INFRASTRUCTURE Section */}
                    <li>
                        <Link to="infra" smooth={true} offset={-60} duration={500} onClick={() => setMobileMenu(false)}>
                            {t.infra}
                        </Link>
                    </li>
                    
                    {/* GO BACK Button (Links to main site contact) */}
                    <li className="contactoBtn">
                        <a href="https://emireyes.com/#contact" className="btn">
                            {t.contact}
                        </a>
                    </li>
                </ul>

                <div className="menu-container">
                    {/* Language Switcher */}
                    <div className="engBtn"
                        onClick={() => {
                            toggleLanguage(); 
                            // Small timeout to allow state change before reload if strictly necessary
                            setTimeout(() => {
                                // window.location.reload(); 
                            }, 1); 
                        }}
                    >
                        {language.toUpperCase()}
                    </div>
                    
                    {/* Mobile Menu Toggle */}
                    <img
                        src={mobileMenu ? tache_icon : menu_icon}
                        alt="menu"
                        className="menu-icon"
                        onClick={toggleMenu}
                    />
                </div>
            </nav>
        </div>
    );
};

export default NavbarDevOps;