import React, { use, useState } from "react";
import NavbarWebApp from "../Navbar/NavbarWebApp";
import PresentacionLinux from "../Presentacion/PresentacionLinux";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";

const translations = {
    es: {
        message: "Hola, este sitio fue creado por mí como estudiante. Agradezco tu paciencia con las actualizaciones, ya que actualmente estoy trabajando en varios proyectos y no siempre puedo actualizar la página con rapidez."
    },
    en: {
        message: "Hi, this site was created by me as a student. I appreciate your patience with updates, as I'm currently working on several projects and can't always update the site quickly."
    },
    de: {
        message: "Hallo, diese Website wurde von mir als Student erstellt. Ich danke dir für deine Geduld bei den Aktualisierungen, da ich derzeit an mehreren Projekten arbeite und die Seite nicht immer sofort aktualisieren kann."
    },
    fr: {
        message: "Bonjour, ce site a été créé par moi en tant qu'étudiant. Merci de ta patience concernant les mises à jour, car je travaille actuellement sur plusieurs projets et je ne peux pas toujours mettre à jour le site rapidement."
    }
};

const ContainerApp = () => {
    const { language } = useLanguage();
    const { message } = translations[language] || translations["en"]; 
    
    return (
        <div>
            <NavbarWebApp />
            <PresentacionLinux />
                <div style={{ color: "white", padding: "1rem" }}>
                    {message}
                </div>
            <div className="container">
            
            </div>
            
            <Footer />
        </div>
    );
}

export default ContainerApp;
