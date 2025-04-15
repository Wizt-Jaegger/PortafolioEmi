import React from 'react';
import './Planes.css';
import plan_1 from '../../assets/program-1.png';
import plan_2 from '../../assets/program-2.png';
import plan_3 from '../../assets/program-3.png';
import plan_icon_1 from '../../assets/program-icon-1.svg';
import plan_icon_2 from '../../assets/program-icon-2.svg';
import plan_icon_3 from '../../assets/program-icon-3.svg';
import { useLanguage } from "../../LanguageContext";

const Planes = () => {
    const { language } = useLanguage();

    const plans = [
        {
            img: plan_1,
            icon: plan_icon_1,
            es: "Español - nativo",
            en: "Spanish - native",
            de: "Spanisch - Native",
            fr: "Espagnol - natif"
        },
        {
            img: plan_2,
            icon: plan_icon_2,
            es: "Inglés - C1",
            en: "English - C1",
            de: "Englisch - C1",
            fr: "Anglais - C1"
        },
        {
            img: plan_3,
            icon: plan_icon_3,
            es: "Francés - A2",
            en: "French - A2",
            de: "Französisch - A2",
            fr: "Français - A2"
        }
    ];

    return (
        <div className='planes'>
            {plans.map((plan, index) => (
                <div className="plan" key={index}>
                    <img src={plan.img} alt='' />
                    <div className='subtitulo'>
                        <img src={plan.icon} alt='' />
                        <p>{plan[language]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Planes;
