import React, { useRef } from "react";
import './Testimonios.css';
import siguiente_icon from '../../assets/next-icon.svg';
import atras_icon from '../../assets/back-icon.svg';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useLanguage } from "../../LanguageContext"; // Import context

const Testimonios = () => {
    const { language } = useLanguage(); // Get language state
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
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Rosa Valverde</h3>
                                    <span>Ciudad de México</span>
                                </div>
                            </div>
                            <p>{language === "es" ? "Taloin transformó completamente nuestro proceso de trabajo. Su equipo de desarrollo nos entregó una solución a medida que mejoró nuestra eficiencia y nos permitió enfocarnos en lo que realmente importa." : "Taloin completely transformed our workflow. Their development team delivered a custom solution that improved our efficiency and allowed us to focus on what really matters."}</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Esteban Contreras</h3>
                                    <span>Monterrey, Nuevo León</span>
                                </div>
                            </div>
                            <p>{language === "es" ? "Trabajar con Taloin fue una experiencia increíble. Su equipo comprendió exactamente nuestras necesidades y desarrolló una plataforma robusta y escalable que nos ha ayudado a crecer rápidamente." : "Working with Taloin was an incredible experience. Their team understood our needs perfectly and developed a robust and scalable platform that has helped us grow quickly."}</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Monica Estrada</h3>
                                    <span>Guadalajara, Jalisco</span>
                                </div>
                            </div>
                            <p>{language === "es" ? "La solución de software que Taloin desarrolló para nosotros ha optimizado nuestros procesos internos de manera impresionante. Su equipo de soporte siempre está disponible y listo para ayudar." : "The software solution that Taloin developed for us has optimized our internal processes in an impressive way. Their support team is always available and ready to help."}</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Juan Quiroga</h3>
                                    <span>Puebla, Puebla</span>
                                </div>
                            </div>
                            <p>{language === "es" ? "Gracias a Taloin, ahora contamos con una aplicación intuitiva y potente que ha mejorado la experiencia de nuestros clientes. Su enfoque en la calidad y la innovación es inigualable." : "Thanks to Taloin, we now have an intuitive and powerful application that has improved our customers' experience. Their focus on quality and innovation is unmatched."}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonios;
