import React from 'react';
import { ZoomableImage } from '../components/ZoomableImage';

export default function EmpiricalObservables() {
  return (
    <div className="w-full h-full min-h-[80vh] flex flex-col items-center justify-center p-6 text-center text-slate-300">
      <h2 className="text-2xl text-slate-100 font-bold mb-4">8. Empirical Observables & Cosmological Implications</h2>
      <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900/50">
        <ZoomableImage src="https://xrf-analysis-report-viewer-g9m7.vercel.app/image/xrf/Empirical%20Observables.png" alt="8. Empirical Observables" className="w-full h-auto" />
      </div>
    </div>
  );
}
