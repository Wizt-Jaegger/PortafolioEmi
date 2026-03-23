import React, { useState, useEffect } from "react";
import './Navbar.css'; 
import logo from '../../assets/logoPortafolio.svg';
import menu_icon from '../../assets/menu-icon.svg';
import tache_icon from '../../assets/tache.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const NavbarAI = () => {
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
    
    // UserWay Widget
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
            ml: "Machine Learning",
            algo: "Algoritmos",
            data: "Datos & Visión",
            contact: "Regresar"
        },
        en: {
            home: "Home",
            ml: "Machine Learning",
            algo: "Algorithms",
            data: "Data & Vision",
            contact: "Go back"
        },
        de: {
            home: "Startseite",
            ml: "Maschinelles Lernen",
            algo: "Algorithmen",
            data: "Daten & Vision",
            contact: "Rückkehr"
        },
        fr: {
            home: "Accueil",
            ml: "Apprentissage Auto.",
            algo: "Algorithmes",
            data: "Données & Vision",
            contact: "Retour"
        }
    };

    const t = translations[language];

    return (
        <div>
            {/* Botón flotante WhatsApp */}
            <a className="botonFlotante" href="https://wa.me/527779904960" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>

            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <a href="https://emireyes.com">
                    <img src={logo} alt="logo Emi" className="logo" />
                </a>

                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li><Link to="presentacion" smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>{t.home}</Link></li>
                    <li><Link to="ml" smooth={true} offset={-100} duration={500} onClick={() => setMobileMenu(false)}>{t.ml}</Link></li>
                    <li><Link to="algo" smooth={true} offset={-100} duration={500} onClick={() => setMobileMenu(false)}>{t.algo}</Link></li>
                    <li><Link to="data" smooth={true} offset={-100} duration={500} onClick={() => setMobileMenu(false)}>{t.data}</Link></li>
                    <li className="contactoBtn"><a href="https://emireyes.com/#contact" className="btn">{t.contact}</a></li>
                </ul>

                <div className="menu-container">
                    <div className="engBtn" onClick={() => toggleLanguage()}>{language.toUpperCase()}</div>
                    <img src={mobileMenu ? tache_icon : menu_icon} alt="menu" className="menu-icon" onClick={toggleMenu} />
                </div>
            </nav>
        </div>
    );
};

export default NavbarAI;