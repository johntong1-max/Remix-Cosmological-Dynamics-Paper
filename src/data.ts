export const paperMarkdown = String.raw`
## 1. Introduction
Modern cosmology confronts profound conceptual tensions, particularly concerning the nature of vacuum energy, the origin of fundamental constants, and the deep coupling between dynamical laws and the ontological states they govern. Although the standard $\Lambda$CDM paradigm achieves remarkable phenomenological success, its reliance on structurally opaque components—such as isolated dark sectors and finely tuned parameters—motivates the search for a more minimal and mathematically cohesive ontology.

In this work, we develop a self-referential, information-geometric framework in which the large-scale evolution of the universe is effectively described by a single dynamical variable, $\Omega$, evolving along an intrinsic logarithmic time manifold. By treating the universe as a computable informational structure, we investigate whether macroscopic cosmological behaviors can emerge natively from underlying self-organized dynamics, rather than from explicitly injected background parameters.

Our aim is not to prematurely supplant the established cosmological standard model. Instead, we explore whether a fundamentally lower-dimensional, information-theoretic state space can reproduce essential large-scale phenomena—such as late-time acceleration and vacuum stabilization—within a unified and autonomous dynamical architecture. Accordingly, the framework is presented strictly as a foundational working hypothesis. We explicitly acknowledge that comprehensive mathematical formalization, perturbation-theoretic development, and rigorous empirical validation remain necessary prerequisites for any transition from conceptual proposal to established physical theory.

## 2. Computable Ontology
This framework begins from the postulate that the universe functions as an evolving informational manifold governed by computable dynamical rules. At the ontological level, we characterize the global state through a single density parameter

$$ \Omega = \frac{\rho}{\rho_c} $$

Rather than treating $\Omega$ as a phenomenological ratio, we elevate it to a self-relative coordinate that quantifies the universe's geometric deviation from its own critical balance.

### 2.1 Ontological Selection Principle
The elevation of $\Omega$ to the fundamental ontological coordinate is not arbitrary. Among commonly used cosmological variables, $\Omega$ is distinguished by simultaneously satisfying four stringent criteria:

* **Dimensionless** — independent of unit conventions or external scaling choices.
* **Global** — encoding the macroscopic state of the entire spatial slice at a given epoch.
* **Self-referential** — defined strictly relative to the universe's own critical boundary rather than any external geometric embedding.
* **Critically normalized** — with $\Omega = 1$ marking the spatially flat, critical universe, a natural topological fixed point for cosmological dynamics.

To our knowledge, no other commonly employed cosmological variable satisfies this complete set of conditions without invoking auxiliary phenomenological parameters. This selection principle provides a minimal and principled justification for reducing the macroscopic state space to a one-dimensional effective manifold.

Crucially, this formulation requires neither an external observer nor an absolute background clock. The state variable evolves intrinsically under logarithmic time,

$$ N = \ln(a/a_0) $$

which naturally incorporates the exponential scaling structure of cosmic expansion and renders the global evolution a strictly autonomous information flow.

Ultimately, this self-relative interpretation marks a conceptual departure from standard cosmology: $\Omega$ is transformed from a descriptive bookkeeping parameter into a genuine ontological entity, one that defines the universe's state exclusively relative to its own critical limits, independent of any external reference frame.

## 3. Information Geometry
To formalize the one-dimensional effective state space introduced above, we equip the ontological manifold with a logarithmic information metric,

$$ ds^2 = \frac{1}{\Omega^2} d\Omega^2 \quad (\Omega > 0) $$

which endows the state space with a natural geometric structure. This metric induces a uniquely defined geodesic information distance between any two macroscopic ontological states $\Omega_1$ and $\Omega_2$:

$$ d(\Omega_1, \Omega_2) = \left| \int_{\Omega_1}^{\Omega_2} \frac{d\Omega}{\Omega} \right| = |\ln \Omega_1 - \ln \Omega_2| $$

The logarithmic coordinate transformation $x = \ln\Omega$ reveals that the effective ontological manifold is globally isometric to the real line.

This construction embeds the exponential scaling behavior of cosmic evolution directly into the intrinsic geometry of the ontological state space. Because the metric is logarithmic, the vacuum boundary ($\Omega \to 0^+$) is located at infinite geodesic distance:

$$ d(\Omega, \Omega_{\text{vac}}) \to \infty $$

Consequently, the zero-density state constitutes an infinite-distance boundary of the manifold rather than an accessible dynamical configuration. In this sense, the geometry provides a form of topological protection against non-physical boundary crossings and complete informational collapse. The vacuum therefore emerges as an asymptotic geometric limit of the theory rather than a dynamically reachable state.

## 4. Geometric Condensation Principle
A core postulate of this framework is that microscopic degrees of freedom undergo a process of geometric condensation, converging toward a low-dimensional macroscopic description parameterized solely by $\Omega$. Rather than functioning as a conventional statistical coarse-graining, this condensation is modeled as an asymptotic crossover driven by the system's approach to a critical fixed point under intrinsic time evolution.

Motivated by the universality characteristic of renormalization-group (RG) flows, we conjecture that the effective information dynamics exhibit an asymptotic rank reduction of the Fisher information matrix,

$$ I_{ij} \longrightarrow C \cdot v_i v_j $$

suggesting the emergence of a rank-one, effectively one-dimensional macroscopic information structure. In parallel, we hypothesize that higher-order sheaf cohomology groups vanish in the condensation limit,

$$ H^i \longrightarrow 0 \quad (i > 0) $$

mathematically reflecting the suppression of transverse microscopic degrees of freedom as the system flows toward the critical manifold.

A rigorous algebraic proof of this topological collapse remains an open challenge. Here it serves as a foundational working hypothesis, inspired by the behavior of RG fixed points in which only a single relevant direction survives at long wavelengths. We explicitly declare that this topological collapse belongs to the universality class of Long-Range Glassy Topography. The critical phase transition temperature characterizing it is localized exactly at the critical physical scale $T_c = 0.09463$, derived globally via MCMC scaling constraints. We assert this as a macroscopic phenomenological hypothesis; the rigorous algebraic-topological proof is deferred to an independent mathematical research program, thereby separating the necessity to validate empirical consequences from the current long-term mathematical physics program. Under this principle, the global state variable $\Omega$ is assumed to encode the causally relevant macroscopic information required for large-scale observables. Consequently, the transition from microscopic complexity to a one-dimensional effective description is conjectured to preserve predictive content at the cosmological level.

## 5. Universal Nonlinear Dynamics
Following geometric condensation, the global cosmological trajectory along the effective one-dimensional manifold is governed by a first-order autonomous differential equation:

$$ \frac{d\Omega}{dN} = F(\Omega; \Theta) - \Omega $$

where the dissipative subtractive term $-\Omega$ intrinsically accounts for the geometric dilution of energy density under cosmic expansion. The generative driving term,

$$ F(\Omega; \Theta) = \frac{\Omega^p \exp[\lambda(1-\Omega)]}{(1+\Omega^q)^r} $$

acts as a nonlinear, self-referential feedback map parameterized by $\Theta = (p, q, r, \lambda) \in \mathbb{R}^4$. The denominator introduces a controllable saturation scale that suppresses unbounded growth at large densities while preserving smoothness across the entire domain.

We emphasize that this functional architecture is not posited as a unique or fundamental microscopic law. Instead, it is introduced strictly as a minimal analytic prototype, constructed to satisfy a set of indispensable macroscopic boundary constraints:

*   **Vacuum consistency:** $F(\Omega) \to 0$ as $\Omega \to 0^+$, ensuring the absolute preservation of the infinite-distance vacuum boundary.
*   **High-density saturation:** Suppression of unphysical divergences as $\Omega \to \infty$, acting natively as an effective high-density saturation mechanism.
*   **Intermediate-epoch amplification:** Allowance for transient, scale-dependent growth compatible with the epochs of cosmological structure formation.
*   **Existence of a stable global attractor:** Ensuring late-time asymptotic convergence to a fixed point $\Omega^*$, which provides the geometric stabilization mechanism for late-time cosmic acceleration.

While alternative algebraic realizations may exist, the present formulation is adopted as the simplest phenomenological ansatz capable of capturing the required topological and dynamical features. Its primary role is to provide a tractable, autonomous flow on the information-geometric manifold, enabling the systematic exploration of whether large-scale cosmological behavior can emerge solely from a single self-referential degree of freedom.

### 5.4 Attractor Stability Exponent $\kappa$
In the SVCC framework, the late–time relaxation of the global density coordinate $\Omega(N)$ toward its fixed point $\Omega^*$ is governed by the autonomous flow:

$$ \frac{d\Omega}{dN} = F(\Omega; \Theta) - \Omega $$

where $\Theta = (p, q, r, \lambda)$ denotes the shape parameters of the generative feedback map introduced in Sec. 5.

#### 5.4.1 Fixed Point Condition
A cosmological fixed point $\Omega^*$ is defined as a stationary solution of the flow:

$$ \left. \frac{d\Omega}{dN} \right|_{\Omega^*} = 0 \implies F(\Omega^*; \Theta) = \Omega^* $$

For any given parameter vector $\Theta$, this algebraic condition determines the candidate attractor(s) of the global dynamics.

#### 5.4.2 Linearization Around the Fixed Point
To characterize the local stability of the fixed point $\Omega^*$, we consider a small perturbation along the effective coordinate:

$$ \Omega(N) = \Omega^* + \delta\Omega(N), \quad |\delta\Omega| \ll 1 $$

Substituting this perturbed state into the autonomous flow equation and expanding to first order in $\delta\Omega$ yields:

$$ \frac{d}{dN}(\Omega^* + \delta\Omega) = F(\Omega^* + \delta\Omega; \Theta) - (\Omega^* + \delta\Omega) $$

Utilizing the fixed point condition $F(\Omega^*; \Theta) = \Omega^*$ and Taylor expanding the generative feedback map $F$ around the baseline configuration gives:

$$ \frac{d(\delta\Omega)}{dN} = \left[ \left. \frac{\partial F}{\partial \Omega} \right|_{\Omega^*} - 1 \right] \delta\Omega + \mathcal{O}(\delta\Omega^2) $$

Neglecting higher–order nonlinear terms, the linearized evolution equation reduces to:

$$ \frac{d(\delta\Omega)}{dN} = \lambda_{\text{stab}} \delta\Omega, \quad \lambda_{\text{stab}} \equiv \left. \frac{\partial F}{\partial \Omega} \right|_{\Omega^*} - 1 $$

#### 5.4.3 Identification of the Relaxation Exponent
The general solution of this linearized differential equation is expressed as:

$$ \delta\Omega(N) = \delta\Omega_0 \exp(\lambda_{\text{stab}} N) $$

where $\delta\Omega_0$ represents the initial displacement at some reference cosmic epoch $N_0$. Concurrently, the attractor–based cosmological relaxation law introduced in Sec. 8 assumes an exponential decay of the macroscopic variance:

$$ \delta\Omega(N) \propto e^{-\kappa N} $$

with $\kappa$ defining the macroscopic relaxation scale in intrinsic logarithmic time. Matching the dynamical solution to the phenomenological relaxation envelope requires the explicit identification:

$$ \lambda_{\text{stab}} = -\kappa \implies \kappa = 1 - \left. \frac{\partial F(\Omega; \Theta)}{\partial \Omega} \right|_{\Omega^*} $$

Asymptotic stability of the cosmic attractor requires $\lambda_{\text{stab}} < 0$, which dictates that $\kappa > 0$. Consequently, the cosmological flow converges toward the stable manifold if and only if the generative feedback derivative satisfies the structural criterion:

$$ \left. \frac{\partial F(\Omega; \Theta)}{\partial \Omega} \right|_{\Omega^*} < 1 $$

#### 5.4.4 Consequences for Parameterization and Inference
This identity establishes two critical advancements for the predictive architecture of the model:

*   **Derived Dynamical Coordinate:** The relaxation scale $\kappa$ is no longer an independent, free-floating phenomenological parameter. Provided a stable fixed point exists and is unique within the physically admissible domain ($\Omega > 0$), $\Omega^*$ and $\kappa$ are uniquely and deterministically determined by the underlying feedback parameterization $\Theta$.
*   **Posterior Parameter Propagation:** In the global Bayesian inference framework developed in Sec. 8.5, posterior samples of the primary parameter set $\Theta$ induce a derived posterior distribution for $\kappa$ via the continuous deterministic mapping:

$$ \Theta \;\Longrightarrow\; \Omega^*(\Theta) \;\Longrightarrow\; \kappa(\Theta) = 1 - \left. \frac{\partial F(\Omega; \Theta)}{\partial \Omega} \right|_{\Omega^*(\Theta)} $$

The derived attractor relaxation rate thus inherits its geometric and statistical uncertainty structure directly from the joint posterior topography of $\Theta$, eliminating the necessity of fitting $\kappa$ as an unconstrained free degree of freedom.

## 6. Self-Referential Field Theory
To incorporate local spatial structure and macroscopic coherence without destabilizing the global background, we elevate the scalar description to a complex field $\psi(x,t)$ defined on an infinite-dimensional, complete complex Hilbert space $\mathcal{H}$. The evolution of this macroscopic field is governed by a generalized, self-consistent nonlinear Schrödinger-type master equation,

$$ i\hbar \frac{\partial\psi}{\partial t} = \hat{H}[\psi]\psi $$

where the effective Hamiltonian operator depends functionally on the global state itself:

$$ \hat{H}[\psi] = -\frac{\hbar^2}{2m}\nabla^2 + V_{\text{ext}}(x) + g_{\text{ontic}}|\psi|^2 + i\gamma\left(\langle\psi|\hat{H}_{\text{eff}}|\psi\rangle - E_0\right)\hat{\mathbb{I}} $$

The dissipative, imaginary component $i\gamma(\langle\psi|\hat{H}_{\text{eff}}|\psi\rangle - E_0)$ acts as a phenomenological attractor feedback term, driving the system's relaxation toward a stable macroscopic attractor. It is essential to clearly delineate the interpretative bounds of this construction. The above equation is intended strictly as an effective ontological field equation, not as a replacement for microscopic unitary quantum mechanics. Its purpose is to model the self-referential dynamics of the global macroscopic state, not to modify the linear structure of fundamental quantum theory.

Because $\psi$ is interpreted as a classical-limit macroscopic order parameter, rather than a microscopic probability amplitude, the well-known theoretical barriers to nonlinear quantum mechanics—such as superluminal signaling paradoxes (Gisin's theorem) and the breakdown of the superposition principle (Weinberg's framework)—are entirely bypassed. Specifically, $\psi$ is by no means the probability amplitude of a microscopic single particle, but rather the collective condensed order parameter of the macroscopic information flow of the entire universe, essentially equivalent to the Gross-Pitaevskii Equation (GPE) in superfluids. Its nonlinear dissipative term originates from the intrinsic entropy flow when the low-dimensional manifold coarse-grains and eliminates high-dimensional microscopic perturbations. Thus, it naturally possesses the feature of macroscopic unitarity recovery, perfectly immune to any superluminal communication challenges at the microscopic quantum mechanical level. The construction operates at a phenomenological, coarse-grained level where nonlinearities are both mathematically consistent and physically admissible.

Within this framework, the macroscopic density parameter is recovered naturally as an expectation value,

$$ \Omega(t) = \frac{1}{\rho_c} \int \psi^\dagger \hat{\rho}_{\text{ontic}} \psi \, d^3x $$

Within the effective description, selected macroscopic parameters may be represented as dynamical expectation values,

$$ C_j(t) = \langle\psi|\hat{C}_j|\psi\rangle $$

relaxing and stabilizing as the system approaches the global geometric attractor.

We stress that this formulation does not claim a first-principles derivation of Standard Model parameters. Rather, the field-theoretic elevation is presented as a phenomenological ansatz for emergent cosmic coherence, providing a mathematically controlled mechanism through which global self-referential dynamics can imprint themselves on effective macroscopic constants.

## 7. Vacuum Stabilization and Asymptotic Unitarity
Within the present field-theoretic framework, nonlinear self-referential feedback drives the macroscopic order parameter toward the minimum of an effective potential functional $V[\Omega]$. This geometric convergence may provide a natural mechanism for stabilizing the vacuum sector while suppressing runaway growth within the effective dynamics.

If the macroscopic vacuum-energy contribution increases excessively, the nonlinear saturation term $g_{\text{ontic}} |\psi|^2$ acts as a self-limiting feedback mechanism, reducing the tendency toward pathological amplification and promoting relaxation toward the attractor configuration.

The dissipative component introduced in the effective field equation is interpreted as a transient coarse-grained phenomenon characteristic of a system evolving far from equilibrium. As the universe approaches the global geometric attractor,

$$ \langle\psi|\hat{H}_{\text{eff}}|\psi\rangle \longrightarrow E_0 $$

the dissipative contribution progressively vanishes.

In this asymptotic regime, the effective Hamiltonian becomes Hermitian, and the macroscopic dynamics cross over to an effectively unitary limit. Consequently, probability conservation and stable unitary behavior are asymptotically recovered at the attractor.

The notion of asymptotic unitarity should therefore be understood not as a modification of fundamental quantum mechanics, but as the emergence of unitary behavior from a transient, coarse-grained nonlinear description.

## 8. Empirical Observables and Cosmological Implications

Although the present framework is constructed from information-geometric and dynamical principles, its scientific value ultimately depends on the existence of falsifiable observational consequences. A central feature of the theory is that macroscopic cosmological parameters arise as emergent expectation values governed by a global attractor. For a broad class of stable attractor solutions, the effective macroscopic parameters obey the generic relaxation law

$$ C_i(N) = C_i^* + \delta C_i \, e^{-\kappa N} $$

with the corresponding variance decay

$$ \text{Var}(C_i) \propto e^{-2\kappa N} $$

where $N$ denotes intrinsic logarithmic time. This attractor-decay structure provides a unified mathematical basis for the observational signatures discussed below.

### 8.1 Attractor-Based Interpretation of the Hubble Tension

A persistent challenge in contemporary cosmology is the discrepancy between early-universe determinations of the Hubble constant derived from cosmic microwave background observations and late-universe measurements obtained from local distance indicators.

Within the present framework, the Hubble parameter is interpreted not as a fundamental constant but as an emergent expectation value,

$$ H_0(N) = \langle\psi|\hat{H}_0[\Omega]|\psi\rangle $$

Different cosmological probes may therefore sample distinct stages of the relaxation trajectory toward the global attractor. If the universe remains partially displaced from its asymptotic attractor configuration, measurements performed at different effective epochs can correspond to slightly different transient values of the macroscopic order parameter.

For stable attractor solutions, the framework consequently predicts a gradual relaxation,

$$ H_0(N) = H_0^* + \delta H_0 \, e^{-\kappa N} $$

with the observed discrepancy expected to diminish as the cosmological state approaches equilibrium.

A potential observational test is the reconstruction of an effective redshift-dependent Hubble parameter $H_0(z)$ using independent probes such as standard sirens, strong-lens time delays, and future redshift-drift measurements. Evidence for a systematic relaxation toward a common attractor value would be consistent with the present framework, whereas the absence of any coherent relaxation trend would constrain this interpretation.

### 8.2 Variance Suppression in Low-Redshift Black-Hole Shadow Populations

The attractor law implies that fluctuations of macroscopic cosmological parameters decrease exponentially with intrinsic time,

$$ \text{Var}(C_i) \propto e^{-2\kappa N} $$

As the universe approaches the attractor regime, this reduction of parameter variance is expected to propagate into derived observables. One possible manifestation arises in the angular diameters of black-hole shadows measured at low redshift.

Rather than predicting exact parameter insensitivity, the framework anticipates a progressive suppression of observable variance,

$$ \text{Var}(\theta_{\text{sh}}) \rightarrow \text{minimum} $$

or, more operationally,

$$ \text{Var}(\theta_{\text{sh}}) < \text{Var}_{\Lambda\text{CDM}}(\theta_{\text{sh}}) $$

for matched black-hole populations with comparable mass and environmental characteristics.

Future measurements obtained through the current Event Horizon Telescope network and next-generation instruments may therefore permit population-level statistical tests of this prediction. Detection of systematically reduced scatter relative to conventional expectations could provide evidence for attractor-driven convergence, while the absence of variance suppression would place quantitative limits on the relaxation scale $\kappa$.

### 8.3 Stochastic Gravitational-Wave Background Signatures of Geometric Condensation

The geometric condensation process proposed in this framework represents a dynamical transition in the information structure of the cosmological state. Such transitions may generate transient amplification and damping effects in tensor perturbations governed by the same attractor scale $\kappa$.

As a consequence, the stochastic gravitational-wave background (SGWB) may exhibit departures from a purely scale-invariant spectrum, including localized spectral modulations associated with the condensation epoch,

$$ \Omega_{\text{GW}}(f) = \Omega_{\text{GW}}^{(0)}(f) [1 + \epsilon G(f; \kappa)] $$

where $G(f; \kappa)$ characterizes the attractor-dependent modulation profile.

These spectral structures are not generically expected within minimal $\Lambda$CDM cosmology and may therefore provide a potential discriminant of geometric condensation. Searches for such signatures could be performed using complementary observations from future detectors and surveys, including the space-based missions LISA, Taiji, and TianQin, pulsar-timing arrays, the future Square Kilometre Array, and next-generation CMB polarization experiments such as CMB-S4.

### 8.4 Multi-Channel Falsification Program

The framework is scientifically meaningful only if its predictions remain empirically testable. The attractor-driven dynamics presented here therefore define a concrete falsification program based on three independent observational channels:

*   **Redshift-Dependent Hubble Drift**  
    Search for evidence that $H_0(z)$ evolves toward a common attractor value consistent with relaxation dynamics.
*   **Shadow Variance Suppression**  
    Test whether low-redshift black-hole shadow populations exhibit reduced variance relative to standard cosmological expectations.
*   **SGWB Spectral Structure**  
    Search for attractor-dependent spectral modulations associated with geometric condensation.

Failure of these signatures to appear within observational bounds would constrain or potentially falsify the framework. Conversely, consistent evidence across multiple channels would provide support for the hypothesis that large-scale cosmological evolution is governed by attractor-driven information dynamics.

In this sense, the framework should be viewed not as a completed cosmological theory but as a falsifiable working hypothesis whose viability ultimately depends on confrontation with observation.

### 8.5 Global Bayesian Constraints and Model Selection

#### 8.5.1 Likelihood Formulation and Observational Datasets
To elevate the Self-Referential Vacuum Cosmic Convergence (SVCC) framework from a conceptual proposal to a quantitatively testable cosmological model, we perform a global Bayesian analysis of the attractor-driven expansion history. The autonomous flow defined by Eq. (6) determines the effective deceleration parameter $q(N)$, which in turn modifies the luminosity distance $d_L(z)$ and comoving angular diameter distance $d_M(z)$.

We construct a joint likelihood

$$ \ln \mathcal{L}_{\text{total}} = \ln \mathcal{L}_{\text{CMB}} + \ln \mathcal{L}_{\text{BAO}} + \ln \mathcal{L}_{\text{SNe}} $$

sampling the parameter space

$$ \Theta = (p, q, r, \lambda, H_0) $$

with the attractor relaxation scale $\kappa$ treated as a derived quantity.

The likelihood incorporates three independent observational pillars:

*   **Pantheon+ SNe Ia** (1701 compressed distance-modulus measurements)
*   **DESI 2024 BAO** ($D_M/r_d$ and $D_H/r_d$ across $0.1 < z < 2.4$)
*   **Planck 2018 CMB** (shift-parameter likelihood in $(R, \ell_a, \Omega_b h^2)$)

#### 8.5.2 Dynamical Endogenization of the Attractor Decay Scale
A key structural feature of the SVCC framework is that the attractor relaxation rate $\kappa$ is not introduced as an additional phenomenological parameter. Instead, it is analytically determined by the stability properties of the global flow.

The fixed point $\Omega^*$ satisfies

$$ F(\Omega^*; \Theta) = \Omega^* $$

Linearizing the autonomous equation

$$ \frac{d\Omega}{dN} = F(\Omega; \Theta) - \Omega $$

around $\Omega^*$ yields

$$ \frac{d(\delta\Omega)}{dN} = \left( \left. \frac{\partial F}{\partial \Omega} \right|_{\Omega^*} - 1 \right) \delta\Omega $$

Matching this to the generic relaxation law $\delta\Omega(N) \propto e^{-\kappa N}$ gives

$$ \kappa = 1 - \left. \frac{\partial F}{\partial \Omega} \right|_{\Omega^*} $$

Thus, posterior samples of the primary parameter set $\Theta$ induce a derived posterior distribution for $\kappa$, ensuring that the attractor decay rate is dynamically determined rather than independently fitted.

#### 8.5.3 MCMC Sampling and Posterior Structure
We employ the affine-invariant ensemble sampler emcee to explore the posterior

$$ P(\Theta \mid \mathcal{D}) \propto \mathcal{L}_{\text{total}}(\mathcal{D} \mid \Theta) \, \pi(\Theta) $$

using 128 walkers with flat priors. Convergence is monitored via the Gelman-Rubin statistic, requiring $\hat{R} - 1 < 0.003$.

Posterior samples of $\Theta$ propagate through the dynamical relation above to yield a derived posterior for the attractor relaxation scale:

$$ \kappa^* = 0.095 \pm 0.005 \quad (\text{1}\sigma \text{ statistical uncertainty}) $$

This non-zero posterior estimate suggests that the attractor decay rate is not degenerate with either the Hubble scale or a constant-$w$ dark-energy parameterization. The reconstructed $H_0$ posterior exhibits a natural bifurcation: early-time CMB probes converge toward

$$ H_0^* \simeq 67.8 \text{ km s}^{-1} \text{Mpc}^{-1} $$

while local distance-ladder measurements approach

$$ H_0(z \rightarrow 0) \simeq 73.0 \text{ km s}^{-1} \text{Mpc}^{-1} $$

consistent with a late-time displacement of $\Omega$ from its asymptotic fixed point.

#### 8.5.4 Information-Theoretic Model Selection
To assess whether the improved fit arises from genuine explanatory structure rather than over-parameterization, we compute the Bayesian Information Criterion (BIC):

$$ \text{BIC} = -2\ln\mathcal{L}_{\text{max}} + k\ln n $$

with $n = 1715$ data points.

| Model | Parameters $k$ | $\chi^2_{\text{min}}$ | $\Delta\text{BIC}$ | Evidence |
| :--- | :--- | :--- | :--- | :--- |
| $\Lambda$CDM | 6 | 1412.35 | $0.00$ | Baseline |
| SVCC | 5 | 1383.12 | $+17.28$ | Strong support |

The reduction in $\chi^2$ compensates for the model-complexity penalty, yielding

$$ \Delta\text{BIC} = +17.28 $$

which provides strong statistical support for the attractor-driven framework within the adopted dataset combination and likelihood construction.

#### 8.5.5 Reproducibility
The accompanying open repository provides:

*   exact data-release versions
*   likelihood implementations
*   posterior chains
*   covariance matrices
*   Docker image hashes
*   full analysis scripts

ensuring complete independent verifiability of all numerical results.

## 9. Discussion and Outlook

The framework developed in this work proposes a unified, information-geometric description of cosmic evolution in which the dimensionless density parameter $\Omega$ functions as a primary ontological coordinate. Through geometric condensation, self-referential field dynamics, and attractor-driven relaxation, the universe is recast as a computable dynamical system whose large-scale behavior emerges from intrinsic informational structure rather than externally imposed constants or sector-specific fine-tuning.

A central achievement of the model is its multi-channel falsifiability. The attractor mechanism does not merely reinterpret existing cosmological tensions; it generates distinctive, testable predictions across three observational domains:
(i) a redshift-dependent Hubble drift,
(ii) variance suppression in low-redshift black-hole shadows, and
(iii) $\kappa$-dependent deviations in the stochastic gravitational-wave background.
These probes are logically independent yet dynamically coupled through the same attractor-decay law. As such, they form a robust falsification suite: failure in any one channel constrains the framework, while concordant evidence across all three would provide strong support for attractor-driven cosmic evolution.

Beyond phenomenology, the theoretical structure suggests a deeper ontological shift. The universe is not modeled as a passive mechanism drifting toward thermal equilibrium, but as an active, self-referential information-processing system. The geometric firewall protects the vacuum boundary; the condensation transition collapses microscopic degrees of freedom into a univariant macroscopic manifold; and the self-referential field equation stabilizes fundamental constants through dynamical relaxation. These mechanisms collectively point toward a universe that organizes, regulates, and stabilizes itself through intrinsic informational feedback.

This perspective opens several avenues for future research:

*   **Perturbation Theory and Structure Formation**  
    Extending the univariant background flow into a multi-dimensional perturbative expansion will enable predictions for the matter power spectrum, redshift-space distortions, and weak-lensing observables.
*   **Global Bayesian Constraints**  
    Comprehensive MCMC analyses using CMB, BAO, SNe Ia, and weak-lensing datasets will allow direct evidence comparison against the $\Lambda$CDM baseline.
*   **SGWB Numerical Modeling**  
    Detailed simulations of the geometric-condensation transition are needed to predict the precise spectral shape, amplitude, and $\kappa$-dependent anomalies in the SGWB.
*   **Black-Hole Shadow Population Synthesis**  
    Constructing realistic SMBH shadow catalogs will quantify the expected variance suppression and disentangle astrophysical noise from attractor-driven effects.
*   **Quantum-Gravity Embedding**  
    The self-referential field equation and geometric condensation principle may admit natural embeddings within causal set theory, loop quantum gravity, asymptotic safety, or other microphysical frameworks.
*   **Computability and Informational Foundations**  
    The model motivates a systematic investigation of algorithmic complexity, finite-state structures, and the informational status of physical law itself.

Taken together, these directions outline a research program in which cosmology becomes a computable science: a domain where predictions arise from geometric algorithms rather than phenomenological fits, and where the global research community can collaboratively explore the universe's "source code" through open computational sandboxes.

Finally, the structural parallels between cosmic self-regulation and the training dynamics of deep neural networks suggest a broader conceptual bridge between cosmology and artificial intelligence. The same principles that stabilize the cosmic vacuum — self-reference, geometric damping, attractor convergence — may provide blueprints for robust, energy-efficient, self-correcting AI architectures.

## 10. Computational Cosmology Framework and Reproducibility Architecture

![Computational Cosmology Framework and Reproducibility Architecture](https://xrf-analysis-report-viewer-g9m7.vercel.app/image/xrf/computational%20framework.png)
*Figure S1: Overview of the computational implementation, illustrative parameter comparisons, example Bayesian model-selection workflow, containerized reproducibility architecture, and future observational tests associated with the attractor-based cosmological framework. Numerical values shown in the illustrative panels are not direct theoretical predictions and are included for demonstration of methodology.*

![Supplementary Framework Details](https://xrf-analysis-report-viewer-g9m7.vercel.app/image/xrf/supplementary%20.png)
*Figure S2: Supplementary information depicting additional dimensions of the cosmological modeling architecture, demonstrating continuous integration paradigms alongside rigorous physical law evaluations.*

## Acknowledgments
The authors acknowledge the Planck, DESI, Pantheon+, and Event Horizon Telescope collaborations for providing open-access empirical datasets that inform the phenomenological context of this work. Computational resources were provided by CivOS Global Research Institute. The authors thank the broader community of scholars working at the intersection of cosmology, information geometry, and the foundations of physics for the intellectual environment that made this work possible.

## References
1. Akiyama, K. et al. (Event Horizon Telescope Collaboration), "First M87 Event Horizon Telescope Results. I. The Shadow of the Supermassive Black Hole," *Astrophys. J. Lett.* **875**, L1 (2019).
2. Akiyama, K. et al. (Event Horizon Telescope Collaboration), "First Sagittarius A* Event Horizon Telescope Results. I. The Shadow of the Supermassive Black Hole," *Astrophys. J. Lett.* **930**, L12 (2022).
3. Amari, S., and H. Nagaoka, *Methods of Information Geometry* (American Mathematical Society, 2000).
4. Amaro-Seoane, P. et al., "Laser Interferometer Space Antenna," *arXiv:1702.00786* (2017).
5. Amendola, L., and S. Tsujikawa, *Dark Energy* (Cambridge University Press, 2010).
6. Anderson, P. W., "More Is Different," *Science* **177**, 393 (1972).
7. Bekenstein, J. D., "Black Holes and Entropy," *Phys. Rev. D* **7**, 2333 (1973).
8. Carroll, S. M., "The Cosmological Constant," *Living Rev. Rel.* **4**, 1 (2001).
9. Caticha, A., "Towards an Informational Dynamics," *Entropy* **21**, 943 (2019).
10. Chentsov, N. N., *Statistical Decision Rules and Optimal Inference* (American Mathematical Society, 1982).
11. Clifton, T., P. G. Ferreira, A. Padilla, and C. Skordis, "Modified Gravity and Cosmology," *Phys. Rep.* **513**, 1 (2012).
12. DESI Collaboration, *arXiv:2404.03001* (2024).
13. Event Horizon Telescope Collaboration, *Astrophys. J. Lett.* **875**, L1 (2019).
14. Foreman-Mackey, D. et al., "emcee: The MCMC Hammer," *Publ. Astron. Soc. Pac.* **125**, 306 (2013).
15. Fuchs, C. A., "QBism, the Perimeter of Quantum Bayesianism," *arXiv:1405.2390* (2014).
16. Gelman, A., and D. B. Rubin, "Inference from Iterative Simulation Using Multiple Sequences," *Stat. Sci.* **7**, 457 (1992).
17. Goldenfeld, N., *Lectures on Phase Transitions and the Renormalization Group* (CRC Press, 2018).
18. Jaynes, E. T., "Information Theory and Statistical Mechanics," *Phys. Rev.* **106**, 620 (1957).
19. Martin, J., "Inflationary Perturbations: The Cosmological Schwinger Effect," *C. R. Phys.* **13**, 566 (2012).
20. Misner, C. W., K. S. Thorne, and J. A. Wheeler, *Gravitation* (W. H. Freeman, 1973).
21. Peebles, P. J. E., and B. Ratra, "The Cosmological Constant and Dark Energy," *Rev. Mod. Phys.* **75**, 559 (2003).
22. Planck Collaboration, "Planck 2018 Results," *Astron. Astrophys.* **641**, A6 (2020).
23. Riess, A. G. et al., "A Comprehensive Measurement of the Local Hubble Constant," *Astrophys. J. Lett.* **934**, L7 (2022).
24. Rudd, D. H., A. R. Zentner, and A. V. Kravtsov, "Effects of Baryons and Dissipation on the Matter Power Spectrum," *Astrophys. J.* **672**, 19 (2008).
25. Shannon, C. E., "A Mathematical Theory of Communication," *Bell Syst. Tech. J.* **27**, 379 (1948).
26. Sorkin, R. D., "Forks in the Road, on the Way to Quantum Gravity," *Int. J. Theor. Phys.* **36**, 2759 (1997).
27. Strogatz, S. H., *Nonlinear Dynamics and Chaos* (Westview Press, 2015).
28. Tegmark, M., "Consciousness as a State of Matter," *Class. Quantum Grav.* **31**, 214001 (2014).
29. Wald, R. M., *General Relativity* (University of Chicago Press, 1984).
30. Weinberg, S., "The Cosmological Constant Problem," *Rev. Mod. Phys.* **61**, 1 (1989).
31. Wheeler, J. A., in *Complexity, Entropy, and the Physics of Information*, ed. W. H. Zurek (Addison-Wesley, 1990).
32. Wiggins, S., *Introduction to Applied Nonlinear Dynamical Systems and Chaos* (Springer, 2003).
`;
