import React from "react";
import NavbarWebApp from "../Navbar/NavbarEmbedded"; 
import PresentacionEmbeb from "../Presentacion/PresentacionEmbebidos";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";

// Import Embedded Sections
import FirmwareCore from "./FirmwareCore";
import HardwareProjects from "./HardwareProjects";
import ConnectivityProtocols from "./ConnectivityProtocols";

const translations = {
    es: {
        message: "Hola, este sitio fue creado por mí como estudiante. Estoy en mi último año, por lo que tengo muchos proyectos; debido a ello, no puedo actualizar la página tan seguido como quisiera. Agradezco tu paciencia con las actualizaciones."
    },
    en: {
        message: "Hi, this site was created by me as a student. I'm in my final year, which means I have many projects; because of that, I can't update the site as often as I'd like. I appreciate your patience with updates."
    },
    de: {
        message: "Hallo, diese Website wurde von mir als Student erstellt. Ich bin im letzten Studienjahr und habe daher viele Projekte; deshalb kann ich die Seite nicht so oft aktualisieren, wie ich es gerne würde. Vielen Dank für deine Geduld mit den Aktualisierungen."
    },
    fr: {
        message: "Bonjour, ce site a été créé par moi en tant qu'étudiant. Je suis dans ma dernière année d’études, ce qui signifie que j’ai de nombreux projets ; à cause de cela, je ne peux pas mettre le site à jour aussi souvent que je le voudrais. Merci pour ta patience concernant les mises à jour."
    }
};

const ContainerEmbebidos = () => {
    const { language } = useLanguage();
    const { message } = translations[language] || translations["en"]; 

    return (
        <div>
            <NavbarWebApp />
            
            <PresentacionEmbeb />

            {/* 1. THE HOOK: Firmware & Code (C/C++, Microcontrollers) */}
            <div id="firmware">
                <FirmwareCore />
            </div>

            {/* 2. THE EVIDENCE: Real Projects (Robotics, Braille Printer) */}
            <div id="hardware">
                <HardwareProjects />
            </div>

            {/* 3. THE FOUNDATION: Connectivity (IoT, Protocols) */}
            <div id="iot">
                <ConnectivityProtocols />
            </div>

            <div style={{ color: "rgba(255,255,255,0.6)", padding: "2rem", fontSize:"1rem" , margin: "1rem", textAlign: "center" }}>
                {message}
            </div>

            <div className="container"></div>
            
            <Footer />
        </div>
    );
}

export default ContainerEmbebidos;