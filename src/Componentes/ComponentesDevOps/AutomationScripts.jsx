// src/components/DevOps/AutomationScripts.jsx
import React from 'react';
import './DevOpsStyles.css';
import { useLanguage } from '../../LanguageContext';
import { ScrollText, Bot, FileCode } from 'lucide-react';

const translations = {
  en: {
    title: "Automation & Scripting",
    desc: "Reducing toil by automating repetitive tasks with Bash and Python.",
    bashTitle: "Bash Utilities",
    bashList: ["Auto-backup scripts for MySQL", "Log rotation and archiving", "System health checks (CPU/RAM alerts)"],
    pyTitle: "Python Tooling",
    pyList: ["Data migration scripts", "API monitoring bots", "CSV/JSON report generators"],
    cronTitle: "Scheduling",
    cronList: ["Cronjob management", "Job failure notifications", "Automated patch management"]
  },
  es: {
    title: "Automatización y Scripting",
    desc: "Reduciendo carga operativa automatizando tareas repetitivas.",
    bashTitle: "Utilidades Bash",
    bashList: ["Scripts de auto-respaldo MySQL", "Rotación y archivado de logs", "Alertas de salud del sistema"],
    pyTitle: "Herramientas Python",
    pyList: ["Scripts de migración de datos", "Bots de monitoreo de API", "Generadores de reportes CSV/JSON"],
    cronTitle: "Programación",
    cronList: ["Gestión de Cronjobs", "Notificaciones de fallos", "Gestión automatizada de parches"]
  },
  // Add fr/de as needed based on pattern above
};

const AutomationScripts = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  // Fallback for missing translations to avoid crash
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
                <div className="do-icon-box"><ScrollText size={40} /></div>
                <h4>{safeT('bashTitle')}</h4>
                <ul className="do-list">
                    {safeT('bashList').map((item, i) => <li key={i}><FileCode size={16}/> {item}</li>)}
                </ul>
            </div>
            <div className="do-card">
                <div className="do-icon-box"><Bot size={40} /></div>
                <h4>{safeT('pyTitle')}</h4>
                <ul className="do-list">
                    {safeT('pyList').map((item, i) => <li key={i}><FileCode size={16}/> {item}</li>)}
                </ul>
            </div>
            <div className="do-card">
                 {/* Visual decoration for Cron */}
                <div className="do-icon-box"><span style={{fontSize:'30px', fontWeight:'bold'}}>*/5 * * * *</span></div>
                <h4>{safeT('cronTitle')}</h4>
                <ul className="do-list">
                    {safeT('cronList').map((item, i) => <li key={i}><FileCode size={16}/> {item}</li>)}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationScripts;