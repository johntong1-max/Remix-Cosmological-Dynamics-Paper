import React from 'react';
import { Scale } from 'lucide-react';

const Eq = ({ children, block = false, highlight = false }: { children: React.ReactNode, block?: boolean, highlight?: boolean }) => (
  <span className={`font-serif tracking-wide ${block ? 'block text-center my-3' : 'inline'} ${highlight ? 'text-yellow-400' : 'text-slate-100'}`}>
    {children}
  </span>
);

export function CosmicDashboard() {
  return (
    <div className="min-h-screen bg-[#02040A] text-slate-200 font-sans p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto border border-slate-700/50 rounded-xl bg-[#0B101A] overflow-hidden shadow-2xl shadow-cyan-900/10">
        
        {/* Top Title Banner */}
        <div className="border-b border-slate-700/50 bg-[#111827] px-6 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
            8. Empirical Observables and Cosmological Implications
          </h1>
          <div className="border border-slate-700/70 bg-[#0A0F1A] rounded p-3 text-center text-sm md:text-base">
            For a broad class of stable attractor solutions, macroscopic cosmological parameters obey{' '}
            <Eq highlight>C<sub>i</sub>(N) = C<sub>i</sub><sup>*</sup> + δC<sub>i</sub> e<sup>-κN</sup></Eq>,{' '}
            <Eq highlight>Var(C<sub>i</sub>) &propto; e<sup>-2κN</sup></Eq>,{' '}
            where <Eq>N</Eq> is intrinsic logarithmic time.
          </div>
        </div>

        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4 border-b border-slate-800">
          
          {/* Column 1: Hubble Tension */}
          <div className="border border-[#1E3A8A] bg-[#0A101D] rounded-lg flex flex-col p-4 shadow-inner shadow-blue-900/10">
            <h2 className="text-cyan-400 font-semibold text-center border-b border-[#1E3A8A] pb-2 mb-4 leading-tight">
              <span className="block text-white mb-1">8.1 Attractor-Based Interpretation</span>
              of the Hubble Tension
            </h2>
            <div className="text-sm mb-4">
              <p className="mb-2">The Hubble parameter is an emergent expectation value:</p>
              <div className="border border-slate-700 rounded bg-[#111827] p-2 flex justify-center mb-2">
                <Eq>H<sub>0</sub>(N) = ⟨ψ|Ĥ<sub>0</sub>[Ω]|ψ⟩</Eq>
              </div>
              <p className="mb-2">For a broad class of stable attractor solutions, a gradual relaxation toward the asymptotic value <Eq>H<sub>0</sub><sup>*</sup></Eq> is expected:</p>
              <div className="border border-cyan-800/50 rounded bg-[#111827] p-2 flex justify-center text-cyan-300">
                <Eq>H<sub>0</sub>(N) = H<sub>0</sub><sup>*</sup> + δH<sub>0</sub> e<sup>-κN</sup></Eq>
              </div>
            </div>

            {/* Chart 1 SVG */}
            <div className="flex-1 border border-slate-700/50 rounded bg-[#0A0F1A] p-2 mb-4 relative min-h-[220px]">
              <div className="text-cyan-400 text-xs font-semibold text-center mb-1">Predicted relaxation of <Eq>H<sub>0</sub>(z)</Eq></div>
              <svg viewBox="0 0 300 200" className="w-full h-full text-[8px]" style={{fontFamily: 'sans-serif'}}>
                {/* Grid Lines */}
                {[50, 60, 70, 80, 90].map((y, i) => {
                  const yPos = 180 - ((y - 50) / 40) * 160;
                  return (
                    <g key={i}>
                      <line x1="35" y1={yPos} x2="290" y2={yPos} stroke="#1E293B" strokeDasharray="2 2" />
                      <text x="30" y={yPos+3} fill="#64748B" textAnchor="end">{y}</text>
                    </g>
                  );
                })}
                {/* X axis ticks */}
                {[-3, -2, -1, 0, 1, 2, 3].map((logZ, i) => {
                  const xPos = 40 + ((logZ - (-3)) / 6) * 250;
                  return (
                    <text key={i} x={xPos} y="195" fill="#64748B" textAnchor="middle">10<tspan dy="-3" fontSize="6">{logZ}</tspan></text>
                  );
                })}
                <text x="10" y="100" fill="#64748B" transform="rotate(-90 10 100)" textAnchor="middle" className="text-[10px]">
                  H₀ [km s⁻¹ Mpc⁻¹]
                </text>
                <text x="165" y="210" fill="#64748B" textAnchor="middle" className="text-[10px]">
                  Redshift z
                </text>

                {/* H0* Asymptote Line */}
                <line x1="160" y1={110.4} x2="290" y2={110.4} stroke="#FDE047" strokeDasharray="4 2" />
                <text x="270" y="105" fill="#FDE047" textAnchor="middle" className="font-serif italic text-[10px]">H<tspan dy="2" fontSize="6">0</tspan><tspan dy="-4">^</tspan></text>

                {/* Main Curve */}
                <path d="M 290 110.4 C 200 110.5, 120 111, 40 88" fill="none" stroke="#22D3EE" strokeWidth="2" />
                
                {/* Arrow and Label */}
                <path d="M 80 100 L 75 97 L 78 103 Z" fill="#22D3EE" />
                <text x="65" y="85" fill="#22D3EE" textAnchor="middle">Relaxation</text>
                <text x="65" y="95" fill="#22D3EE" textAnchor="middle">trajectory</text>
                
                <text x="90" y="30" fill="#94A3B8">Early-universe (CMB)</text>
                <line x1="85" y1="35" x2="280" y2="35" stroke="#94A3B8" strokeDasharray="2 2" strokeWidth="0.5"/>

                {/* Data Points */}
                {/* Planck */}
                <g stroke="#F97316" fill="#F97316">
                   <line x1="280" y1="108" x2="280" y2="113"/><circle cx="280" cy="110.5" r="1.5" />
                   <line x1="270" y1="107" x2="270" y2="114"/><circle cx="270" cy="110.5" r="1.5" />
                   <line x1="260" y1="108" x2="260" y2="113"/><circle cx="260" cy="110.5" r="1.5" />
                </g>
                {/* BAO */}
                <g stroke="#22C55E" fill="#22C55E">
                   <line x1="180" y1="104" x2="180" y2="112"/><circle cx="180" cy="108" r="1.5" />
                   <line x1="165" y1="103" x2="165" y2="111"/><circle cx="165" cy="107" r="1.5" />
                </g>
                {/* Pantheon+ */}
                <g stroke="#38BDF8" fill="#38BDF8">
                   <line x1="130" y1="95" x2="130" y2="105"/><circle cx="130" cy="100" r="1.5" />
                   <line x1="110" y1="90" x2="110" y2="102"/><circle cx="110" cy="96" r="1.5" />
                </g>
                {/* SH0ES */}
                <g stroke="#FACC15" fill="#FACC15">
                   <line x1="60" y1="84" x2="60" y2="92"/><circle cx="60" cy="88" r="1.5" />
                   <line x1="45" y1="83" x2="45" y2="91"/><circle cx="45" cy="87" r="1.5" />
                </g>
                {/* Strong Lenses */}
                <g stroke="#C084FC" fill="#C084FC">
                   <line x1="145" y1="94" x2="145" y2="106"/><circle cx="145" cy="100" r="1.5" />
                </g>
                
                {/* Legend */}
                <g transform="translate(160, 130)">
                  <circle cx="0" cy="0" r="1.5" fill="#F97316"/><text x="10" y="3" fill="#cbd5e1" fontSize="7">Planck (CMB)</text>
                  <circle cx="0" cy="10" r="1.5" fill="#22C55E"/><text x="10" y="13" fill="#cbd5e1" fontSize="7">BAO</text>
                  <circle cx="0" cy="20" r="1.5" fill="#38BDF8"/><text x="10" y="23" fill="#cbd5e1" fontSize="7">Pantheon+ SNe</text>
                  <circle cx="0" cy="30" r="1.5" fill="#C084FC"/><text x="10" y="33" fill="#cbd5e1" fontSize="7">Strong lenses</text>
                  <circle cx="0" cy="40" r="1.5" fill="#FACC15"/><text x="10" y="43" fill="#cbd5e1" fontSize="7">SH0ES (Cepheids)</text>
                  <circle cx="0" cy="50" r="1.5" fill="#64748B"/><text x="10" y="53" fill="#cbd5e1" fontSize="7" opacity="0.8">GW standard sirens</text>
                  <circle cx="0" cy="60" r="1.5" fill="#F43F5E"/><text x="10" y="63" fill="#cbd5e1" fontSize="7" opacity="0.8">Redshift drift (future)</text>
                </g>
              </svg>
            </div>

            <div className="border border-[#1E3A8A] rounded bg-[#0A1526] p-3 text-xs leading-relaxed">
              <span className="text-cyan-400 font-semibold">Observational test:</span> Reconstruct <Eq>H<sub>0</sub>(z)</Eq> using standard sirens, strong-lens time delays, and redshift-drift measurements. Look for a systematic relaxation toward <Eq>H<sub>0</sub><sup>*</sup></Eq>.
            </div>
          </div>

          {/* Column 2: Shadows */}
          <div className="border border-[#1E3A8A] bg-[#0A101D] rounded-lg flex flex-col p-4 shadow-inner shadow-blue-900/10">
            <h2 className="text-cyan-400 font-semibold text-center border-b border-[#1E3A8A] pb-2 mb-4 leading-tight">
              <span className="block text-white mb-1">8.2 Variance Suppression in</span>
              Low-Redshift Black-Hole Shadows
            </h2>
            <div className="text-sm mb-4">
              <p className="mb-2">Attractor dynamics imply exponential variance decay:</p>
              <div className="border border-slate-700 rounded bg-[#111827] p-2 flex justify-center mb-2">
                <Eq>Var(C<sub>i</sub>) &propto; e<sup>-2κN</sup></Eq>
              </div>
              <p className="mb-2">This leads to reduced scatter in derived observables. For black-hole shadow angular diameters:</p>
              <div className="border border-purple-800/50 rounded bg-[#111827] p-2 flex flex-col items-center text-[#d946ef]">
                <Eq>Var(θ<sub>sh</sub>) &rarr; minimum</Eq>
                <span className="text-slate-400 text-xs my-0.5">or</span>
                <Eq>Var(θ<sub>sh</sub>) &lt; Var<sub>ΛCDM</sub>(θ<sub>sh</sub>)</Eq>
              </div>
            </div>

            {/* Chart 2 SVG */}
            <div className="flex-1 border border-slate-700/50 rounded bg-[#0A0F1A] p-2 mb-4 relative min-h-[220px]">
              <div className="text-[#d946ef] text-xs font-semibold text-center mb-1">Population-level prediction (low redshift):</div>
              <svg viewBox="0 0 300 200" className="w-full h-full text-[8px]" style={{fontFamily: 'sans-serif'}}>
                {/* Grid Lines */}
                {[10, 20, 30, 40, 50, 60].map((y, i) => {
                  const yPos = 180 - ((y - 10) / 50) * 160;
                  return (
                    <g key={i}>
                      <line x1="35" y1={yPos} x2="290" y2={yPos} stroke="#1E293B" strokeDasharray="2 2" />
                      <text x="30" y={yPos+3} fill="#64748B" textAnchor="end">{y}</text>
                    </g>
                  );
                })}
                {/* X axis ticks */}
                {[6, 7, 8, 9, 10].map((logM, i) => {
                  const xPos = 40 + ((logM - 6) / 4) * 250;
                  return (
                    <text key={i} x={xPos} y="195" fill="#64748B" textAnchor="middle">10<tspan dy="-3" fontSize="6">{logM}</tspan></text>
                  );
                })}
                <text x="10" y="100" fill="#64748B" transform="rotate(-90 10 100)" textAnchor="middle" className="text-[10px]">
                  θ<tspan dy="2" fontSize="6">sh</tspan><tspan dy="-2"> [μas]</tspan>
                </text>
                <text x="165" y="210" fill="#64748B" textAnchor="middle" className="text-[10px]">
                  Mass M<tspan dy="2" fontSize="6">BH</tspan><tspan dy="-2"> [M</tspan><tspan dy="2" fontSize="6">⊙</tspan><tspan dy="-2">]</tspan>
                </text>

                {/* Lambda CDM Area */}
                <path d="M 40 140 Q 165 110, 290 80 L 290 20 Q 165 50, 40 80 Z" fill="#475569" opacity="0.4" />
                
                {/* Attractor Area */}
                <path d="M 40 120 Q 165 95, 290 60 L 290 40 Q 165 75, 40 100 Z" fill="#9333EA" opacity="0.4" />
                
                {/* Attractor Center Line */}
                <path d="M 40 110 Q 165 85, 290 50" fill="none" stroke="#D946EF" strokeWidth="2" />
                
                {/* Scatter Points Lambda CDM */}
                {[...Array(40)].map((_, i) => (
                  <circle key={`l-${i}`} cx={45 + Math.random()*240} cy={30 + Math.random()*100} r="1" fill="#94A3B8" opacity="0.6"/>
                ))}
                
                {/* Scatter Points Attractor */}
                {[...Array(40)].map((_, i) => {
                  const x = 45 + Math.random()*240;
                  const baseY = 110 - ((x - 40)/250)*60;
                  const yOffset = (Math.random() - 0.5) * 15;
                  return <circle key={`a-${i}`} cx={x} cy={baseY + yOffset} r="1.5" fill="#E879F9" />;
                })}

                {/* Legend */}
                <g transform="translate(45, 25)">
                   <line x1="0" y1="0" x2="15" y2="0" stroke="#94A3B8" strokeDasharray="3 2" strokeWidth="2" />
                   <text x="20" y="3" fill="#E2E8F0" fontSize="8" fontStyle="italic">ΛCDM (expected)</text>
                   
                   <line x1="0" y1="15" x2="15" y2="15" stroke="#D946EF" strokeWidth="2" />
                   <text x="20" y="18" fill="#E2E8F0" fontSize="8">Attractor prediction</text>
                </g>
              </svg>
            </div>

            <div className="border border-purple-900/50 rounded bg-[#160A1C] p-3 text-xs leading-relaxed">
              <span className="text-[#d946ef] font-semibold">Observational test:</span> Measure shadow diameters with EHT, ngEHT, and future VLBI arrays. Test whether variance is reduced relative to ΛCDM for matched populations.
            </div>
          </div>

          {/* Column 3: SGWB */}
          <div className="border border-[#1E3A8A] bg-[#0A101D] rounded-lg flex flex-col p-4 shadow-inner shadow-blue-900/10">
            <h2 className="text-cyan-400 font-semibold text-center border-b border-[#1E3A8A] pb-2 mb-4 leading-tight">
              <span className="block text-white mb-1">8.3 Stochastic Gravitational-Wave</span>
              Signatures of Geometric Condensation
            </h2>
            <div className="text-sm mb-4">
              <p className="mb-2">Geometric condensation can amplify and damp tensor modes on the attractor scale κ, inducing spectral modulations in the stochastic GW background:</p>
              <div className="border border-green-800/50 rounded bg-[#111827] p-2 flex justify-center text-green-300 mb-3">
                <Eq>Ω<sub>GW</sub>(f) = Ω<sub>GW</sub><sup>(0)</sup>(f) [ 1 + ε G(f; κ) ]</Eq>
              </div>
              <p className="text-cyan-400 font-medium mb-1">Possible signatures:</p>
              <ul className="list-disc pl-4 text-xs space-y-1 text-slate-300">
                <li>Spectral tilts or broken power laws</li>
                <li>Localized oscillatory features or ripples</li>
                <li>Deviations from scale invariance</li>
              </ul>
            </div>

            {/* Chart 3 SVG */}
            <div className="flex-1 border border-slate-700/50 rounded bg-[#0A0F1A] p-2 mb-4 relative min-h-[220px]">
              <div className="text-green-400 text-xs font-semibold text-center mb-1">Illustrative SGWB spectra</div>
              <svg viewBox="0 0 300 200" className="w-full h-full text-[8px]" style={{fontFamily: 'sans-serif'}}>
                {/* Grid Lines */}
                {[-16, -14, -12, -10, -8, -6].map((y, i) => {
                  const yPos = 160 - ((y - (-16)) / 10) * 140;
                  return (
                    <g key={i}>
                      <line x1="35" y1={yPos} x2="290" y2={yPos} stroke="#1E293B" strokeDasharray="2 2" />
                      <text x="30" y={yPos+3} fill="#64748B" textAnchor="end">10<tspan dy="-3" fontSize="6">{y}</tspan></text>
                    </g>
                  );
                })}
                {/* X axis ticks */}
                {[-10, -8, -6, -4, -2, 1].map((logF, i) => {
                  const xPos = 40 + ((logF - (-10)) / 11) * 250;
                  return (
                    <text key={i} x={xPos} y="175" fill="#64748B" textAnchor="middle">10<tspan dy="-3" fontSize="6">{logF}</tspan></text>
                  );
                })}
                <text x="10" y="90" fill="#64748B" transform="rotate(-90 10 90)" textAnchor="middle" className="text-[10px]">
                  Ω<tspan dy="2" fontSize="6">GW</tspan><tspan dy="-2">(f)</tspan>
                </text>
                <text x="165" y="195" fill="#64748B" textAnchor="middle" className="text-[10px]">
                  Frequency f [Hz]
                </text>

                {/* Experiment Bands */}
                {/* PTAs */}
                <rect x="40" y="145" width="45" height="15" fill="#4C1D95" opacity="0.4" />
                <text x="62.5" y="152" fill="#C4B5FD" textAnchor="middle" fontSize="6">PTAs</text>
                <text x="62.5" y="158" fill="#C4B5FD" textAnchor="middle" fontSize="4">(NANOGrav,</text>
                <text x="62.5" y="163" fill="#C4B5FD" textAnchor="middle" fontSize="4">PPTA)</text>

                {/* LISA */}
                <rect x="100" y="145" width="30" height="15" fill="#1E3A8A" opacity="0.4" />
                <text x="115" y="155" fill="#BFDBFE" textAnchor="middle" fontSize="6">LISA</text>

                {/* Taiji/TianQin */}
                <rect x="135" y="145" width="45" height="15" fill="#064E3B" opacity="0.4" />
                <text x="157.5" y="152" fill="#A7F3D0" textAnchor="middle" fontSize="6">Taiji</text>
                <text x="157.5" y="158" fill="#A7F3D0" textAnchor="middle" fontSize="6">TianQin</text>

                {/* LIGO */}
                <rect x="185" y="145" width="45" height="15" fill="#065F46" opacity="0.4" />
                <text x="207.5" y="155" fill="#A7F3D0" textAnchor="middle" fontSize="6">LIGO</text>
                
                {/* CMB-S4 */}
                <rect x="235" y="145" width="55" height="15" fill="#854D0E" opacity="0.4" />
                <text x="262.5" y="155" fill="#FEF08A" textAnchor="middle" fontSize="6">CMB-S4</text>

                {/* Lambda CDM Line */}
                <line x1="40" y1="40" x2="290" y2="120" stroke="#94A3B8" strokeDasharray="4 2" strokeWidth="1.5" />

                {/* Attractor Line 1 (Yellow) */}
                <path d="M 40 100 Q 60 70, 85 45 T 140 120 T 180 100 T 220 115 T 260 90 T 290 120" fill="none" stroke="#FDE047" strokeWidth="1.5" />

                {/* Attractor Line 2 (Cyan) */}
                <path d="M 40 80 Q 70 80, 100 65 T 150 140 T 190 130 T 210 135 T 240 125 T 270 140 T 290 110" fill="none" stroke="#22D3EE" strokeWidth="1.5" />

                {/* Legend */}
                <g transform="translate(180, 15)">
                   <line x1="0" y1="0" x2="15" y2="0" stroke="#94A3B8" strokeDasharray="3 2" strokeWidth="1.5" />
                   <text x="20" y="3" fill="#E2E8F0" fontSize="7" fontStyle="italic">Scale-invariant (ΛCDM)</text>
                   
                   <line x1="0" y1="12" x2="15" y2="12" stroke="#FDE047" strokeWidth="1.5" />
                   <text x="20" y="15" fill="#E2E8F0" fontSize="7">Attractor (example)</text>
                   
                   <line x1="0" y1="24" x2="15" y2="24" stroke="#22D3EE" strokeWidth="1.5" />
                   <text x="20" y="27" fill="#E2E8F0" fontSize="7">Attractor (example 2)</text>
                </g>
              </svg>
            </div>

            <div className="border border-green-900/50 rounded bg-[#081A12] p-3 text-xs leading-relaxed">
              <span className="text-green-400 font-semibold">Observational test:</span> Search for spectral modulations or phase-structured features with LISA, Taiji, TianQin, PTAs, SKA, and CMB-S4.
            </div>
          </div>

          {/* Column 4: Falsification Diagram */}
          <div className="border border-[#1E3A8A] bg-[#0A101D] rounded-lg flex flex-col p-4 shadow-inner shadow-blue-900/10">
             <h2 className="text-cyan-400 font-semibold text-center border-b border-[#1E3A8A] pb-2 mb-4 leading-tight">
              <span className="block text-white mb-1">8.4 Multi-Channel</span>
              Falsification Program
            </h2>
            <p className="text-sm mb-4">Three independent observational channels probe complementary aspects of the attractor dynamics.</p>
            
            <div className="flex-1 flex items-center justify-center mb-4 min-h-[300px]">
               {/* Decorative structural network diagram */}
               <svg viewBox="0 0 300 350" className="w-full h-full text-[10px]" style={{fontFamily: 'sans-serif'}}>
                 <defs>
                   {/* Blur filter for glows */}
                   <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="5" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                   <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="5" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                   <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="5" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                 </defs>

                 {/* Central Text */}
                 <text x="150" y="170" fill="#FDE047" textAnchor="middle" fontWeight="bold">ATTRACTOR</text>
                 <text x="150" y="185" fill="#FDE047" textAnchor="middle" fontWeight="bold">DYNAMICS</text>

                 {/* Connecting Arrows */}
                 <g stroke="#94A3B8" strokeWidth="1" fill="none" opacity="0.6">
                   <path d="M 120 150 Q 100 120, 80 100 M 80 100 L 85 105 M 80 100 L 88 98" />
                   <path d="M 180 150 Q 200 120, 220 100 M 220 100 L 215 105 M 220 100 L 212 98" />
                   <path d="M 150 200 Q 150 220, 150 240 M 150 240 L 145 235 M 150 240 L 155 235" />
                 </g>

                 {/* Node 1: Hubble (Top Center/Rightish) */}
                 <g transform="translate(200, 60)">
                    <circle cx="0" cy="0" r="35" fill="none" stroke="#38BDF8" strokeWidth="1.5" filter="url(#glow-blue)" />
                    {/* Fake Galaxy */}
                    <ellipse cx="0" cy="0" rx="20" ry="8" fill="#1E40AF" opacity="0.8" transform="rotate(-20)" />
                    <ellipse cx="0" cy="0" rx="10" ry="4" fill="#60A5FA" opacity="0.9" transform="rotate(-20)" />
                    <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
                 </g>
                 <text x="210" y="115" fill="#38BDF8" fontWeight="bold" textAnchor="middle" fontSize="10">1. Redshift-Dependent</text>
                 <text x="210" y="127" fill="#38BDF8" fontWeight="bold" textAnchor="middle" fontSize="10">Hubble Drift</text>
                 <text x="210" y="140" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">Detect relaxation</text>
                 <text x="210" y="150" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">trajectory <tspan fill="#FDE047" fontFamily="serif" fontStyle="italic">H</tspan><tspan fill="#FDE047" fontSize="5" dy="2">0</tspan><tspan fill="#FDE047" fontSize="8" dy="-2">(z) → </tspan><tspan fill="#FDE047" fontFamily="serif" fontStyle="italic">H</tspan><tspan fill="#FDE047" fontSize="5" dy="2">0</tspan><tspan fill="#FDE047" fontSize="5" dy="-4">*</tspan></text>
                 <text x="210" y="160" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">across intermediate</text>
                 <text x="210" y="170" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">redshifts.</text>


                 {/* Node 2: Shadow (Bottom Left) */}
                 <g transform="translate(60, 220)">
                    <circle cx="0" cy="0" r="35" fill="none" stroke="#D946EF" strokeWidth="1.5" filter="url(#glow-purple)" />
                    {/* Fake Black Hole */}
                    <circle cx="0" cy="0" r="14" fill="#000000" />
                    <circle cx="0" cy="0" r="15" fill="none" stroke="#F97316" strokeWidth="3" opacity="0.8" />
                    <ellipse cx="0" cy="0" rx="30" ry="10" fill="none" stroke="#F97316" strokeWidth="2" opacity="0.6" transform="rotate(15)" />
                    <ellipse cx="0" cy="0" rx="30" ry="10" fill="none" stroke="#D946EF" strokeWidth="1" opacity="0.7" transform="rotate(15)" />
                 </g>
                 <text x="70" y="275" fill="#D946EF" fontWeight="bold" textAnchor="middle" fontSize="10">2. Shadow Variance</text>
                 <text x="70" y="287" fill="#D946EF" fontWeight="bold" textAnchor="middle" fontSize="10">Suppression</text>
                 <text x="70" y="300" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">Measure reduced</text>
                 <text x="70" y="310" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">population-level variance</text>
                 <text x="70" y="320" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">in low-z black-hole</text>
                 <text x="70" y="330" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">shadow diameters</text>
                 <text x="70" y="340" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">relative to ΛCDM</text>
                 <text x="70" y="350" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">expectations.</text>


                 {/* Node 3: SGWB (Bottom Right) */}
                 <g transform="translate(240, 220)">
                    <circle cx="0" cy="0" r="35" fill="none" stroke="#2DD4BF" strokeWidth="1.5" filter="url(#glow-green)" />
                    {/* Fake Waveform */}
                    <path d="M -25 0 Q -15 -15, -5 0 T 15 0 T 25 0 M -20 0 Q -10 15, 0 0 T 20 0" fill="none" stroke="#2DD4BF" strokeWidth="1.5" />
                    <path d="M -30 0 L 30 0" stroke="#0F766E" strokeWidth="0.5" />
                 </g>
                 <text x="240" y="275" fill="#2DD4BF" fontWeight="bold" textAnchor="middle" fontSize="10">3. SGWB Spectral</text>
                 <text x="240" y="287" fill="#2DD4BF" fontWeight="bold" textAnchor="middle" fontSize="10">Structure</text>
                 <text x="240" y="300" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">Identify non-scale-</text>
                 <text x="240" y="310" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">invariant tensor</text>
                 <text x="240" y="320" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">features or geometric-</text>
                 <text x="240" y="330" fill="#CBD5E1" textAnchor="middle" fontSize="8" opacity="0.8">phase modulations.</text>
               </svg>
            </div>

            <div className="border border-slate-600 rounded bg-[#111827] p-3 text-xs leading-relaxed">
              Failure in any one channel would constrain or falsify the framework; concordant evidence across all three would strongly support the attractor-based cosmological model.
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="p-4 md:p-6 pb-2">
          <div className="bg-[#111827] border border-slate-700 rounded-lg overflow-hidden">
             <h3 className="text-center text-white font-bold py-2 border-b border-slate-700 bg-[#1E293B]">8.4 Multi-Channel Falsification Program (Summary)</h3>
             <div className="overflow-x-auto">
               <table className="w-full text-sm text-left border-collapse">
                 <thead className="text-xs text-slate-300 uppercase bg-[#0B101A] border-b border-slate-700">
                   <tr>
                     <th className="px-4 py-3 border-r border-slate-800">Channel</th>
                     <th className="px-4 py-3 border-r border-slate-800">What is Measured</th>
                     <th className="px-4 py-3 border-r border-slate-800">Key Observable</th>
                     <th className="px-4 py-3 border-r border-slate-800">Attractor-Based Prediction</th>
                     <th className="px-4 py-3 border-r border-slate-800">Main Instruments / Probes</th>
                     <th className="px-4 py-3">Falsification Criterion</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-800">
                   
                   {/* Row 1 */}
                   <tr className="bg-[#0D1525]">
                     <td className="px-4 py-3 border-r border-slate-800 font-medium whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded bg-cyan-400"></span>
                          <span className="text-cyan-300">1. Redshift-Dependent<br/>Hubble Drift</span>
                        </div>
                     </td>
                     <td className="px-4 py-3 border-r border-slate-800 text-slate-400">Expansion rate as a<br/>function of redshift</td>
                     <td className="px-4 py-3 border-r border-slate-800 text-center"><Eq>H<sub>0</sub>(z)</Eq></td>
                     <td className="px-4 py-3 border-r border-slate-800">
                       Monotonic relaxation toward attractor:<br/>
                       <Eq>H<sub>0</sub>(z) &rarr; H<sub>0</sub><sup>*</sup></Eq> at low <i>z</i><br/>
                       <span className="(no persistent offset) text-xs text-slate-500"></span>
                     </td>
                     <td className="px-4 py-3 border-r border-slate-800 text-slate-400">
                       Standard sirens (LVK, ET, CE, LISA)<br/>
                       Strong-lens time delays (TDCOSMO, LSST)<br/>
                       Redshift drift (ELT-HIRES, SKA)
                     </td>
                     <td className="px-4 py-3 text-slate-400">
                       No relaxation trend across intermediate <i>z</i>;<br/>
                       persistent or inverted deviation from <Eq>H<sub>0</sub><sup>*</sup></Eq>
                     </td>
                   </tr>

                   {/* Row 2 */}
                   <tr className="bg-[#111827]">
                     <td className="px-4 py-3 border-r border-slate-800 font-medium whitespace-nowrap">
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded bg-purple-500"></span>
                           <span className="text-[#d946ef]">2. Shadow Variance<br/>Suppression</span>
                        </div>
                     </td>
                     <td className="px-4 py-3 border-r border-slate-800 text-slate-400">Angular diameter of black-hole<br/>shadows (population level)</td>
                     <td className="px-4 py-3 border-r border-slate-800 text-center"><Eq>Var(θ<sub>sh</sub>)</Eq><br/>vs. <i>z</i>, <Eq>M<sub>BH</sub></Eq></td>
                     <td className="px-4 py-3 border-r border-slate-800">
                       Variance decreases and reaches<br/>minimum at low <i>z</i>:<br/>
                       <Eq>Var(θ<sub>sh</sub>) &lt; Var<sub>ΛCDM</sub>(θ<sub>sh</sub>)</Eq>
                     </td>
                     <td className="px-4 py-3 border-r border-slate-800 text-slate-400">
                       EHT, ngEHT<br/>
                       Next-generation VLBI arrays<br/>
                       Global sample of SMBHs
                     </td>
                     <td className="px-4 py-3 text-slate-400">
                       No suppression; variance consistent<br/>
                       with or larger than ΛCDM prediction<br/>
                       at low redshift
                     </td>
                   </tr>

                   {/* Row 3 */}
                   <tr className="bg-[#0D1525]">
                     <td className="px-4 py-3 border-r border-slate-800 font-medium whitespace-nowrap">
                       <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded bg-green-400"></span>
                           <span className="text-green-400">3. SGWB Spectral<br/>Structure</span>
                        </div>
                     </td>
                     <td className="px-4 py-3 border-r border-slate-800 text-slate-400">Stochastic gravitational-wave<br/>background spectrum</td>
                     <td className="px-4 py-3 border-r border-slate-800 text-center"><Eq>Ω<sub>GW</sub>(f)</Eq></td>
                     <td className="px-4 py-3 border-r border-slate-800">
                       Non-scale-invariant features:<br/>
                       tilts, breaks, or phase-dependent<br/>
                       modulations
                     </td>
                     <td className="px-4 py-3 border-r border-slate-800 text-slate-400">
                       LISA, Taiji, TianQin<br/>
                       Pulsar timing arrays (NANOGrav, PPTA, IPTA)<br/>
                       SKA, CMB-S4
                     </td>
                     <td className="px-4 py-3 text-slate-400">
                       Spectrum consistent with featureless<br/>
                       power law over all probed scales;<br/>
                       no modulations or breaks detected
                     </td>
                   </tr>

                 </tbody>
               </table>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 pt-1 mb-2">
          <div className="flex items-start gap-4 p-4 border border-slate-700/50 bg-[#0A0F1A] rounded text-sm text-slate-300">
            <Scale className="w-8 h-8 text-yellow-500 shrink-0" />
            <p>
              The three channels are <strong className="text-yellow-500">statistically</strong> and systematically independent. Concordant evidence across all three channels would provide <strong className="text-yellow-500">strong support</strong> for the attractor-driven cosmological framework.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CosmicDashboard;
