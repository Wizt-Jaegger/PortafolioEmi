import React from "react";
import NavbarWebApp from "../Navbar/NavbarAI"; 
import PresentacionAI from "../Presentacion/PresentacionAI";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";

// Import AI/ML Sections
import MachineLearningCore from "./MachineLearningCore";
import AlgorithmicLogic from "./AlgorithmicLogic";
import DataVision from "./DataVision";

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

const ContainerAI = () => {
    const { language } = useLanguage();
    const { message } = translations[language] || translations["en"]; 

    return (
        <div>
            <NavbarWebApp />
            
            <PresentacionAI />

            {/* 1. THE HOOK: Applied Projects (DataSentinel, ML Models) */}
            <div id="ml">
                <MachineLearningCore />
            </div>

            {/* 2. THE EVIDENCE: Math & Logic (Genetics, Algorithms) */}
            <div id="algo">
                <AlgorithmicLogic />
            </div>

            {/* 3. THE FOUNDATION: Tools (Python, OpenCV, Data) */}
            <div id="data">
                <DataVision />
            </div>

            <div style={{ color: "rgba(255,255,255,0.6)", padding: "2rem", fontSize:"1rem" , margin: "1rem", textAlign: "center" }}>
                {message}
            </div>

            <div className="container"></div>
            
            <Footer />
        </div>
    );
}

export default ContainerAI;