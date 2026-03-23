import React, { useRef } from "react";
import './Testimonios.css';
import siguiente_icon from '../../assets/next-icon.svg';
import atras_icon from '../../assets/back-icon.svg';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useLanguage } from "../../LanguageContext";

const testimonies = [
    {
        name: "Rosa Valverde",
        location: "Ciudad de México",
        text: {
            es: "Taloin transformó completamente nuestro proceso de trabajo. Su equipo de desarrollo nos entregó una solución a medida que mejoró nuestra eficiencia y nos permitió enfocarnos en lo que realmente importa.",
            en: "Taloin completely transformed our workflow. Their development team delivered a custom solution that improved our efficiency and allowed us to focus on what really matters.",
            de: "Taloin hat unseren Arbeitsablauf komplett verändert. Ihr Entwicklungsteam lieferte eine maßgeschneiderte Lösung, die unsere Effizienz verbesserte und uns ermöglichte, uns auf das Wesentliche zu konzentrieren.",
            fr: "Taloin a complètement transformé notre flux de travail. Leur équipe de développement a livré une solution sur mesure qui a amélioré notre efficacité et nous a permis de nous concentrer sur l'essentiel."
        },
        img: user_1
    },
    {
        name: "Esteban Contreras",
        location: "Monterrey, Nuevo León",
        text: {
            es: "Trabajar con Taloin fue una experiencia increíble. Su equipo comprendió exactamente nuestras necesidades y desarrolló una plataforma robusta y escalable que nos ha ayudado a crecer rápidamente.",
            en: "Working with Taloin was an incredible experience. Their team understood our needs perfectly and developed a robust and scalable platform that has helped us grow quickly.",
            de: "Die Zusammenarbeit mit Taloin war eine großartige Erfahrung. Ihr Team verstand unsere Anforderungen genau und entwickelte eine robuste und skalierbare Plattform, die uns beim schnellen Wachstum unterstützt hat.",
            fr: "Travailler avec Taloin a été une expérience incroyable. Leur équipe a parfaitement compris nos besoins et a développé une plateforme robuste et évolutive qui nous a permis de croître rapidement."
        },
        img: user_2
    },
    {
        name: "Monica Estrada",
        location: "Guadalajara, Jalisco",
        text: {
            es: "La solución de software que Taloin desarrolló para nosotros ha optimizado nuestros procesos internos de manera impresionante. Su equipo de soporte siempre está disponible y listo para ayudar.",
            en: "The software solution that Taloin developed for us has optimized our internal processes in an impressive way. Their support team is always available and ready to help.",
            de: "Die von Taloin entwickelte Softwarelösung hat unsere internen Prozesse beeindruckend optimiert. Ihr Support-Team ist immer verfügbar und hilfsbereit.",
            fr: "La solution logicielle développée par Taloin a optimisé nos processus internes de manière impressionnante. Leur équipe de support est toujours disponible et prête à aider."
        },
        img: user_3
    },
    {
        name: "Juan Quiroga",
        location: "Puebla, Puebla",
        text: {
            es: "Gracias a Taloin, ahora contamos con una aplicación intuitiva y potente que ha mejorado la experiencia de nuestros clientes. Su enfoque en la calidad y la innovación es inigualable.",
            en: "Thanks to Taloin, we now have an intuitive and powerful application that has improved our customers' experience. Their focus on quality and innovation is unmatched.",
            de: "Dank Taloin haben wir jetzt eine intuitive und leistungsstarke Anwendung, die die Erfahrung unserer Kunden verbessert hat. Ihr Fokus auf Qualität und Innovation ist unvergleichlich.",
            fr: "Grâce à Taloin, nous disposons désormais d'une application intuitive et puissante qui a amélioré l'expérience de nos clients. Leur souci de la qualité et de l'innovation est inégalé."
        },
        img: user_4
    }
];

const Testimonios = () => {
    const { language } = useLanguage();
    const slider = useRef();
    let tx = 0;

    const slideFordward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className="testimonios">
            <img src={siguiente_icon} alt="" className="siguiente-btn" onClick={slideFordward} />
            <img src={atras_icon} alt="" className="atras-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    {testimonies.map((t, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={t.img} alt="" />
                                    <div>
                                        <h3>{t.name}</h3>
                                        <span>{t.location}</span>
                                    </div>
                                </div>
                                <p>{t.text[language]}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Testimonios;
