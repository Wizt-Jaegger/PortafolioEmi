// src/components/DevOps/InfrastructureConfig.jsx
import React from 'react';
import './DevOpsStyles.css';
import { useLanguage } from '../../LanguageContext';
import { Cloud, Server, Container } from 'lucide-react';

const translations = {
  en: {
    title: "Infrastructure & Deployment",
    desc: "Managing the environment where applications live.",
    webTitle: "Web Servers",
    webDesc: "Experience configuring Nginx/Apache. Setting up Reverse Proxies, SSL Certificates (Certbot), and Virtual Hosts.",
    cloudTitle: "Cloud Services",
    cloudDesc: "Experience with AWS (EC2 instances, Security Groups) and Cloudflare (DNS management, caching rules).",
    containerTitle: "Containerization",
    containerDesc: "Basic Docker usage. Writing Dockerfiles, managing containers, and troubleshooting volume/network issues."
  },
  es: {
    title: "Infraestructura y Despliegue",
    desc: "Gestionando el entorno donde viven las aplicaciones.",
    webTitle: "Servidores Web",
    webDesc: "Experiencia configurando Nginx/Apache. Reverse Proxies, Certificados SSL (Certbot) y Virtual Hosts.",
    cloudTitle: "Servicios Cloud",
    cloudDesc: "Experiencia con AWS (EC2, Security Groups) y Cloudflare (Gestión DNS, reglas de caché).",
    containerTitle: "Contenerización",
    containerDesc: "Uso básico de Docker. Escritura de Dockerfiles, gestión de contenedores y solución de problemas de red/volumen."
  },
   // Add fr/de as needed
};

const InfrastructureConfig = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const safeT = (key) => t[key] || translations.en[key];

  return (
    <section className="do-section">
      <div className="do-container">
        <div className="do-header">
            <h2 className="do-title">{safeT('title')}</h2>
            <p className="do-subtitle">{safeT('desc')}</p>
        </div>
        <div className="do-grid">
             <div className="do-card">
                <div className="do-icon-box"><Server size={40} /></div>
                <h4>{safeT('webTitle')}</h4>
                <p>{safeT('webDesc')}</p>
            </div>
            <div className="do-card">
                <div className="do-icon-box"><Cloud size={40} /></div>
                <h4>{safeT('cloudTitle')}</h4>
                <p>{safeT('cloudDesc')}</p>
            </div>
            <div className="do-card">
                <div className="do-icon-box"><Container size={40} /></div>
                <h4>{safeT('containerTitle')}</h4>
                <p>{safeT('containerDesc')}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureConfig;