import React from 'react';
import './AIStyles.css';
import { useLanguage } from '../../LanguageContext';
import { Eye, FileSpreadsheet, Code2 } from 'lucide-react';

const translations = {
  en: {
    title: "Data Science & Vision",
    desc: "Tools for processing, analyzing, and visualizing complex datasets.",
    cvTitle: "Computer Vision (OpenCV)",
    cvList: ["Image Pre-processing", "Object Detection", "Pattern Recognition"],
    pyTitle: "Python Data Stack",
    pyList: ["Pandas (Data Manipulation)", "NumPy (Numerical Computing)", "Matplotlib/Seaborn (Visualization)"],
    cleanTitle: "Data Pipeline",
    cleanList: ["Data Cleaning & Normalization", "Feature Engineering", "Dataset Preparation for Training"]
  },
  es: {
    title: "Ciencia de Datos y Visión",
    desc: "Herramientas para procesar, analizar y visualizar conjuntos de datos complejos.",
    cvTitle: "Visión por Computadora",
    cvList: ["Pre-procesamiento de Imágenes", "Detección de Objetos", "Reconocimiento de Patrones"],
    pyTitle: "Stack de Datos Python",
    pyList: ["Pandas (Manipulación de Datos)", "NumPy (Cálculo Numérico)", "Matplotlib/Seaborn (Visualización)"],
    cleanTitle: "Pipeline de Datos",
    cleanList: ["Limpieza y Normalización", "Ingeniería de Características", "Preparación de Datasets"]
  },
  // Add fr/de as needed
};

const DataVision = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const safeT = (key) => t[key] || translations.en[key];

  return (
    <section className="ai-section">
      <div className="ai-container">
        <div className="ai-header">
            <h2 className="ai-title">{safeT('title')}</h2>
            <p className="ai-subtitle">{safeT('desc')}</p>
        </div>
        <div className="ai-grid">
             <div className="ai-card">
                <div className="ai-icon-box"><Eye size={32} /></div>
                <h4>{safeT('cvTitle')}</h4>
                <ul className="ai-list">
                    {safeT('cvList').map((item, i) => <li key={i}><Code2 size={16}/> {item}</li>)}
                </ul>
            </div>
            <div className="ai-card">
                <div className="ai-icon-box"><FileSpreadsheet size={32} /></div>
                <h4>{safeT('pyTitle')}</h4>
                <ul className="ai-list">
                    {safeT('pyList').map((item, i) => <li key={i}><Code2 size={16}/> {item}</li>)}
                </ul>
            </div>
            <div className="ai-card">
                <div className="ai-icon-box"><Code2 size={32} /></div>
                <h4>{safeT('cleanTitle')}</h4>
                <ul className="ai-list">
                    {safeT('cleanList').map((item, i) => <li key={i}><Code2 size={16}/> {item}</li>)}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DataVision;