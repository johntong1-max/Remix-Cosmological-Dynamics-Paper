import React from 'react';
import { ZoomableImage } from '../components/ZoomableImage';

export default function ComputationalFramework() {
  return (
    <div className="w-full h-full min-h-[80vh] flex flex-col items-center justify-start p-6 text-center text-slate-300">
      <h2 className="text-2xl text-slate-100 font-bold mb-4">10. Computational Framework</h2>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl mb-6">
          <ZoomableImage 
            src="https://xrf-analysis-report-viewer-g9m7.vercel.app/image/xrf/computational%20framework.png" 
            alt="Computational Cosmology Framework and Reproducibility Architecture" 
            className="w-full h-auto object-contain block"
          />
        </div>
        <p className="text-sm text-slate-400 max-w-4xl text-left leading-relaxed">
          <strong className="text-slate-300 mr-2">Figure S1:</strong>
          Overview of the computational implementation, illustrative parameter comparisons, example Bayesian model-selection workflow, containerized reproducibility architecture, and future observational tests associated with the attractor-based cosmological framework. Numerical values shown in the illustrative panels are not direct theoretical predictions and are included for demonstration of methodology.
        </p>
      </div>
    </div>
  );
}
