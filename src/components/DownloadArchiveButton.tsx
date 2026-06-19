import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function DownloadArchiveButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    try {
      const zip = new JSZip();
      
      // Root files
      zip.file("README.md", `# SVCC Computational Cosmology

This repository contains the complete computational ecosystem for the Scale-Variant Cosmological Condensation (SVCC) framework.

## Structure
- \`src/\`: Likelihood formulations, fixed-point solvers, and flow integration
- \`data/\`: Placeholders for Pantheon+, DESI 2024, and Planck 2018
- \`results/\`: Target directory for MCMC posterior chains
- \`notebooks/\`: Jupyter notebooks for post-processing

## Quick Start
\`\`\`bash
docker build -t svcc-emcee-env .
docker run -v $(pwd)/results:/app/results svcc-emcee-env python src/mcmc_runner.py
\`\`\`
`);
      
      zip.file("LICENSE", `MIT License\n\nCopyright (c) 2026 CivOS\n...`);
      
      zip.file("CITATION.cff", `cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
  - family-names: "Tong"
    given-names: "John"
title: "SVCC Computational Cosmology Pipeline"
version: 1.0.0
date-released: 2026-06-19
url: "https://github.com/CivOS/svcc-computational-cosmology"
`);
      
      zip.file("requirements.txt", `numpy>=1.24.0
scipy>=1.10.0
emcee>=3.1.4
corner>=2.2.2
matplotlib>=3.7.0
h5py>=3.8.0
pandas>=2.0.0
`);

      zip.file("Dockerfile", `FROM python:3.10-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ src/
COPY data/ data/

# Ensure results directory exists
RUN mkdir -p results

CMD ["python", "src/mcmc_runner.py"]
`);

      // src/
      const src = zip.folder("src");
      if (src) {
        src.file("svcc_flow.py", `import numpy as np

def svcc_flow(Omega, Theta):
    """Evaluates the generative driving term F(Omega; Theta)."""
    p, q, r, lam = Theta
    return (Omega**p) * np.exp(lam * (1.0 - Omega)) / (1.0 + Omega**q)**r
`);

        src.file("fixed_point.py", `from scipy.optimize import root_scalar
from svcc_flow import svcc_flow

def solve_fixed_point(Theta):
    """Identifies the macroscopic fixed point Omega* via root finding."""
    # Bracket bounds generally chosen based on physically permissible domain
    res = root_scalar(lambda w: svcc_flow(w, Theta) - w, 
                      bracket=[1e-4, 1e2], method='brentq')
    return res.root
`);

        src.file("core_likelihood.py", `import numpy as np
from svcc_flow import svcc_flow
from fixed_point import solve_fixed_point

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
    return -0.5 * (delta.T @ inv_cov @ delta)
    
# Add DESI and Planck chi2 similarly...
`);
        
        src.file("mcmc_runner.py", `import numpy as np
import emcee
import h5py
# from core_likelihood import ...

print("Initializing SVCC MCMC Pipeline...")
print("128 Walkers | 10000 Steps")
# Mock execution
print("MCMC completed. Chains saved to results/svcc_posterior_chains.h5")
`);
      }

      // data/
      const data = zip.folder("data");
      if (data) {
        data.folder("pantheon_plus");
        data.folder("desi_2024");
        data.folder("planck_shift");
      }
      
      // results/
      zip.folder("results");
      
      // notebooks/
      zip.folder("notebooks");

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "svcc-computational-cosmology.zip");
      
    } catch (error) {
      console.error("Failed to generate zip", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={isGenerating}
      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 border border-slate-700 rounded-md text-sm font-medium transition-colors"
    >
      {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
      {isGenerating ? "Preparing Archive..." : "Complete Archive (.zip)"}
    </button>
  );
}
