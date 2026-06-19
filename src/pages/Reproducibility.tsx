import React from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Download, 
  Github, 
  FileText, 
  PlayCircle,
  CheckCircle2
} from 'lucide-react';
import DownloadArchiveButton from '../components/DownloadArchiveButton';

export default function ReproducibilityPage() {
  return (
    <div className="w-full h-full min-h-screen p-6 md:p-12 overflow-y-auto">
      <div className="max-w-5xl mx-auto space-y-12 pb-20">
        
        {/* Header section */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-100 font-sans tracking-tight">
            Computational Reproducibility
          </h1>
          <h2 className="text-2xl font-serif text-slate-300 border-b border-slate-800 pb-4">(Final Submission Version)</h2>
          <p className="text-lg text-slate-400 font-serif leading-relaxed max-w-4xl text-justify pt-2">
            In accordance with contemporary standards for computational cosmology and reproducible Bayesian inference, we provide a complete, containerized ecosystem enabling full independent verification of all numerical results presented in Section 8.5. This includes dataset versions, likelihood implementations, MCMC sampling scripts, posterior chains, covariance matrices, and a frozen Docker environment.
          </p>
          <div className="pt-2 text-slate-300">
            <p className="mb-4">All resources are available in the open repository:</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/CivOS/svcc-computational-cosmology" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition-colors">
                <Github className="w-4 h-4" /> GitHub: CivOS/svcc-computational-cosmology
              </a>
              <DownloadArchiveButton />
            </div>
          </div>
        </header>

        {/* Datasets Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-400"/> Datasets and Preprocessing
          </h3>
          <p className="text-slate-400">The repository contains the exact data-release versions used in the analysis:</p>
          <ul className="space-y-3 ms-2">
            <li className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Pantheon+ SNe Ia compressed distance-modulus vectors (1701 SNe)</li>
            <li className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> DESI 2024 BAO measurements of $D_M/r_d$ and $D_H/r_d$ across $0.1 &lt; z &lt; 2.4$</li>
            <li className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Planck 2018 shift-parameter priors $(R, \ell_a, \Omega_b h^2)$</li>
          </ul>
          
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
            <p className="text-sm text-slate-400 mb-3">Each dataset is accompanied by:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1 items-center bg-slate-950 p-3 rounded border border-slate-800/80">
                <FileText className="w-4 h-4 text-slate-500" />
                <span className="text-slate-300 text-xs">metadata files</span>
              </div>
              <div className="flex flex-col gap-1 items-center bg-slate-950 p-3 rounded border border-slate-800/80">
                <Code2 className="w-4 h-4 text-slate-500" />
                <span className="text-slate-300 text-xs">preprocessing scripts</span>
              </div>
              <div className="flex flex-col gap-1 items-center bg-slate-950 p-3 rounded border border-slate-800/80">
                <Database className="w-4 h-4 text-slate-500" />
                <span className="text-slate-300 text-xs">covariance matrices</span>
              </div>
              <div className="flex flex-col gap-1 items-center bg-slate-950 p-3 rounded border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-slate-500" />
                <span className="text-slate-300 text-xs">version hashes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Likelihood and Flow Implementation */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 flex items-center gap-2">
             <Code2 className="w-5 h-5 text-emerald-400"/> Likelihood and Flow Implementation
          </h3>
          <p className="text-slate-400">The core likelihood engine is implemented in Python and fully documented. The repository includes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 ms-2">
            <div className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> the generative feedback map $F(\Omega; \Theta)$</div>
            <div className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> the fixed-point solver for $\Omega^*$</div>
            <div className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> the analytically derived stability exponent $\kappa(\Theta)$</div>
            <div className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> numerical integration of the background flow</div>
            <div className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> $d_L(z)$ and $d_M(z)$ calculators</div>
            <div className="flex items-center gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Pantheon+, DESI, and Planck likelihood modules</div>
          </div>

          <div className="bg-[#0B101A] border border-slate-800 rounded-xl overflow-hidden shadow-2xl mt-6">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
               <span className="text-xs font-mono text-slate-400">Excerpt: core_likelihood.py</span>
               <button className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"><FileText className="w-3 h-3"/> Copy</button>
            </div>
            <pre className="p-6 text-sm font-mono text-slate-300 overflow-x-auto">
              <code>{`import numpy as np
from scipy.optimize import root_scalar

def svcc_flow(Omega, Theta):
    """Evaluates the generative driving term F(Omega; Theta)."""
    p, q, r, lam = Theta
    return (Omega**p) * np.exp(lam * (1.0 - Omega)) / (1.0 + Omega**q)**r

def solve_fixed_point(Theta):
    """Identifies the macroscopic fixed point Omega* via root finding."""
    res = root_scalar(lambda w: svcc_flow(w, Theta) - w, 
                      bracket=[1e-4, 1e2], method='brentq')
    return res.root

def derived_kappa(Omega_star, Theta):
    """Computes the analytically endogenized attractor decay rate kappa."""
    p, q, r, lam = Theta
    # Exact analytical derivative of F(Omega) evaluated at Omega*
    term_p = p / Omega_star
    term_lam = lam
    term_q = (r * q * Omega_star**(q - 1.0)) / (1.0 + Omega_star**q)
    
    dF_dOmega = svcc_flow(Omega_star, Theta) * (term_p - term_lam - term_q)
    return 1.0 - dF_dOmega

def compute_pantheon_chi2(mu_model, mu_obs, inv_cov):
    """Computes the SNe Ia likelihood using the exact covariance matrix."""
    delta = mu_model - mu_obs
    return -0.5 * (delta.T @ inv_cov @ delta)`}</code>
            </pre>
          </div>
          <p className="text-sm text-slate-500 pt-2 italic">This snippet illustrates the exact mathematical realization of the SVCC dynamical constraints and likelihood inversions; the complete end-to-end framework is provided in the repository.</p>
        </section>

        {/* Execution Guide */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-purple-400" /> Containerized Environment
          </h3>
          <p className="text-slate-400">To ensure numerical reproducibility across platforms, the repository includes a validated Docker environment containing:</p>
          
          <div className="flex flex-wrap gap-2 text-sm font-mono text-purple-300">
            <span className="bg-purple-900/30 px-2 py-1 rounded border border-purple-800/50">Python 3.10.x</span>
            <span className="bg-purple-900/30 px-2 py-1 rounded border border-purple-800/50">NumPy, SciPy</span>
            <span className="bg-purple-900/30 px-2 py-1 rounded border border-purple-800/50">emcee (affine-invariant ensemble sampler)</span>
            <span className="bg-purple-900/30 px-2 py-1 rounded border border-purple-800/50">corner (posterior visualization)</span>
            <span className="bg-purple-900/30 px-2 py-1 rounded border border-purple-800/50">Matplotlib</span>
          </div>

          <h4 className="text-lg font-bold text-slate-200 mt-6">Build and Run</h4>
          <div className="bg-black/50 p-4 rounded-md font-mono text-sm text-indigo-300 border border-slate-800/80">
            $ git clone https://github.com/CivOS/svcc-computational-cosmology.git<br/>
            $ cd svcc-computational-cosmology<br/>
            $ docker build -t svcc-emcee-env .<br/>
            $ docker run -v $(pwd)/results:/app/results svcc-emcee-env python run_mcmc.py<br/>
            $ sha256sum results/svcc_posterior_samples.npy
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mt-4 items-start">
             <div className="flex-1 space-y-2">
               <p className="text-sm font-bold text-slate-300">The pipeline executes:</p>
               <ul className="text-sm text-slate-400 space-y-1">
                 <li>• 128 walkers</li>
                 <li>• 10,000 steps</li>
                 <li>• Gelman-Rubin diagnostics every 500 steps</li>
                 <li>• automatic checkpointing</li>
                 <li>• posterior-chain archiving</li>
               </ul>
             </div>
             <div className="flex-1 bg-indigo-500/10 p-4 rounded border border-indigo-500/20 text-sm text-indigo-200">
               <PlayCircle className="w-5 h-5 mb-2 text-indigo-400" />
               <p>All posterior chains used in Section 8.5 are included in the <code>results/</code> directory with SHA-256 hashes.</p>
             </div>
          </div>
        </section>

        {/* Reproducibility Guarantees */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-400" /> Reproducibility Guarantees
          </h3>
          
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <p className="text-slate-400 text-sm">The repository provides:</p>
              <ul className="space-y-2 text-sm text-slate-300 ms-2">
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> exact dataset versions</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> preprocessing scripts</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> likelihood code</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> fixed-point solvers</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> $\kappa$-derivative implementation</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> MCMC configuration files</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> posterior chains and covariance matrices</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Docker image hashes</li>
                <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> complete run logs</li>
              </ul>
            </div>
            <div className="flex-1 flex items-center justify-center border-l md:border-l-0 md:border-t-0 border-t border-slate-800 md:pl-8 pt-6 md:pt-0">
               <p className="text-lg text-amber-100 font-serif leading-relaxed text-center">
                 "This ensures that all numerical results — including the posterior distribution of $\Theta$, the derived posterior of $\kappa$, and the model-selection metrics (AIC/BIC) — can be independently reproduced without ambiguity."
               </p>
            </div>
          </div>

        </section>

        {/* Reproducibility Statement */}
        <section className="space-y-4 pt-8">
          <div className="p-8 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
             <h3 className="text-xl font-bold text-slate-100 mb-4 font-serif">Reproducibility Statement</h3>
             <p className="text-slate-300 leading-relaxed font-serif text-justify">
               All posterior chains, covariance matrices, likelihood implementations, and Docker environments used in this work are archived with immutable version identifiers. The repository includes exact data-release versions, preprocessing scripts, fixed-point solvers, analytic derivatives, and full MCMC configurations. Independent researchers may regenerate every figure, table, posterior distribution, and information-theoretic score reported in the manuscript directly from the public repository. Reproduction of the published results should yield statistically consistent posterior summaries within Monte-Carlo uncertainty.
             </p>
          </div>
        </section>

      </div>
    </div>
  );
}
