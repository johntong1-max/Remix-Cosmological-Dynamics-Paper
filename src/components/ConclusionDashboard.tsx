import React from 'react';
import { Shield, ChevronRight, XCircle, CheckCircle } from 'lucide-react';

const Eq = ({ children }: { children: React.ReactNode }) => (
  <span className="font-serif tracking-wide text-slate-100 italic">
    {children}
  </span>
);

export function ConclusionDashboard() {
  return (
    <div className="min-h-screen bg-[#02040A] text-slate-200 font-sans p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto border border-slate-700/50 rounded-xl bg-[#0B101A] overflow-hidden shadow-2xl shadow-indigo-900/10">
        
        {/* Top Title Banner */}
        <div className="border-b border-indigo-900/50 bg-[#060913] relative">
          <div className="relative px-6 py-8 text-center bg-gradient-to-t from-[#0B101A] to-transparent">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Discussion and Outlook
            </h1>
            <p className="max-w-4xl mx-auto text-slate-300 md:text-lg leading-relaxed">
              The framework developed in this work proposes a unified, information-geometric description of cosmic evolution in which the dimensionless density parameter <Eq>Ω</Eq> functions as a primary ontological coordinate. Through geometric condensation, self-referential field dynamics, and attractor-driven relaxation, the universe is recast as a computable dynamical system whose large-scale behavior emerges from intrinsic informational structure rather than externally imposed constants or sector-specific fine-tuning.
            </p>
          </div>
        </div>

        {/* Part 1: Observational Falsifiability */}
        <div className="p-6 border-b border-slate-800 bg-[#060913]">
          <h2 className="text-xl font-bold text-center uppercase tracking-widest text-[#67E8F9] mb-6 border-b border-[#22D3EE]/30 pb-2 inline-block relative left-1/2 -translate-x-1/2">
            Observational Falsifiability: Three Independent Probes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Probe 1 */}
            <div className="border border-slate-700 rounded-lg p-4 bg-[#0B101A]">
              <h3 className="text-[#38BDF8] font-semibold text-center mb-2 text-sm uppercase tracking-wide">(i) Redshift-Dependent<br/>Hubble Drift<br/><span className="text-slate-400 normal-case text-xs">— H₀ Tension Revisited —</span></h3>
              <div className="aspect-video border border-slate-800 bg-[#02040A] rounded mb-4 p-2 relative overflow-hidden">
                 <svg viewBox="0 0 200 100" className="w-full h-full">
                    <path d="M 20 80 Q 80 50, 180 30" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="20" y1="30" x2="180" y2="30" stroke="#94A3B8" strokeDasharray="3 2" />
                    <circle cx="40" cy="65" r="2" fill="#F59E0B" />
                    <circle cx="60" cy="55" r="2" fill="#F59E0B" />
                    <circle cx="90" cy="45" r="2" fill="#F59E0B" />
                    <circle cx="120" cy="38" r="2" fill="#F59E0B" />
                    {/* Axes (fake) */}
                    <line x1="15" y1="90" x2="190" y2="90" stroke="#475569" strokeWidth="1" />
                    <line x1="15" y1="10" x2="15" y2="90" stroke="#475569" strokeWidth="1" />
                 </svg>
                 {/* Overlay legend */}
                 <div className="absolute top-2 right-2 text-[8px] bg-[#0B101A]/80 p-1.5 border border-slate-800 rounded flex flex-col gap-1">
                   <div className="flex items-center gap-1"><div className="w-3 h-px bg-[#38BDF8]"></div> <span className="text-slate-300">Attractor Model</span></div>
                   <div className="flex items-center gap-1"><div className="w-3 h-px bg-[#94A3B8]" style={{borderBottom: '1px dashed #94A3B8'}}></div> <span className="text-slate-300">ΛCDM (constant)</span></div>
                   <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mx-0.5"></div> <span className="text-slate-300">Observations</span></div>
                 </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-[#38BDF8] font-semibold">Attractor Model:</span> Predicts continuous relaxation of <Eq>H₀(z)</Eq> toward an attractor value.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-white font-semibold">ΛCDM:</span> Assumes a constant <Eq>H₀</Eq>.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-[#F59E0B] font-semibold">Observations:</span> Reinterpret the <Eq>H₀</Eq> tension as an attractor-driven relaxation effect.
                </p>
              </div>
            </div>

            {/* Probe 2 */}
            <div className="border border-slate-700 rounded-lg p-4 bg-[#0B101A]">
              <h3 className="text-white font-semibold text-center mb-2 text-sm uppercase tracking-wide">(ii) Variance Suppression in<br/>Low-z Black-Hole Shadows</h3>
              <div className="aspect-video border border-slate-800 bg-black rounded mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex">
                   <div className="w-1/2 flex items-center justify-center border-r border-slate-800">
                     <div className="w-16 h-16 rounded-full border-[3px] border-[#F97316] shadow-[0_0_20px_#F97316] relative bg-black">
                        <div className="absolute inset-[-4px] rounded-full blur-[2px] border-l-4 border-b-2 border-t border-[#F59E0B]/50 transform rotate-45"></div>
                     </div>
                   </div>
                   <div className="w-1/2 flex items-center justify-center">
                      <div className="w-16 h-16 mb-4">
                        {/* Fake violin plots */}
                        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                           <path d="M 50 10 Q 70 50, 50 90 Q 30 50, 50 10" fill="#38BDF8" opacity="0.3" stroke="#38BDF8" />
                           <line x1="10" y1="50" x2="90" y2="50" stroke="#475569" strokeDasharray="2 2" />
                        </svg>
                      </div>
                   </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-[#38BDF8] font-semibold">Attractor Model (Prediction):</span> Reduced population-level scatter in shadow angular diameters.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-white font-semibold">ΛCDM (Expectation):</span> Larger variance due to unconstrained parameter fluctuations.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-slate-400 font-semibold">Implication:</span> A measurable statistical discriminator between dynamical relaxation and standard cosmology.
                </p>
              </div>
            </div>

            {/* Probe 3 */}
            <div className="border border-slate-700 rounded-lg p-4 bg-[#0B101A]">
              <h3 className="text-white font-semibold text-center mb-2 text-sm uppercase tracking-wide">(iii) Stochastic Gravitational-Wave<br/>Background From Geometric Condensation</h3>
              <div className="aspect-video border border-slate-800 bg-[#02040A] rounded mb-4 p-2 relative">
                 <svg viewBox="0 0 200 100" className="w-full h-full">
                    <path d="M 20 40 Q 50 30, 80 50 T 140 40 T 170 70" fill="none" stroke="#2DD4BF" strokeWidth="1.5" />
                    <path d="M 170 70 L 175 60 L 180 80 L 185 65 L 190 85" fill="none" stroke="#2DD4BF" strokeWidth="1.5" />
                    <line x1="20" y1="45" x2="190" y2="45" stroke="#94A3B8" strokeDasharray="3 2" />
                    {/* Axes (fake) */}
                    <line x1="15" y1="90" x2="190" y2="90" stroke="#475569" strokeWidth="1" />
                    <line x1="15" y1="10" x2="15" y2="90" stroke="#475569" strokeWidth="1" />
                 </svg>
                 <div className="absolute top-2 right-2 text-[8px] bg-[#0B101A]/80 p-1.5 border border-slate-800 rounded flex flex-col gap-1">
                   <div className="flex items-center gap-1"><div className="w-3 h-px bg-[#2DD4BF]"></div> <span className="text-slate-300">Attractor Model (κ)</span></div>
                   <div className="flex items-center gap-1"><div className="w-3 h-px border-b border-dashed border-[#94A3B8]"></div> <span className="text-slate-300">ΛCDM (scale-inv)</span></div>
                 </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-[#2DD4BF] font-semibold">Attractor Model:</span> <Eq>κ</Eq>-dependent deviations from scale invariance; characteristic spectral modulation.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-white font-semibold">ΛCDM:</span> Nearly scale-invariant SGWB.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-[#FDE047] font-semibold">Signature:</span> Frequency-dependent imprints of the condensation transition.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-6 border border-slate-700 bg-slate-800/30 rounded-lg p-0 flex flex-col md:flex-row items-stretch justify-between overflow-hidden">
            <div className="flex items-center gap-3 bg-slate-800/50 p-4 md:w-1/3 border-r border-slate-700">
               <Shield className="w-8 h-8 text-slate-300 shrink-0" />
               <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Multi-Probe<br/>Falsification System</h4>
            </div>
            <div className="flex items-center gap-3 p-4 md:w-1/3 border-r border-slate-700">
              <XCircle className="w-8 h-8 text-red-500 shrink-0" strokeWidth={1.5} />
              <p className="text-xs text-slate-300 leading-relaxed">A single failure meaningfully constrains the framework.</p>
            </div>
            <div className="flex items-center gap-3 p-4 md:w-1/3">
              <CheckCircle className="w-8 h-8 text-green-500 shrink-0" strokeWidth={1.5} />
              <p className="text-xs text-slate-300 leading-relaxed">Concordant evidence across all three channels would provide strong support for attractor-driven cosmic evolution.</p>
            </div>
          </div>
        </div>


        {/* Part 2: Cosmology to Computable Sci */}
        <div className="p-6 border-b border-slate-800">
           <h2 className="text-xl font-bold text-center uppercase tracking-widest text-slate-200 mb-6 pb-2 relative">
            From Cosmology to Computable Science
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 border-b-2 border-slate-600"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="border border-[#1E293B] rounded-lg p-4 bg-[#0F172A]">
              <h3 className="text-cyan-400 font-semibold mb-3 text-xs uppercase tracking-wide border-b border-cyan-900/50 pb-2">1. Computable Dynamics</h3>
              <div className="w-full aspect-video border border-slate-700 bg-black/50 rounded p-2 mb-3 flex items-center justify-center">
                <div className="text-[10px] font-mono text-cyan-300">
                  {`{ Ω(N₀) → Ω(N₁) → ... `}<br/>
                  {`  → Ω(Nk) → Ω* }`}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">The core dynamics are geometric algorithms, not phenomenological fits. Cosmology becomes a computable, falsifiable science.</p>
            </div>

            <div className="border border-[#1E293B] rounded-lg p-4 bg-[#0F172A]">
              <h3 className="text-teal-400 font-semibold mb-3 text-xs uppercase tracking-wide border-b border-teal-900/50 pb-2">2. Open-Source Cosmic Sandboxes</h3>
              <div className="w-full aspect-video border border-slate-700 bg-slate-900 rounded mb-3 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 56" className="w-full h-full text-blue-500 opacity-60">
                  <ellipse cx="50" cy="28" rx="40" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <ellipse cx="50" cy="28" rx="20" ry="10" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(20 50 28)" />
                  <circle cx="50" cy="28" r="3" fill="#FFF" opacity="0.8" />
                </svg>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">A global research community can simulate:<br/>• attractor trajectories<br/>• gravitational-wave imprints<br/>• geometric condensation events<br/>...effectively refining the universe's geometric source code.</p>
            </div>

            <div className="border border-[#1E293B] rounded-lg p-4 bg-[#0F172A]">
              <h3 className="text-purple-400 font-semibold mb-3 text-xs uppercase tracking-wide border-b border-purple-900/50 pb-2">3. Cosmic-AI Isomorphisms</h3>
              <div className="w-full aspect-video border border-slate-700 bg-[#0a0c10] rounded mb-3 overflow-hidden relative">
                 <svg viewBox="0 0 100 56" className="w-full h-full opacity-70">
                    <path d="M 20 28 Q 50 10, 80 28 T 20 28" fill="none" stroke="#A78BFA" strokeWidth="0.5" />
                    <circle cx="20" cy="28" r="2" fill="#8B5CF6" />
                    <circle cx="80" cy="28" r="2" fill="#8B5CF6" />
                    <circle cx="50" cy="18" r="2" fill="#8B5CF6" />
                    <circle cx="50" cy="38" r="2" fill="#8B5CF6" />
                 </svg>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">Self-referential feedback and geometric damping mirror deep-learning training dynamics and neuromorphic architectures. Blueprints for robust, energy-efficient, self-correcting AI may be extracted from cosmic dynamics.</p>
            </div>

            <div className="border border-[#1E293B] rounded-lg p-4 bg-[#0F172A]">
              <h3 className="text-amber-500 font-semibold mb-3 text-xs uppercase tracking-wide border-b border-amber-900/50 pb-2">4. From Observers to Co-Creators</h3>
              <div className="w-full aspect-video border border-slate-700 bg-[#1e293b] rounded mb-3 overflow-hidden flex items-end justify-center pb-2 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-40 mix-blend-screen"></div>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">Biological intelligence and the scientific community are active, localized mechanisms by which the universe builds a computable model of itself.</p>
            </div>

          </div>
        </div>

        {/* Part 3: Future Work */}
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-center uppercase tracking-widest text-[#94A3B8] mb-6 pb-2 relative">
            Future Work: Interconnected Directions
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 border-b-2 border-slate-600"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
             
             <div className="border border-slate-800 rounded p-3 bg-[#0B101A]">
               <div className="w-6 h-6 rounded-full bg-cyan-900/50 text-cyan-300 flex items-center justify-center mx-auto mb-2 text-[10px] font-bold">1</div>
               <h4 className="text-[10px] uppercase font-semibold text-cyan-100 mb-2 leading-tight tracking-wider">Perturbation Theory<br/>& Structure Formation</h4>
               <p className="text-[10px] text-slate-400 leading-tight">Derive perturbative equations around the attractor; predict matter power spectra, RSD, and weak-lensing signals.</p>
             </div>

             <div className="border border-slate-800 rounded p-3 bg-[#0B101A]">
               <div className="w-6 h-6 rounded-full bg-teal-900/50 text-teal-300 flex items-center justify-center mx-auto mb-2 text-[10px] font-bold">2</div>
               <h4 className="text-[10px] uppercase font-semibold text-teal-100 mb-2 leading-tight tracking-wider">MCMC Cosmological<br/>Constraints</h4>
               <p className="text-[10px] text-slate-400 leading-tight">Perform full Bayesian inference using CMB, BAO, SNe Ia, and weak-lensing datasets.</p>
             </div>

             <div className="border border-slate-800 rounded p-3 bg-[#0B101A]">
               <div className="w-6 h-6 rounded-full bg-purple-900/50 text-purple-300 flex items-center justify-center mx-auto mb-2 text-[10px] font-bold">3</div>
               <h4 className="text-[10px] uppercase font-semibold text-purple-100 mb-2 leading-tight tracking-wider">SGWB Numerical<br/>Simulations</h4>
               <p className="text-[10px] text-slate-400 leading-tight">Model geometric condensation to predict SGWB spectra for LISA, Taiji, TianQin, and PTA.</p>
             </div>

             <div className="border border-slate-800 rounded p-3 bg-[#0B101A]">
               <div className="w-6 h-6 rounded-full bg-orange-900/50 text-orange-300 flex items-center justify-center mx-auto mb-2 text-[10px] font-bold">4</div>
               <h4 className="text-[10px] uppercase font-semibold text-orange-100 mb-2 leading-tight tracking-wider">Black-Hole Shadow<br/>Population Analysis</h4>
               <p className="text-[10px] text-slate-400 leading-tight">Construct realistic SMBH shadow populations; quantify variance suppression under astrophysical uncertainties.</p>
             </div>

             <div className="border border-slate-800 rounded p-3 bg-[#0B101A]">
               <div className="w-6 h-6 rounded-full bg-amber-900/50 text-amber-300 flex items-center justify-center mx-auto mb-2 text-[10px] font-bold">5</div>
               <h4 className="text-[10px] uppercase font-semibold text-amber-100 mb-2 leading-tight tracking-wider">Quantum-Gravity<br/>Embedding</h4>
               <p className="text-[10px] text-slate-400 leading-tight">Explore connections to causal sets, loop quantum gravity, asymptotic safety, and related frameworks.</p>
             </div>

             <div className="border border-slate-800 rounded p-3 bg-[#0B101A]">
               <div className="w-6 h-6 rounded-full bg-green-900/50 text-green-300 flex items-center justify-center mx-auto mb-2 text-[10px] font-bold">6</div>
               <h4 className="text-[10px] uppercase font-semibold text-green-100 mb-2 leading-tight tracking-wider">Computability &<br/>Information Foundations</h4>
               <p className="text-[10px] text-slate-400 leading-tight">Investigate algorithmic structure, information-theoretic bounds, and implications for the ontological status of physical law.</p>
             </div>

          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0B101A] p-6 text-center grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          <div className="border border-slate-700 p-6 rounded-lg bg-[#0F172A] flex flex-col items-center justify-center">
            <h3 className="text-white font-bold uppercase tracking-widest mb-4">A Falsifiable Working Hypothesis</h3>
            <div className="mb-4">
               <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto rotate-12">
                 <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.6" transform="rotate(30 50 50)" />
                 <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.6" transform="rotate(-30 50 50)" />
                 <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.6" transform="rotate(90 50 50)" />
                 <circle cx="50" cy="50" r="10" fill="none" stroke="#22D3EE" strokeWidth="2" />
               </svg>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 px-4">
              The geometric condensation principle, the universal feedback map, and the self-referential field equation are motivated by mathematical coherence and physical plausibility, but require rigorous formalization and empirical test.
            </p>
            <div className="text-amber-500 font-medium">
              The ultimate verdict will be delivered by mathematics and observation.
            </div>
          </div>

          <div className="border border-slate-700 p-6 rounded-lg bg-[#060913] flex flex-col items-center justify-center border-l-4 border-l-amber-500">
            <h3 className="text-slate-100 font-bold uppercase tracking-widest mb-4">Regardless of the Outcome,</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              this framework offers a new, structurally coherent pathway for understanding cosmic dynamics—reframing the universe not as a passive mechanism drifting toward thermal death, but as an active, self-referential information-processing system.
            </p>
            <h4 className="text-amber-500 font-bold uppercase text-lg leading-tight tracking-wider">
              We do not merely observe the universe—<br/>
              We participate in its self-understanding.
            </h4>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ConclusionDashboard;
