import React, { useState } from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import Presentacion from "./Componentes/Presentacion/Presentacion";
import Planes from "./Componentes/Planes/Planes";
import Titulo from "./Componentes/Titulo/Titulo";
import Contacto from "./Componentes/Contacto/Contacto";
import Footer from "./Componentes/Footer/Footer";
import { useLanguage } from "../src/LanguageContext"; 
import Certificados from "./Componentes/Clientes/Clientes";
import Portafolio from "./Componentes/Portafolio/Portafolio";
import Habilidades from "./Componentes/Galeria/Habilidades";
import AboutMe from "./Componentes/AboutMe/AboutMe";

const ContainerApp = () => {
    const { language } = useLanguage();

    return (
        <div>
            <Navbar />
            <Presentacion />
            <div className="container">
                <Titulo 
                    subTitulo={
                        language === "es" ? 
                        "Apps, robots, servidores, VMs y más." : 
                        language === "en" ? 
                        "Apps, robots, servers, VMs, and more." : 
                        language === "de" ? 
                        "Apps, Roboter, Server, VMs und mehr." : 
                        "Applications, robots, serveurs, VMs, et plus encore."
                    } 
                    titulo={
                        language === "es" ? 
                        "¿Qué puedo hacer por ti?" : 
                        language === "en" ? 
                        "What Can I Do for You?" : 
                        language === "de" ? 
                        "Was kann ich für dich tun?" : 
                        "Que puis-je faire pour vous ?"
                    } 
                />
                <Habilidades />
                <AboutMe/>
                
                <Titulo 
                    subTitulo={
                        language === "es" ? "Idiomas" :
                        language === "en" ? "Languages" :
                        language === "de" ? "Sprachen" :
                        "Langues"
                    }
                    titulo={
                        language === "es" ? "¿Necesitas que hable otro idioma?" :
                        language === "en" ? "Do you need me to speak another language?" :
                        language === "de" ? "Brauchen Sie, dass ich eine andere Sprache spreche?" :
                        "Avez-vous besoin que je parle une autre langue ?"
                    }
                />
                <Planes />
                    
                <Titulo 
                    subTitulo={language === "es" ? "Certificaciones" : language === "en" ? "Certificates" : language === "de" ? "Zertifikate" :"Certificats"
                    }
                    titulo={language === "es" ? "Certificaciones y diplomas obtenidos" : language === "en" ? "Certificates and Diplomas I've Earned" : language === "de" ? "Erhaltene Zertifikate und Abschlüsse" :"Certificats et diplômes obtenus"
                    }
                />

                <Certificados />
                
                <Titulo 
                    subTitulo={language === "es" ? "Portafolio" : language === "en" ? "Portfolio" : language === "de" ? "Portfolio" : "Portfolio"} 
                    titulo={language === "es" ? "Mis proyectos" : language === "en" ? "My Projects" : language === "de" ? "Unsere Projekte" : "Mes Projets"}
                />
            </div>
                
            <Portafolio />

            <div className="container">
                {/*
                <Titulo 
                    subTitulo={language === "es" ? "TESTIMONIOS" : language === "en" ? "TESTIMONIALS" : language === "de" ? "REFERENZEN" : "TÉMOIGNAGES"} 
                    titulo={language === "es" ? "Lo Que Dicen Nuestros Clientes" : language === "en" ? "What Our Clients Say" : language === "de" ? "Was Unsere Kunden Sagen" : "Ce Que Nos Clients Disent"} 
                />
                <Testimonios />
                */}
                
                <Titulo 
                    subTitulo={language === "es" ? "Contactame" : language === "en" ? "Contact Me" : language === "de" ? "Kontaktiere mic" : "Contactez-moi"} 
                    titulo={language === "es" ? "Da tu opinión" : language === "en" ? "Your feedback" : language === "de" ? "Ihr Feedback" : "Vos retours"} 
                />
                <Contacto />
                {/* <Maps /> */}
            </div>
            
            <Footer />
        </div>
    );
}

export default ContainerApp;
