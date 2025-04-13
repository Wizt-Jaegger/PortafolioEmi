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
            es: "Desarrollo de Software",
            en: "Software Development",
            de: "Softwareentwicklung",
            fr: "Développement de logiciel"
        },
        {
            img: plan_2,
            icon: plan_icon_2,
            es: "Mantenimiento de Software",
            en: "Software Maintenance",
            de: "Softwarewartung",
            fr: "Maintenance logicielle"
        },
        {
            img: plan_3,
            icon: plan_icon_3,
            es: "Mantenimiento de Hardware",
            en: "Hardware Maintenance",
            de: "Hardwarewartung",
            fr: "Maintenance matérielle"
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
