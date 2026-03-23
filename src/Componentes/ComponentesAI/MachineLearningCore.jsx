import React from 'react';
import './AIStyles.css';
import { useLanguage } from '../../LanguageContext';
import { Brain, Network, Map } from 'lucide-react';

const translations = {
  en: {
    title: "Applied Machine Learning",
    desc: "Building predictive models and intelligent systems for real-world decision making.",
    sentinelTitle: "Crime Analysis (DataSentinel)",
    sentinelDesc: "Developed a predictive crime system using K-Means clustering and heatmaps to identify high-risk zones based on historical data.",
    tfTitle: "TensorFlow & Keras",
    tfDesc: "Experience designing Neural Networks, implementing Perceptrons, and training models for pattern recognition.",
    modelTitle: "Predictive Modeling",
    modelDesc: "Analyzing trends to forecast user growth and incident rates, integrated directly into Laravel/React dashboards."
  },
  es: {
    title: "Machine Learning Aplicado",
    desc: "Construcción de modelos predictivos y sistemas inteligentes para la toma de decisiones.",
    sentinelTitle: "Análisis Criminal (DataSentinel)",
    sentinelDesc: "Desarrollo de sistema predictivo usando clustering K-Means y mapas de calor para identificar zonas de riesgo basadas en datos históricos.",
    tfTitle: "TensorFlow y Keras",
    tfDesc: "Experiencia diseñando Redes Neuronales, implementando Perceptrones y entrenando modelos para reconocimiento de patrones.",
    modelTitle: "Modelado Predictivo",
    modelDesc: "Análisis de tendencias para pronosticar crecimiento de usuarios e incidentes, integrado en dashboards Laravel/React."
  },
  fr: {
    title: "Apprentissage Automatique Appliqué",
    desc: "Construction de modèles prédictifs et de systèmes intelligents.",
    sentinelTitle: "Analyse Criminelle (DataSentinel)",
    sentinelDesc: "Système prédictif utilisant le clustering K-Means pour identifier les zones à risque.",
    tfTitle: "TensorFlow & Keras",
    tfDesc: "Conception de réseaux neuronaux, perceptrons et entraînement de modèles.",
    modelTitle: "Modélisation Prédictive",
    modelDesc: "Analyse des tendances pour prévoir la croissance des utilisateurs, intégrée aux tableaux de bord."
  },
  de: {
    title: "Angewandtes Maschinelles Lernen",
    desc: "Aufbau prädiktiver Modelle und intelligenter Systeme.",
    sentinelTitle: "Kriminalanalyse (DataSentinel)",
    sentinelDesc: "Entwicklung eines prädiktiven Systems mit K-Means-Clustering zur Identifizierung von Risikozonen.",
    tfTitle: "TensorFlow & Keras",
    tfDesc: "Erfahrung mit neuronalen Netzen, Perzeptronen und Modelltraining.",
    modelTitle: "Prädiktive Modellierung",
    modelDesc: "Trendanalyse zur Vorhersage von Nutzerwachstum, integriert in Dashboards."
  }
};

const MachineLearningCore = () => {
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
                <div className="ai-icon-box"><Map size={32} /></div>
                <h4>{safeT('sentinelTitle')}</h4>
                <p>{safeT('sentinelDesc')}</p>
            </div>
            <div className="ai-card">
                <div className="ai-icon-box"><Brain size={32} /></div>
                <h4>{safeT('tfTitle')}</h4>
                <p>{safeT('tfDesc')}</p>
            </div>
            <div className="ai-card">
                <div className="ai-icon-box"><Network size={32} /></div>
                <h4>{safeT('modelTitle')}</h4>
                <p>{safeT('modelDesc')}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MachineLearningCore;