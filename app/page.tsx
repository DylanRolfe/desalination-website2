"use client";

import { useState, useEffect } from 'react';
import { Droplets, AlertTriangle, Lightbulb, TrendingUp, FlaskConical, Menu, X } from 'lucide-react';

export default function DesalinationWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Droplets },
    { id: 'problem', label: 'Problem', icon: AlertTriangle },
    { id: 'solution', label: 'Solution', icon: Lightbulb },
    { id: 'impact', label: 'Impact', icon: TrendingUp }
  ];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const HomePage = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 gradient-blue-cyan animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-cyan-950/30" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 w-full px-6 py-24 text-white">
        <div className="text-center mb-20 animate-fade-in">
          {/* Custom water droplet icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Main droplet */}
              <div className="w-32 h-32 bg-gradient-to-b from-cyan-300 to-cyan-500 rounded-full relative drop-shadow-2xl"
                   style={{
                     borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                   }}>
                {/* Highlight */}
                <div className="absolute top-4 left-6 w-8 h-8 bg-white/40 rounded-full blur-sm" />
                {/* Inner glow */}
                <div className="absolute inset-4 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full" />
              </div>
              {/* Small droplets */}
              <div className="absolute -bottom-2 -left-4 w-8 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full drop-shadow-lg"
                   style={{borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'}} />
              <div className="absolute -bottom-1 -right-4 w-6 h-6 bg-gradient-to-b from-cyan-300 to-cyan-500 rounded-full drop-shadow-lg"
                   style={{borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'}} />
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold mb-8 text-white drop-shadow-2xl leading-tight">
            Automated PAC Dosing
          </h1>
          <p className="text-3xl md:text-4xl text-cyan-100 mb-6 drop-shadow-lg font-semibold max-w-5xl mx-auto leading-snug">
            Solving Desalination's Annual HAB Crisis
          </p>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto drop-shadow-md leading-relaxed">
            AI-driven carbon optimization for 100-200 affected plants worldwide
          </p>
        </div>

        {/* Process Overview - Where We Fit In */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/20 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">Where We Fit In</h2>
            <p className="text-xl text-center text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Understanding our target: the pretreatment stage of seawater desalination
            </p>

            <div className="space-y-8">
              {/* Level 1: Full Desalination Process */}
              <div className="relative bg-gradient-to-r from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-cyan-400/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <h3 className="text-3xl font-bold text-cyan-400">Seawater Desalination Process</h3>
                </div>
                <div className="ml-16 grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-300 mb-2">Intake</p>
                    <p className="text-xs text-slate-400">Ocean water</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 p-4 rounded-lg border-2 border-cyan-400">
                    <p className="text-sm font-semibold text-cyan-300 mb-2">⭐ Pretreatment</p>
                    <p className="text-xs text-cyan-200">Our focus area</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-300 mb-2">RO Membranes</p>
                    <p className="text-xs text-slate-400">Salt removal</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-300 mb-2">Post-treatment</p>
                    <p className="text-xs text-slate-400">Minerals added</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-300 mb-2">Distribution</p>
                    <p className="text-xs text-slate-400">Clean water</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="text-cyan-400 text-4xl">↓</div>
              </div>

              {/* Level 2: Pretreatment Details */}
              <div className="relative bg-gradient-to-r from-cyan-900/40 to-teal-900/40 rounded-2xl p-8 border border-cyan-400/40">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <h3 className="text-3xl font-bold text-cyan-300">Pretreatment Stage</h3>
                </div>
                <div className="ml-16 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-300 mb-2">Screening</p>
                    <p className="text-xs text-slate-400">Remove debris</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 p-4 rounded-lg border-2 border-emerald-400">
                    <p className="text-sm font-semibold text-emerald-300 mb-2">⭐ DAF / Filtration</p>
                    <p className="text-xs text-emerald-200">Our target</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-300 mb-2">UF Membranes</p>
                    <p className="text-xs text-slate-400">Fine particles</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-slate-300 mb-2">Chemical Dosing</p>
                    <p className="text-xs text-slate-400">pH adjustment</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="text-emerald-400 text-4xl">↓</div>
              </div>

              {/* Level 3: The Problem */}
              <div className="relative bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-8 border border-red-400/40">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <h3 className="text-3xl font-bold text-red-400">The Algal Bloom Problem</h3>
                </div>
                <div className="ml-16">
                  <div className="bg-slate-900/60 p-6 rounded-xl border border-red-400/30">
                    <p className="text-lg text-slate-200 mb-4 leading-relaxed">
                      During <span className="text-red-400 font-semibold">Harmful Algal Blooms (HABs)</span>, sticky organic matter clogs DAF filters and overwhelms the system.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-red-400 mb-2">4-15 days</p>
                        <p className="text-sm text-slate-300">Plant shutdowns</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-red-400 mb-2">$400K-$6M</p>
                        <p className="text-sm text-slate-300">Lost per year</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-red-400 mb-2">100-200</p>
                        <p className="text-sm text-slate-300">Plants affected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution callout */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 border border-emerald-400/40 mt-8">
                <div className="flex items-center gap-4">
                  <Lightbulb className="w-16 h-16 text-emerald-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">Our Solution</h3>
                    <p className="text-lg text-slate-200 leading-relaxed">
                      Automated PAC dosing prevents algal matter from clogging filters, keeping plants running during blooms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20 max-w-6xl mx-auto">
          <button
            onClick={() => setCurrentPage('problem')}
            className="relative bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg rounded-3xl p-10 border border-red-400/30 hover:border-red-400/60 hover:scale-105 transition-all cursor-pointer text-left shadow-xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <AlertTriangle className="w-16 h-16 text-red-400 mb-6 drop-shadow-lg" />
              <h3 className="text-3xl font-bold mb-4 text-white">The Problem</h3>
              <p className="text-lg text-slate-100 leading-relaxed">
                HABs cost plants millions annually in lost water
              </p>
            </div>
          </button>

          <button
            onClick={() => setCurrentPage('solution')}
            className="relative bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur-lg rounded-3xl p-10 border border-emerald-400/30 hover:border-emerald-400/60 hover:scale-105 transition-all cursor-pointer text-left shadow-xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <Lightbulb className="w-16 h-16 text-emerald-400 mb-6 drop-shadow-lg" />
              <h3 className="text-3xl font-bold mb-4 text-white">Our Solution</h3>
              <p className="text-lg text-slate-100 leading-relaxed">
                AI-driven automated dosing with real-time monitoring
              </p>
            </div>
          </button>

          <button
            onClick={() => setCurrentPage('impact')}
            className="relative bg-gradient-to-br from-teal-900/20 to-cyan-900/20 backdrop-blur-lg rounded-3xl p-10 border border-teal-400/30 hover:border-teal-400/60 hover:scale-105 transition-all cursor-pointer text-left shadow-xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <TrendingUp className="w-16 h-16 text-teal-400 mb-6 drop-shadow-lg" />
              <h3 className="text-3xl font-bold mb-4 text-white">The Impact</h3>
              <p className="text-lg text-slate-100 leading-relaxed">
                Save millions of cubic meters and billions in costs
              </p>
            </div>
          </button>
        </div>

        {/* Technical Specifications Card */}
        <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-3xl p-10 border border-slate-400/30 max-w-4xl mx-auto mb-16 shadow-xl overflow-hidden">
          {/* Custom graphic background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                {/* Custom document stack icon */}
                <div className="flex gap-2">
                  <div className="w-16 h-20 bg-gradient-to-br from-purple-500/80 to-purple-600/80 rounded-lg shadow-lg transform -rotate-6 flex items-center justify-center">
                    <div className="w-10 h-2 bg-white/40 rounded mb-2" />
                  </div>
                  <div className="w-16 h-20 bg-gradient-to-br from-purple-400/90 to-purple-500/90 rounded-lg shadow-lg flex flex-col items-center justify-center gap-1">
                    <div className="w-10 h-1.5 bg-white/50 rounded" />
                    <div className="w-8 h-1.5 bg-white/40 rounded" />
                    <div className="w-10 h-1.5 bg-white/50 rounded" />
                  </div>
                  <div className="w-16 h-20 bg-gradient-to-br from-purple-300/80 to-purple-400/80 rounded-lg shadow-lg transform rotate-6 flex items-center justify-center">
                    <div className="w-10 h-2 bg-white/40 rounded mt-2" />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-white text-center">Research & Technical Details</h3>
            <p className="text-slate-200 mb-8 text-lg text-center leading-relaxed max-w-2xl mx-auto">
              Explore our comprehensive research documentation, methodology, data sources, and technical specifications
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-slate-400/20">
                <div className="text-purple-400 font-bold text-sm mb-1">Documentation</div>
                <div className="text-slate-300 text-xs">Full methodology & analysis</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-slate-400/20">
                <div className="text-purple-400 font-bold text-sm mb-1">Data Sources</div>
                <div className="text-slate-300 text-xs">Research citations & references</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-slate-400/20">
                <div className="text-purple-400 font-bold text-sm mb-1">Technical Specs</div>
                <div className="text-slate-300 text-xs">Hardware & software details</div>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://pacdose-automation.super.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                <span className="relative z-10">View Complete Research</span>
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setCurrentPage('problem')}
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-5 px-12 rounded-full text-2xl transition-all transform hover:scale-105 shadow-2xl"
          >
            Explore the Crisis →
          </button>
        </div>
      </div>
    </div>
  );

  const ProblemPage = () => (
    <div className="min-h-screen relative">
      {/* Dark gradient background with red/orange accents for "problem" theme */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-950/40 to-slate-900 animate-gradient" style={{
          backgroundSize: '200% 200%'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-transparent to-slate-950/40" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239,68,68,0.2) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full px-6 py-20 text-white">
        <div className="mb-16 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-cyan-400 leading-tight">The Crisis</h1>
          <p className="text-3xl md:text-4xl text-slate-200 leading-snug">
            Harmful Algal Blooms are costing the industry millions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/30 mb-16 shadow-xl">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Key Terms</h2>
            <p className="text-slate-300 mb-8 text-xl">Common terms used throughout:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h4 className="font-bold text-cyan-300 mb-3 text-xl">HABs</h4>
                <p className="text-base text-slate-300 leading-relaxed">Harmful algal blooms that clog desalination systems</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h4 className="font-bold text-cyan-300 mb-3 text-xl">AOM</h4>
                <p className="text-base text-slate-300 leading-relaxed">Algal organic matter causing filter fouling</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h4 className="font-bold text-cyan-300 mb-3 text-xl">TEP</h4>
                <p className="text-base text-slate-300 leading-relaxed">Sticky particles that clog membranes</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h4 className="font-bold text-cyan-300 mb-3 text-xl">PAC</h4>
                <p className="text-base text-slate-300 leading-relaxed">Powdered activated carbon that removes toxins</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h4 className="font-bold text-cyan-300 mb-3 text-xl">RO</h4>
                <p className="text-base text-slate-300 leading-relaxed">Reverse osmosis membrane filtration</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <h4 className="font-bold text-cyan-300 mb-3 text-xl">SWRO</h4>
                <p className="text-base text-slate-300 leading-relaxed">Seawater reverse osmosis plants</p>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-cyan-900/60 via-cyan-800/40 to-cyan-900/60 backdrop-blur-sm border-l-4 border-cyan-400 p-12 mb-16 rounded-r-xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-gradient" style={{backgroundSize: '200% 100%'}} />
            <div className="relative z-10">
              <p className="text-5xl font-bold text-cyan-300 mb-6 stat-glow">
                $400K-$6M lost per year
              </p>
              <p className="text-slate-200 text-2xl leading-relaxed">
                HABs force plants to shut down for 4-15 days
              </p>
              <p className="text-cyan-200 mt-6 text-xl">
                Affecting 100-200 large SWRO plants worldwide
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/30 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-cyan-400">Water Loss Scale</h3>
                <div className="text-6xl font-bold text-white mb-4 stat-glow">400K-3M m³</div>
                <p className="text-slate-200 mb-4 text-xl">lost annually</p>
                <p className="text-base text-cyan-200 leading-relaxed">
                  Enough water for 200,000-1,500,000 people per year
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm rounded-3xl p-10 border border-orange-400/30 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-orange-400">Current PAC Usage</h3>
                <div className="text-6xl font-bold text-white mb-4 stat-glow">10-20%</div>
                <p className="text-slate-200 mb-4 text-xl">use PAC pretreatment</p>
                <p className="text-base text-orange-200 leading-relaxed">
                  Only 10-40 plants out of 100-200 affected
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/20 shadow-xl">
              <h3 className="text-4xl font-bold mb-8 flex items-center gap-4 text-cyan-400">
                <span className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">1</span> Overdosing & Underdosing
              </h3>
              <div className="space-y-6 text-slate-200">
                <p className="text-2xl leading-relaxed">
                  90-95% rely on manual guesswork
                </p>
                <p className="text-xl leading-relaxed text-slate-300">
                  Workers overdose or underdose by 5-10% daily during blooms, causing waste and performance issues.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/30">
                    <h4 className="font-bold text-cyan-300 mb-4 text-2xl">Overdosing</h4>
                    <p className="text-lg leading-relaxed">
                      Wastes chemicals
                    </p>
                    <p className="text-3xl font-bold text-cyan-300 mt-4">$81-11K/year</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/30">
                    <h4 className="font-bold text-cyan-300 mb-4 text-2xl">Underdosing</h4>
                    <p className="text-lg leading-relaxed mb-4">
                      Clogs filters faster
                    </p>
                    <p className="text-3xl font-bold text-cyan-300 mt-4">$100K-200K/year</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/20 shadow-xl">
              <h3 className="text-4xl font-bold mb-8 flex items-center gap-4 text-cyan-400">
                <span className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">2</span> Worker Burden
              </h3>
              <div className="space-y-6 text-slate-200">
                <p className="text-2xl leading-relaxed">
                  1-3 hours every day during blooms
                </p>
                <p className="text-xl leading-relaxed text-slate-300">
                  Manual dosing is slow and labor-intensive, taking workers away from critical tasks.
                </p>
                <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/30 mt-8">
                  <h4 className="font-bold text-cyan-300 mb-6 text-2xl">Daily Tasks:</h4>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-2xl">•</span>
                      <span>Sample water and perform tests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-2xl">•</span>
                      <span>Check water quality sensors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1 text-2xl">•</span>
                      <span>Manually adjust PAC dosing</span>
                    </li>
                  </ul>
                  <p className="text-xl font-bold text-cyan-300 mt-8">
                    36-219 hours/year per plant
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/20 shadow-xl">
              <h3 className="text-4xl font-bold mb-8 flex items-center gap-4 text-cyan-400">
                <span className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">3</span> Low PAC Adoption
              </h3>
              <div className="space-y-6 text-slate-200">
                <p className="text-2xl leading-relaxed">
                  80-90% of plants avoid PAC entirely
                </p>
                <p className="text-xl leading-relaxed text-slate-300">
                  Manual dosing is too messy and wasteful, despite PAC's cost advantages.
                </p>
                <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/30 mt-8">
                  <h4 className="font-bold text-cyan-300 mb-6 text-2xl">The Opportunity</h4>
                  <p className="text-lg mb-6 leading-relaxed">
                    If half of non-PAC plants adopted automated dosing:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-xl">
                      <p className="text-4xl font-bold text-cyan-400 mb-3 whitespace-nowrap">64K-810K m³</p>
                      <p className="text-base text-slate-300">Water saved annually</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl">
                      <p className="text-4xl font-bold text-cyan-400 mb-3">32K-405K</p>
                      <p className="text-base text-slate-300">People served</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30 shadow-xl mt-16">
            <h2 className="text-5xl font-bold text-center mb-8 text-cyan-400">The Opportunity</h2>
            <p className="text-2xl text-slate-200 mb-10 text-center max-w-4xl mx-auto leading-relaxed">
              Automated dosing unlocks massive water savings
            </p>
            <div className="bg-white/10 p-10 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-cyan-400 mb-4 whitespace-nowrap">77K-924K m³</p>
                  <p className="text-lg text-slate-300">Water saved per year</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-cyan-400 mb-4">$77K-1.8M</p>
                  <p className="text-lg text-slate-300">Annual savings</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-cyan-400 mb-4">38K-462K</p>
                  <p className="text-lg text-slate-300">People served</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setCurrentPage('solution')}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-5 px-12 rounded-full text-2xl transition-all shadow-2xl"
            >
              See Our Solution →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SolutionPage = () => (
    <div className="min-h-screen relative">
      {/* Green/teal gradient for "solution" theme */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-950/50 to-emerald-950/40 animate-gradient" style={{
          backgroundSize: '200% 200%'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/20 via-transparent to-cyan-950/30" />
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 w-full px-6 py-20 text-white">
        <div className="mb-16 text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-cyan-400 leading-tight">Our Solution</h1>
          <p className="text-3xl md:text-4xl text-slate-200 leading-snug mb-6">
            Sensor-Guided Auto-Dosing
          </p>
          <p className="text-2xl text-slate-300 leading-relaxed">
            Responsive, not reactive
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30 mb-16 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-cyan-400">How It Works</h2>
            <p className="text-slate-200 text-center mb-12 max-w-3xl mx-auto text-2xl leading-relaxed">
              A simple add-on that makes dosing intelligent
            </p>

            {/* Vertical centered card flow */}
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30 shadow-xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Seawater Intake</h3>
                      <p className="text-slate-300 text-lg">Raw ocean water enters the system</p>
                    </div>
                  </div>
                </div>
                <div className="text-cyan-400 text-4xl my-2">↓</div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-br from-cyan-900/60 to-blue-900/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/40 shadow-xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-cyan-300 mb-2">Water Quality Sensors</h3>
                      <p className="text-slate-200 text-lg">UV254, FDOM, and Chlorophyll-a sensors detect organic matter and algae levels</p>
                    </div>
                  </div>
                </div>
                <div className="text-cyan-400 text-4xl my-2">↓</div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-br from-purple-900/60 to-indigo-900/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/40 shadow-xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      3
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-purple-300 mb-2">AI Algorithm Calculates Dosage</h3>
                      <p className="text-slate-200 text-lg">Smart system analyzes sensor data and determines optimal PAC amount</p>
                    </div>
                  </div>
                </div>
                <div className="text-cyan-400 text-4xl my-2">↓</div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-br from-emerald-900/60 to-teal-900/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/40 shadow-xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      4
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-emerald-300 mb-2">Automated PAC Injection</h3>
                      <p className="text-slate-200 text-lg">Precise dosing system adds powdered activated carbon to the water</p>
                    </div>
                  </div>
                </div>
                <div className="text-cyan-400 text-4xl my-2">↓</div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-br from-orange-900/60 to-amber-900/60 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/40 shadow-xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      5
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-orange-300 mb-2">Rapid Mixing</h3>
                      <p className="text-slate-200 text-lg">PAC particles bind to algal organic matter (AOM) and sticky substances</p>
                    </div>
                  </div>
                </div>
                <div className="text-cyan-400 text-4xl my-2">↓</div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-br from-blue-900/60 to-indigo-900/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/40 shadow-xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      6
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-blue-300 mb-2">DAF Filtration System</h3>
                      <p className="text-slate-200 text-lg">Dissolved air flotation removes PAC-bound contaminants</p>
                    </div>
                  </div>
                </div>
                <div className="text-emerald-400 text-4xl my-2">↓</div>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-br from-emerald-900/60 to-green-900/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/40 shadow-xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      7
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-emerald-300 mb-2">Clean Water Output</h3>
                      <p className="text-slate-200 text-lg">Purified water proceeds to RO membranes for final desalination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 mb-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">The Sensors: How the System "Sees" a Bloom</h2>
            <p className="text-slate-200 mb-6 text-center">Each sensor tells a different part of the story:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-cyan-400/30">
                    <th className="p-3 text-cyan-400 font-bold">Sensor</th>
                    <th className="p-3 text-cyan-400 font-bold">What It Detects</th>
                    <th className="p-3 text-cyan-400 font-bold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-b border-cyan-400/20">
                    <td className="p-3 font-semibold text-cyan-300">UV254</td>
                    <td className="p-3">Organic matter in water</td>
                    <td className="p-3">Directly tracks the "sticky stuff" PAC removes</td>
                  </tr>
                  <tr className="border-b border-cyan-400/20">
                    <td className="p-3 font-semibold text-cyan-300">FDOM Fluorescence</td>
                    <td className="p-3">Biopolymers like AOM/TEP</td>
                    <td className="p-3">Shows when slime levels rise before water looks bad</td>
                  </tr>
                  <tr className="border-b border-cyan-400/20">
                    <td className="p-3 font-semibold text-cyan-300">Chlorophyll-a / Phycocyanin</td>
                    <td className="p-3">Algal pigments</td>
                    <td className="p-3">Tells us a bloom is starting—so we can act early</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-cyan-300">Turbidity / SDI</td>
                    <td className="p-3">Cloudiness or fouling potential</td>
                    <td className="p-3">Alerts if things get too thick for PAC alone</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-300 mt-6 text-center text-sm">
              When these sensors detect abnormal readings, the controller switches the plant into <span className="text-cyan-300 font-semibold">"bloom mode"</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Bloom Mode Logic</h3>
              <p className="text-slate-200 mb-4">
                The "brain" of the system that automatically adjusts PAC dosing based on real-time conditions
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">1.</span>
                  <span><span className="font-semibold">Detect:</span> Sensors pick up rising organics or algae levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">2.</span>
                  <span><span className="font-semibold">Decide:</span> If readings cross thresholds, enter bloom mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">3.</span>
                  <span><span className="font-semibold">Dose:</span> Increase PAC gradually to catch the extra gunk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">4.</span>
                  <span><span className="font-semibold">Check:</span> Safety rules stop overdosing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">5.</span>
                  <span><span className="font-semibold">Log:</span> Dashboard shows what changed and why</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">A Week in the Life of a Bloom</h3>
              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex gap-3">
                  <span className="font-bold text-cyan-300 whitespace-nowrap">Day 1:</span>
                  <span>Clear water → Normal mode, base PAC only</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-cyan-300 whitespace-nowrap">Day 2–3:</span>
                  <span>Chlorophyll rising → System bumps PAC slightly</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-cyan-300 whitespace-nowrap">Day 4–6:</span>
                  <span>Peak organics → PAC increases to capture AOM/TEP</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-cyan-300 whitespace-nowrap">Day 7–10:</span>
                  <span>Bloom fades → Doses taper down smoothly</span>
                </div>
              </div>
              <p className="text-slate-300 mt-4 text-xs italic">
                Instead of reacting after membranes foul, the system adapts as the bloom evolves
              </p>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Precise Injection</h3>
              <p className="text-slate-200 mb-4">
                Automated PAC injection system delivers exact dosages at the optimal point in the treatment process
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Eliminates overdosing waste (saves $81-11K/year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Prevents underdosing membrane fouling ($100K-200K/year impact)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Reduces manual labor by 1-3 hours daily</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Built-in Safeguards</h3>
              <p className="text-slate-200 mb-4">
                Multiple safety systems ensure reliable, safe operation
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><span className="font-semibold">Fallback Mode:</span> If any sensor fails, revert to safe base dose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><span className="font-semibold">Conflict Mode:</span> Freeze changes if readings don't make sense</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><span className="font-semibold">Safe Mode:</span> PAC dose changes slowly within fixed limits</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl md:max-w-md w-full">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Easy Retrofitting</h3>
                <p className="text-slate-200 mb-4">
                  Works with existing infrastructure—no major construction needed
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Mount sensors on existing sample lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Plug controller into feeder motor (0-10V or 4-20mA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Monitor from small web dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center text-cyan-400">Why It's Feasible Now</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3 text-slate-200">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="font-semibold text-cyan-300">Sensors are cheap and rugged:</span>
                    <span className="text-sm"> UV254 and fluorescence monitors now under $1k-2k USD</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="font-semibold text-cyan-300">Automation is simple:</span>
                    <span className="text-sm"> Even a Raspberry Pi or low-end PLC can run the dosing logic</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-slate-200">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="font-semibold text-cyan-300">Retrofits are non-invasive:</span>
                    <span className="text-sm"> Everything fits on existing pipes and panels</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="font-semibold text-cyan-300">Impact is measurable:</span>
                    <span className="text-sm"> Watch SDI and UV254 drop in real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center text-cyan-400">Key Advantages Over Manual Dosing</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-cyan-400 mb-2">50-70%</p>
                <p className="text-sm text-slate-200">AOM/TEP removal efficiency (vs 40-50% with manual underdosing)</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan-400 mb-2">25-35%</p>
                <p className="text-sm text-slate-200">Reduction in downtime per HAB event</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan-400 mb-2">24/7</p>
                <p className="text-sm text-slate-200">Automated monitoring with zero manual labor</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl mb-12">
            <h3 className="text-3xl font-bold mb-4 text-center text-cyan-400">The Bottom Line</h3>
            <p className="text-lg text-slate-200 text-center max-w-4xl mx-auto leading-relaxed">
              Plants no longer need to fight HABs blindfolded. Instead of waiting for fouling and shutdowns,
              they can <span className="text-cyan-300 font-semibold">see</span> a bloom coming,
              <span className="text-cyan-300 font-semibold"> act</span> at the right time, and
              <span className="text-cyan-300 font-semibold"> save</span> water, money, and hours of cleanup—all with a few sensors and smarter dosing.
            </p>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setCurrentPage('impact')}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-5 px-12 rounded-full text-2xl transition-all shadow-2xl"
            >
              See the Impact →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ImpactPage = () => (
    <div className="min-h-screen relative">
      {/* Subtle blue/cyan gradient for "impact" theme */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-950/40 to-blue-950/50 animate-gradient" style={{backgroundSize: '200% 200%'}} />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-transparent to-slate-900/80" />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient opacity-20" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(6,182,212,0.2) 0%, transparent 50%)'
        }} />
      </div>

      <div className="relative z-10 w-full px-6 py-20 text-white">
        <div className="mb-16 text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-cyan-400 leading-tight">Global Impact</h1>
          <p className="text-3xl md:text-4xl text-slate-200 leading-snug">
            Transforming water security worldwide
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-cyan-900/50 via-blue-900/30 to-cyan-900/50 backdrop-blur-sm border-l-4 border-cyan-400 p-12 rounded-r-xl mb-16 shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-gradient" style={{backgroundSize: '200% 100%'}} />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-cyan-300 stat-glow">
                $122M–366M
              </h2>
              <p className="text-2xl text-center text-slate-200 mb-4">
                Annual savings potential
              </p>
              <p className="text-center text-cyan-300 text-xl font-semibold">
                20-Year Impact: $2.44B–$7.32B
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="relative bg-gradient-to-br from-cyan-900/70 to-blue-900/70 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/30 text-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent" />
              <div className="relative z-10">
                <Droplets className="w-20 h-20 mx-auto mb-6 text-cyan-400 drop-shadow-lg" />
                <h3 className="text-4xl font-bold text-white mb-4 stat-glow">80K–405K m³</h3>
                <p className="text-slate-200 font-semibold mb-4 text-xl">Water Saved</p>
                <p className="text-base text-cyan-200 leading-relaxed">
                  For 40,000-202,500 people yearly
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-teal-900/60 to-cyan-900/60 backdrop-blur-sm rounded-3xl p-10 border border-teal-400/30 text-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent" />
              <div className="relative z-10">
                <TrendingUp className="w-20 h-20 mx-auto mb-6 text-teal-400 drop-shadow-lg" />
                <h3 className="text-4xl font-bold text-white mb-4 stat-glow">$122M-366M</h3>
                <p className="text-slate-200 font-semibold mb-4 text-xl">Annual Savings</p>
                <p className="text-base text-teal-200 leading-relaxed">
                  Reduced waste and downtime
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-900/60 to-sky-900/60 backdrop-blur-sm rounded-3xl p-10 border border-blue-400/30 text-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent" />
              <div className="relative z-10">
                <FlaskConical className="w-20 h-20 mx-auto mb-6 text-blue-400 drop-shadow-lg" />
                <h3 className="text-4xl font-bold text-white mb-4 stat-glow">100–200</h3>
                <p className="text-slate-200 font-semibold mb-4 text-xl">Affected Plants</p>
                <p className="text-base text-blue-200 leading-relaxed">
                  Worldwide opportunity
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Economic Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/30">
                  <h4 className="font-bold text-cyan-300 mb-3">Current PAC Users (9-38 plants)</h4>
                  <p className="text-slate-200 mb-2">
                    Converting from manual to automated dosing saves <span className="text-cyan-300 font-semibold">$1.93M-9.05M/year</span>
                  </p>
                  <p className="text-sm text-slate-300">
                    Prevents 9,000-38,000 m³ water loss annually (enough for 4,500-19,000 people)
                  </p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/30">
                  <h4 className="font-bold text-cyan-300 mb-3">New PAC Adopters (40-90 plants)</h4>
                  <p className="text-slate-200 mb-2">
                    Automation enables 50% of non-users to adopt PAC, saving <span className="text-cyan-300 font-semibold">$4.51M-22.71M/year</span>
                  </p>
                  <p className="text-sm text-slate-300">
                    Recovers 64,000-810,000 m³/year (water for 32,000-405,000 people)
                  </p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/30">
                  <h4 className="font-bold text-cyan-300 mb-3">Total Industry Impact</h4>
                  <p className="text-slate-200 mb-2">
                    Combined savings: <span className="text-cyan-300 font-semibold text-lg">$6.44M-31.76M/year</span>
                  </p>
                  <p className="text-sm text-slate-300">
                    Total water secured: 77,500-924,000 m³/year (serving 38,750-462,000 people)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-center text-cyan-400">
                Market Penetration Potential
              </h3>
              <p className="text-lg text-center text-slate-200 mb-6">
                Automation removes barriers to PAC adoption, enabling 50-65% market share growth
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-xl text-center">
                  <p className="text-5xl font-bold text-cyan-400 mb-2">10-20%</p>
                  <p className="text-slate-200">Current PAC adoption rate</p>
                  <p className="text-sm text-cyan-300 mt-2">Only 10-40 plants out of 100-200 HAB-affected</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl text-center">
                  <p className="text-5xl font-bold text-cyan-400 mb-2">50-65%</p>
                  <p className="text-slate-200">Projected adoption with automation</p>
                  <p className="text-sm text-cyan-300 mt-2">50-130 plants using optimized PAC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-cyan-900/60 backdrop-blur-sm border-l-4 border-cyan-400 p-8 rounded-r-xl shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Water Security Impact</h3>
            <p className="text-slate-100 text-lg leading-relaxed">
              This solution directly addresses water scarcity by recovering water that would otherwise be lost 
              during HAB events. By optimizing PAC dosing and enabling broader adoption, we're unlocking 
              <span className="text-cyan-300 font-semibold"> 77,500-924,000 m³ of potable water annually</span>—water that's already being processed but currently wasted 
              due to inefficient algae management. This is critical for arid regions dependent on desalination, where 
              66% of capacity is SWRO-based.
            </p>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-5 px-12 rounded-full text-2xl transition-all shadow-2xl"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const pages = {
    home: HomePage,
    problem: ProblemPage,
    solution: SolutionPage,
    impact: ImpactPage
  };

  const CurrentPageComponent = pages[currentPage as keyof typeof pages];

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/30 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Title */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Droplets className="w-10 h-10 text-cyan-400" />
              <span className="text-2xl font-bold text-white">Automated PAC Dosing</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all text-lg ${
                      currentPage === item.id
                        ? 'bg-cyan-500 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-lg ${
                      currentPage === item.id
                        ? 'bg-cyan-500 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <CurrentPageComponent />
    </div>
  );
}