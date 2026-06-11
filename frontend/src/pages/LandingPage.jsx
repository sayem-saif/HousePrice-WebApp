import {
  ArrowRight,
  BarChartBig,
  Building2,
  Calculator,
  ChevronRight,
  Cpu,
  Database,
  Landmark,
  Lock,
  TrendingUp,
} from "lucide-react";

export default function LandingPage({ onStart }) {
  return (
    <div>
      <section className="min-h-[900px] flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-4xl w-full text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-4 px-3 py-1 border border-white/10 bg-white/5 mb-8">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
              <span className="w-1.5 h-1.5 bg-[#EAB308] animate-pulse" />
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#EAB308]">Market Terminal Active</span>
            </div>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">Last Sync: 02m 14s ago</span>
          </div>

          <h1 className="font-header text-6xl md:text-[5.5rem] font-bold tracking-tight mb-10 leading-[0.9]">
            INSTITUTIONAL <br /> PROPERTY <span className="text-[#EAB308]">VALUATION</span>
          </h1>

          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Leverage proprietary neural networks and multi-source data aggregation for 99.4% accurate property yield forecasting.
          </p>
        </div>

        <div className="max-w-5xl w-full bg-[#0a0f1d] border border-white/10 rounded-none shadow-[0_0_100px_rgba(0,0,0,0.5)] relative z-10">
          <div className="w-full h-[2px] bg-white/5 flex">
            <div className="h-full bg-[#EAB308]" style={{ width: "25%" }} />
            <div className="h-full bg-white/5" style={{ width: "75%" }} />
          </div>

          <div className="p-8 md:p-16">
            <div className="flex justify-between items-center mb-12">
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-widest text-[#EAB308]">Module 01: Core Specifications</p>
                <h2 className="text-2xl font-header font-bold">Property Physical Configuration</h2>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Est. Accuracy</p>
                <p className="text-xl font-mono text-[#EAB308]">91.43%</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40">Residential Units (Bedrooms)</label>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-[#EAB308]">
                      <span className="w-1 h-1 bg-[#EAB308]" />
                      <span className="tracking-widest uppercase">Selected: 03</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {["01", "02", "03", "04", "05+"].map((n) => (
                      <button key={n} className={`flex-1 py-5 border transition-all font-mono text-xs ${n === "03" ? "border-[#EAB308] bg-[#EAB308]/5 text-[#EAB308]" : "border-white/5 hover:border-white/20 hover:bg-white/5"}`}>
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Total Bathrooms</label>
                  <input type="range" className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-[#EAB308]" min="1" max="6" step="0.5" />
                  <div className="flex justify-between mt-2 text-[10px] font-mono text-white/20">
                    <span>1.0</span>
                    <span>2.5</span>
                    <span>4.0</span>
                    <span>6.0+</span>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">Net Internal Area (NIA)</label>
                  <div className="relative group">
                    <input type="text" placeholder="MEASUREMENT (SQ FT)" className="w-full bg-white/[0.02] border border-white/10 px-6 py-5 text-2xl font-light focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308]/20 transition-all placeholder:text-white/30" />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white/30">FT²</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">Total Site Area (Gross)</label>
                  <div className="relative group">
                    <input type="text" placeholder="MEASUREMENT (SQ FT)" className="w-full bg-white/[0.02] border border-white/10 px-6 py-5 text-2xl font-light focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308]/20 transition-all placeholder:text-white/30" />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white/30">FT²</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex justify-between items-center">
              <button className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Previous Parameters
              </button>
              <button
                onClick={onStart}
                className="bg-[#EAB308] text-black px-12 py-5 text-sm font-header font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors"
              >
                Initialize AI Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group">
              <div className="w-12 h-12 border border-[#EAB308]/20 flex items-center justify-center mb-10 group-hover:border-[#EAB308] transition-colors">
                <Database className="w-6 h-6 text-[#EAB308]" />
              </div>
              <h3 className="text-2xl font-header font-bold mb-6 uppercase tracking-tight">Market Intelligence</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Aggregated data from over 450 municipal sources providing real-time volatility indices and liquidity scores across major metropolitan hubs.
              </p>
              <ul className="space-y-3">
                {["12M+ Data Points", "Zoning Audit Logs"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-mono text-white/60 uppercase">
                    <span className="w-1 h-1 bg-[#EAB308]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group">
              <div className="w-12 h-12 border border-[#EAB308]/20 flex items-center justify-center mb-10 group-hover:border-[#EAB308] transition-colors">
                <Cpu className="w-6 h-6 text-[#EAB308]" />
              </div>
              <h3 className="text-2xl font-header font-bold mb-6 uppercase tracking-tight">Predictive Neural Engine</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Proprietary architecture trained on 20+ years of transactional history to forecast 24-month value appreciation with 5% margin of error.
              </p>
              <ul className="space-y-3">
                {["Deep Learning Core", "Macro Trend Sync"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-mono text-white/60 uppercase">
                    <span className="w-1 h-1 bg-[#EAB308]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 hover:bg-white/[0.02] transition-colors group">
              <div className="w-12 h-12 border border-[#EAB308]/20 flex items-center justify-center mb-10 group-hover:border-[#EAB308] transition-colors">
                <Lock className="w-6 h-6 text-[#EAB308]" />
              </div>
              <h3 className="text-2xl font-header font-bold mb-6 uppercase tracking-tight">Risk Mitigation</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Automated stress-testing against macro-economic shifts, interest rate hikes, and local demographic reclassifications.
              </p>
              <ul className="space-y-3">
                {["Monte Carlo Simulation", "Portfolio Diversification"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-mono text-white/60 uppercase">
                    <span className="w-1 h-1 bg-[#EAB308]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#EAB308] uppercase tracking-[0.3em] mb-4 block">System Logic</span>
              <h2 className="text-4xl md:text-5xl font-header font-bold uppercase leading-tight">
                THE VALUATE<span className="text-white/20">.</span>PRO <br /> EXECUTION PROTOCOL
              </h2>
            </div>
            <div className="text-right">
              <p className="text-white/40 max-w-xs text-sm ml-auto">Our rigorous process ensures that every valuation is backed by institutional-grade verification steps.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Data Ingestion", desc: "System parses 40+ property variables including location micro-trends and structural specifications.", active: false },
              { num: "02", title: "Comparative Analysis", desc: "Real-time matching against 10k+ similar active and historical transactions within a 5-mile radius.", active: false },
              { num: "03", title: "Neural Processing", desc: "AI core evaluates appreciation potential, rental yields, and neighborhood socioeconomic velocity.", active: true },
              { num: "04", title: "Report Generation", desc: "Delivery of a comprehensive asset audit with high-fidelity valuation ranges and risk scores.", active: false },
            ].map(({ num, title, desc, active }) => (
              <div key={num} className={`relative pt-12 border-t group ${active ? "border-[#EAB308]" : "border-white/10"}`}>
                <span className={`absolute top-4 left-0 text-5xl font-header font-bold transition-colors ${active ? "text-[#EAB308]/10" : "text-white/[0.08] group-hover:text-[#EAB308]/20"}`}>{num}</span>
                <h4 className={`text-lg font-bold mb-4 uppercase tracking-tight ${active ? "text-[#EAB308]" : ""}`}>{title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-header font-bold uppercase">INSTITUTIONAL VERTICALS</h2>
            <div className="h-1 w-20 bg-[#EAB308] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Asset Managers", desc: "Optimizing portfolio performance through predictive liquidity tracking and automated valuation updates." },
              { icon: Landmark, title: "Mortgage Lenders", desc: "Accelerating underwriting protocols with instant, reliable collateral assessments and market stress testing." },
              { icon: TrendingUp, title: "Private Equity", desc: "Identifying high-yield acquisition targets through multi-dimensional market heat-mapping and growth modeling." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 border border-white/10 hover:border-[#EAB308]/50 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="w-6 h-6 text-[#EAB308]" />
                  <h3 className="font-bold uppercase tracking-tight">{title}</h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{desc}</p>
                <a href="#" className="text-[10px] font-mono text-[#EAB308] uppercase tracking-widest flex items-center gap-2 group">
                  View Solution <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#EAB308] flex items-center justify-center">
                <BarChartBig className="w-4 h-4 text-black" />
              </div>
              <span className="font-header font-bold text-lg tracking-tighter uppercase">Valuate<span className="text-[#EAB308]">.</span>Pro</span>
            </div>
            <p className="text-white/30 text-xs leading-relaxed">The definitive standard for institutional property intelligence. Data-driven, AI-validated, market-proven.</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-6">Platforms</h5>
              <ul className="space-y-4">
                {["Valuation Engine", "Market Heatmaps", "API Terminal", "Portfolio Dashboard"].map((item) => (
                  <li key={item}><a href="#" className="text-xs text-white/50 hover:text-[#EAB308] transition-colors uppercase">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-6">Enterprise</h5>
              <ul className="space-y-4">
                {["Whitepaper", "Security Audit", "Case Studies", "Documentation"].map((item) => (
                  <li key={item}><a href="#" className="text-xs text-white/50 hover:text-[#EAB308] transition-colors uppercase">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-6">Market Health</h5>
            <div className="bg-white/5 p-4 space-y-4 border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/40 uppercase">Global Index</span>
                <span className="text-[10px] font-mono text-green-500">+1.24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/40 uppercase">Median Yield</span>
                <span className="text-[10px] font-mono text-[#EAB308]">6.82%</span>
              </div>
              <div className="w-full h-1 bg-white/10 overflow-hidden">
                <div className="h-full bg-[#EAB308] w-3/4 relative">
                  <div className="absolute inset-0 bg-white/30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">© 2026 VALUATE PRO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-widest">Service Level Agreement</a>
          </div>
        </div>
      </footer>
    </div>
  );
}