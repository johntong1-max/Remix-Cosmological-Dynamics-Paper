import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { paperMarkdown } from '../data';
import 'katex/dist/katex.min.css';
import { Telescope, BookOpen, Atom } from 'lucide-react';
import { ZoomableImage } from './ZoomableImage';

export function Article() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Background embellishments */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-900 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header Section */}
        <header className="mb-20 text-center sm:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium tracking-wide">
            <Atom className="w-4 h-4" />
            <span>Theoretical Framework</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-slate-100 tracking-tight leading-[1.15]">
            A Computable Information-Geometric Framework for Cosmological Dynamics
          </h1>
          
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between border-t border-slate-800/60 mt-8">
            <div>
              <p className="text-slate-200 font-medium">John Wen Tong</p>
              <p className="text-slate-500 text-sm">CivOS Global Research Institute, Independent Research Division, United States</p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <BookOpen className="w-4 h-4" />
              <span>Cosmology & Information Theory</span>
            </div>
          </div>
        </header>

        {/* Abstract Card */}
        <div className="pl-6 md:pl-8 py-6 mb-16 border-l-2 border-indigo-500/50 bg-gradient-to-r from-indigo-500/[0.03] to-transparent">
          <h3 className="text-indigo-300 font-sans font-semibold tracking-wider text-sm uppercase mb-4 flex items-center gap-2">
            <Telescope className="w-4 h-4" />
            Abstract
          </h3>
          <p className="font-serif text-lg leading-relaxed text-slate-300">
            We develop a computable cosmological framework grounded in a single, globally self-referential density variable, Ω, evolving on an intrinsic logarithmic time manifold N=ln(a/a0). By integrating information geometry with nonlinear autonomous dynamics, the model investigates whether large-scale cosmic behavior—including accelerated expansion and vacuum stabilization—can emerge from self-organized information dynamics without invoking isolated dark sectors or finely tuned parameters.
          </p>
          <br/>
          <p className="font-serif text-lg leading-relaxed text-slate-300">
            Elevating the scalar trajectory to a wavefunction ψ within an effective nonlinear Schrödinger-type field equation allows fundamental constants to be interpreted as dynamical expectation values stabilized near global attractors. This construction offers a potential geometric pathway toward addressing the Hubble tension. Analytic considerations further suggest that certain macroscopic observables, such as low-redshift black-hole shadow angular diameters, may exhibit parameter-insensitivity in the fixed-point regime.
          </p>
          <br/>
          <p className="font-serif text-lg leading-relaxed text-slate-300">
            Implications for vacuum energy, the computability of physical law, and the ontology of cosmology are discussed. The framework is presented as a foundational working hypothesis, with the explicit recognition that further mathematical formalization, perturbation-theory development, and empirical validation using forthcoming observational data remain essential.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            <span className="font-sans text-slate-500 px-2 py-1 bg-slate-900 rounded border border-slate-800">Keywords:</span>
            {['computable cosmology', 'information geometry', 'self-referential dynamics', 'ontological reduction', 'Hubble tension', 'vacuum stabilization', 'black hole shadows'].map((kw) => (
              <span key={kw} className="font-sans text-indigo-200 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Markdown content */}
        <article className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              img: ({node, ...props}) => <ZoomableImage src={props.src || ''} alt={props.alt || ''} className="w-full h-auto rounded-xl border border-slate-800 shadow-lg my-8" />
            }}
          >
            {paperMarkdown}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
