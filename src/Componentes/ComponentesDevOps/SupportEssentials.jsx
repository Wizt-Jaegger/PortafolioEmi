// src/components/DevOps/SupportEssentials.jsx
import React from 'react';
import './DevOpsStyles.css';
import { useLanguage } from '../../LanguageContext';
import { Terminal, LifeBuoy, Network } from 'lucide-react';

const translations = {
  en: {
    title: "Technical Support Core",
    desc: "Resolving L2/L3 infrastructure issues with precision and empathy.",
    linuxTitle: "Linux Administration",
    linuxDesc: "Deep knowledge of Ubuntu/Debian. User management, permissions (chmod/chown), systemd services, and log analysis.",
    remoteTitle: "Remote Management",
    remoteDesc: "Expert in SSH tunneling, key management, and remote troubleshooting without graphical interfaces.",
    networkTitle: "Network Diagnostics",
    networkDesc: "Troubleshooting connectivity using TCP/IP stack tools (ping, netstat, traceroute, nmap) and firewall rules (UFW)."
  },
  es: {
    title: "Núcleo de Soporte Técnico",
    desc: "Resolución de incidencias de infraestructura Nivel 2/3 con precisión.",
    linuxTitle: "Administración Linux",
    linuxDesc: "Conocimiento profundo de Ubuntu/Debian. Gestión de usuarios, permisos, servicios systemd y análisis de logs.",
    remoteTitle: "Gestión Remota",
    remoteDesc: "Experto en túneles SSH, gestión de llaves y solución de problemas remota sin interfaz gráfica.",
    networkTitle: "Diagnóstico de Red",
    networkDesc: "Solución de problemas de conectividad usando herramientas TCP/IP (ping, netstat, nmap) y firewalls (UFW)."
  },
  fr: {
    title: "Support Technique",
    desc: "Résolution précise des problèmes d'infrastructure N2/N3.",
    linuxTitle: "Administration Linux",
    linuxDesc: "Connaissance approfondie d'Ubuntu/Debian. Gestion des utilisateurs, permissions et analyse des logs.",
    remoteTitle: "Gestion à Distance",
    remoteDesc: "Expert en tunneling SSH, gestion des clés et dépannage à distance.",
    networkTitle: "Diagnostic Réseau",
    networkDesc: "Dépannage de la connectivité via les outils TCP/IP et règles de pare-feu."
  },
  de: {
    title: "Technischer Support Kern",
    desc: "Lösung von L2/L3-Infrastrukturproblemen mit Präzision.",
    linuxTitle: "Linux-Administration",
    linuxDesc: "Tiefes Wissen über Ubuntu/Debian. Benutzerverwaltung, Berechtigungen und Protokollanalyse.",
    remoteTitle: "Fernverwaltung",
    remoteDesc: "Experte für SSH-Tunneling, Schlüsselverwaltung und Remote-Troubleshooting.",
    networkTitle: "Netzwerkdiagnose",
    networkDesc: "Behebung von Verbindungsproblemen mit TCP/IP-Tools und Firewall-Regeln."
  }
};

const SupportEssentials = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section className="do-section">
      <div className="do-container">
        <div className="do-header">
            <h2 className="do-title">{t.title}</h2>
            <p className="do-subtitle">{t.desc}</p>
        </div>
        <div className="do-grid">
            <div className="do-card">
                <div className="do-icon-box"><Terminal size={40} /></div>
                <h4>{t.linuxTitle}</h4>
                <p>{t.linuxDesc}</p>
            </div>
            <div className="do-card">
                <div className="do-icon-box"><Network size={40} /></div>
                <h4>{t.remoteTitle}</h4>
                <p>{t.remoteDesc}</p>
            </div>
            <div className="do-card">
                <div className="do-icon-box"><LifeBuoy size={40} /></div>
                <h4>{t.networkTitle}</h4>
                <p>{t.networkDesc}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SupportEssentials;