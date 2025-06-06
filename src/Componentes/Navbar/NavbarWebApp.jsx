import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../../assets/logoPortafolio.svg';
import menu_icon from '../../assets/menu-icon.svg';
import tache_icon from '../../assets/tache.svg';
import dropdown_icon from '../../assets/dropdown.svg'; 
import closedown_icon from '../../assets/closedown.svg'; 
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [trayectoriaMenu, setTrayectoriaMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

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
    const toggleTrayectoriaMenu = () => setTrayectoriaMenu(!trayectoriaMenu);

    const translations = {
        es: {
            home: "Inicio",
            about: "Acerca de",
            services: "Servicios",
            trajectory: "Trayectoria",
            clients: "Clientes",
            technologies: "Tecnologías",
            portfolio: "Portafolio",
            testimonials: "Testimonios",
            contact: "Regresar",
            txtlink: "encontrarás más enlaces pronto, gracias por la paciencia"
        },
        en: {
            home: "Home",
            about: "About",
            services: "Services",
            trajectory: "Trajectory",
            clients: "Clients",
            technologies: "Technologies",
            portfolio: "Portfolio",
            testimonials: "Testimonials",
            contact: "Go back",
            txtlink: "you'll find more links soon, thanks for the patience"
        },
        de: {
            home: "Startseite",
            about: "Über uns",
            services: "Dienstleistungen",
            trajectory: "Werdegang",
            clients: "Kunden",
            technologies: "Technologien",
            portfolio: "Portfolio",
            testimonials: "Referenzen",
            contact: "Rückkehr",
            txtlink: "findet dir noch mehr links, danke für die patience"
        },
        fr: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            trajectory: "Parcours",
            clients: "Clients",
            technologies: "Technologies",
            portfolio: "Portfolio",
            testimonials: "Témoignages",
            contact: "Retour",
            txtlink: "vous trouverez plus de liens bientôt, merci pour la patience"
        }
    };

    const t = translations[language];

    return (
        <div>
            {/* Botón flotante WhatsApp */}
            <a
                className="botonFlotante"
                href="https://wa.me/527779904960"
                target="_blank"
                rel="noopener noreferrer"
                title="¡Whasaaaa!"
            >
                <i className="fab fa-whatsapp"></i>
            </a>

            {/* Botón flotante arriba */}
            <a className={`botonUp ${sticky ? 'dark-botonUp' : ''}`} title="¡Pa' arriba!">
                <Link to="presentacion" smooth={true} offset={0} duration={800}>
                    <i className='bx bx-chevron-up-circle'></i>
                </Link>
            </a>

            {/* Botón flotante abajo */}
            <a className={`botonDown ${sticky ? 'dark-botonDown' : ''}`} title="¡Pa' abajo!">
                <Link to="footer" smooth={true} offset={0} duration={1000}>
                    <i className='bx bx-chevron-down-circle'></i>
                </Link>
            </a>

            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <a href="/">
                    <img src={logo} alt="logo Emi" className="logo" />
                </a>

                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li className="active">
                        <Link to="presentacion" smooth={true} offset={0} duration={500}>
                            {t.home}
                        </Link>
                    </li>
                    <li>
                        <div>
                            {t.txtlink}
                        </div>
                    </li>
                    
                    <li className="contactoBtn">
                        <a href="/#contact" smooth={true} offset={-260} duration={500} className="btn">
                            {t.contact}
                            <div class="btn2">
                            </div>
                            
                        </a>
                    </li>
                </ul>
                <div className="menu-container">
                <div className="engBtn"
                    onClick={() => {
                        toggleLanguage(); 
                        setTimeout(() => {
                            window.location.reload(); 
                        }, 1); 
                    }}
                >
                    {language.toUpperCase()}
                </div>
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

export default Navbar;
