import React from 'react';
import './PresentacionSub.css';
import main_img from '../../assets/virt-img.png';
import flecha_oscura from '../../assets/dark-arrow.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const translations = {
  es: {
    saludo: "¿Buscas un perfil DevOps?",
    slogan: "Automatización y nube",
    descripcion: "Gestiono entornos virtualizados (EC2, VirtualBox, BareMetal),\nconfiguro VPNs seguras y despliego clústeres en la nube",
    descubrir: "Ver más"

  },
  en: {
    saludo: "Looking for a DevOps engineer?",
    slogan: "Automation & Cloud",
    descripcion: "I manage virtualized environments (EC2, VirtualBox, BareMetal),\nset up secure VPNs, and deploy clusters in the cloud",
    descubrir: "Learn more"
  },
  fr: {
    saludo: "Vous cherchez un profil DevOps ?",
    slogan: "Cloud & automatisation",
    descripcion: "Je gère des environnements virtualisés (EC2, VirtualBox, BareMetal),\nje configure des VPNs sécurisés et je déploie des clusters dans le cloud",
    descubrir: "En savoir plus"
  },
  de: {
    saludo: "Suchen Sie einen DevOps-Ingenieur?",
    slogan: "Cloud & Automatisierung",
    descripcion: "Ich verwalte EC2, VirtualBox und BareMetal,\nkonfiguriere sichere VPNs und deploye Cluster in der Cloud",
    descubrir: "Mehr erfahren"
  }
};

const Presentacion = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='presentacion-container'>
      <div className='presentacion'>
        <div className='presentacion-texto'>
          <div className='info'>
            <p className='saludo'>{t.saludo}</p>
            <p className="slogan">
              {t.slogan.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </p>
            <p className='descripcion'>
              {t.descripcion.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </p>
            <p>
              <Link
                to="planes"
                smooth={true}
                offset={-260}
                duration={500}
                className="btn"
              >
                {t.descubrir}<img src={flecha_oscura} alt='' />
                <div className="btn2"></div>
              </Link>
            </p>
          </div>
        </div>
        <div className='presentacion-img'>
          <div className="border">
            <div className="img-wrapper">
              <img src={main_img} alt="main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
