import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import {
  Menu,
  X,
  FileText,
  LayoutDashboard,
  BrainCircuit,
  Activity,
  Database,
  Sigma,
  CheckCircle,
  ShieldCheck,
  Telescope,
  LogOut,
  Map,
} from "lucide-react";
import { useState } from "react";
import { Article } from "./components/Article";
import CosmicDashboard from "./components/CosmicDashboard";
import ConclusionDashboard from "./components/ConclusionDashboard";

import Introduction from "./pages/Introduction";
import ComputableOntology from "./pages/ComputableOntology";
import InformationGeometry from "./pages/InformationGeometry";
import GeometricCondensation from "./pages/GeometricCondensation";
import UniversalDynamics from "./pages/UniversalDynamics";
import SelfReferentialFieldTheory from "./pages/SelfReferentialFieldTheory";
import VacuumStabilization from "./pages/VacuumStabilization";
import EmpiricalObservables from "./pages/EmpiricalObservables";
import ConclusionFutureOutlook from "./pages/ConclusionFutureOutlook";
import OverviewDashboardPage from "./pages/OverviewDashboardPage";
import ComputationalFramework from "./pages/ComputationalFramework";
import ReproducibilityPage from "./pages/Reproducibility";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages = [
    {
      name: "Overview Diagram",
      path: "/overview",
      icon: <Map className="w-4 h-4" />,
    },
    {
      name: "1. Introduction",
      path: "/1",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      name: "2. Computable Ontology",
      path: "/2",
      icon: <Database className="w-4 h-4" />,
    },
    {
      name: "3. Information Geometry",
      path: "/3",
      icon: <Activity className="w-4 h-4" />,
    },
    {
      name: "4. Geometric Condensation",
      path: "/4",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      name: "5. Universal Dynamics",
      path: "/5",
      icon: <BrainCircuit className="w-4 h-4" />,
    },
    {
      name: "6. Field Theory",
      path: "/6",
      icon: <Sigma className="w-4 h-4" />,
    },
    {
      name: "7. Vacuum Stabilization",
      path: "/7",
      icon: <ShieldCheck className="w-4 h-4" />,
    },
    {
      name: "8. Empirical Observables",
      path: "/8",
      icon: <Telescope className="w-4 h-4" />,
    },
    { name: "9. Conclusion", path: "/9", icon: <LogOut className="w-4 h-4" /> },
    { name: "10. Computational Framework", path: "/10", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Computational Reproducibility", path: "/reproducibility", icon: <Database className="w-4 h-4" /> },
  ];

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#02040A] text-slate-200 overflow-hidden font-sans">
        {/* Mobile toggle */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0B101A] border border-slate-700 rounded-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X /> : <Menu />}
        </button>

        {/* Sidebar */}
        <div
          className={`
          flex flex-col w-64 bg-[#0B101A] border-r border-slate-800 h-screen fixed lg:sticky top-0
          transition-transform duration-300 z-40 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <div className="p-4 flex-shrink-0 border-b border-slate-800">
            <h1 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase tracking-widest leading-tight">
              Self-Referential <br />
              Dynamics
            </h1>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-2">
              Posters
            </div>
            {pages.map((p) => (
              <NavLink
                key={p.path}
                to={p.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? "bg-indigo-600/20 text-indigo-300" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`
                }
              >
                {p.icon} <span>{p.name}</span>
              </NavLink>
            ))}

            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2 ml-2">
              Legacy Views
            </div>
            <NavLink
              to="/legacy-paper"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? "bg-indigo-600/20 text-indigo-300" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`
              }
            >
              <FileText className="w-4 h-4" /> Full Text Paper
            </NavLink>
            <NavLink
              to="/legacy-dashboard-1"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? "bg-cyan-600/20 text-cyan-300" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`
              }
            >
              <LayoutDashboard className="w-4 h-4" /> Observables Dashboard
            </NavLink>
            <NavLink
              to="/legacy-dashboard-2"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? "bg-amber-600/20 text-amber-300" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`
              }
            >
              <LayoutDashboard className="w-4 h-4" /> Conclusion Dashboard
            </NavLink>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<OverviewDashboardPage />} />
            <Route path="/1" element={<Introduction />} />
            <Route path="/2" element={<ComputableOntology />} />
            <Route path="/3" element={<InformationGeometry />} />
            <Route path="/4" element={<GeometricCondensation />} />
            <Route path="/5" element={<UniversalDynamics />} />
            <Route path="/6" element={<SelfReferentialFieldTheory />} />
            <Route path="/7" element={<VacuumStabilization />} />
            <Route path="/8" element={<EmpiricalObservables />} />
            <Route path="/9" element={<ConclusionFutureOutlook />} />
            <Route path="/10" element={<ComputationalFramework />} />
            <Route path="/reproducibility" element={<ReproducibilityPage />} />

            <Route path="/legacy-paper" element={<Article />} />
            <Route path="/legacy-dashboard-1" element={<CosmicDashboard />} />
            <Route
              path="/legacy-dashboard-2"
              element={<ConclusionDashboard />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
