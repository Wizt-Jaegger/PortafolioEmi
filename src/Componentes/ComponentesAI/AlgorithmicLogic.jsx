import React from 'react';
import './AIStyles.css';
import { useLanguage } from '../../LanguageContext';
import { GitGraph, Binary, GitMerge } from 'lucide-react';

const translations = {
  en: {
    title: "Algorithmic Logic",
    desc: "Deep understanding of the mathematical foundations of AI.",
    genTitle: "Genetic Algorithms",
    genDesc: "Implementation of evolutionary algorithms: Selection, Crossover, and Mutation for optimization problems.",
    searchTitle: "Search Strategies",
    searchDesc: "Experience with heuristic search algorithms (A*, Best-First) for pathfinding and decision trees.",
    sortTitle: "Data Structures & Sorts",
    sortDesc: "Optimization of data processing using advanced sorting algorithms (QuickSort, MergeSort) and custom data structures."
  },
  es: {
    title: "Lógica Algorítmica",
    desc: "Entendimiento profundo de los fundamentos matemáticos de la IA.",
    genTitle: "Algoritmos Genéticos",
    genDesc: "Implementación de algoritmos evolutivos: Selección, Cruce y Mutación para problemas de optimización.",
    searchTitle: "Estrategias de Búsqueda",
    searchDesc: "Experiencia con algoritmos de búsqueda heurística (A*, Best-First) para pathfinding y árboles de decisión.",
    sortTitle: "Estructuras y Ordenamiento",
    sortDesc: "Optimización de procesamiento de datos usando algoritmos de ordenamiento avanzados y estructuras personalizadas."
  },
  // Add fr/de as needed
};

const AlgorithmicLogic = () => {
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
                <div className="ai-icon-box"><GitGraph size={32} /></div>
                <h4>{safeT('genTitle')}</h4>
                <p>{safeT('genDesc')}</p>
            </div>
            <div className="ai-card">
                <div className="ai-icon-box"><GitMerge size={32} /></div>
                <h4>{safeT('searchTitle')}</h4>
                <p>{safeT('searchDesc')}</p>
            </div>
            <div className="ai-card">
                <div className="ai-icon-box"><Binary size={32} /></div>
                <h4>{safeT('sortTitle')}</h4>
                <p>{safeT('sortDesc')}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AlgorithmicLogic;