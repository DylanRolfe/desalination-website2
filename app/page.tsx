"use client";

import { useState, useEffect } from 'react';
import { Droplets, AlertTriangle, Lightbulb, TrendingUp, FlaskConical, Menu, X, BookOpen, Zap, Monitor, Activity, Settings, BarChart3, Cpu } from 'lucide-react';

// Updated: Fixed all text visibility issues - all arrows and light text now darker
export default function DesalinationWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Droplets },
    { id: 'problem', label: 'Problem', icon: AlertTriangle },
    { id: 'solution', label: 'Solution', icon: Lightbulb },
    { id: 'impact', label: 'Impact', icon: TrendingUp },
    { id: 'prototype', label: 'Prototype', icon: FlaskConical }
  ];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const HomePage = () => (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/75 to-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
          <span className="text-white block mb-2 font-montserrat">
            Solving Desalination's
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 block font-montserrat">
            Annual HAB Crisis
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-300 mb-20 max-w-2xl mx-auto leading-relaxed font-light">
          AI-driven carbon optimization for 100-200 affected plants worldwide
        </p>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-4 opacity-90" />
            <div className="text-3xl md:text-4xl font-bold text-white mb-3 leading-none tracking-tight">
              $400M–$2B
            </div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1.5">Annual Global HAB Costs</div>
            <div className="text-slate-500 text-xs">Across all affected plants</div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-4 opacity-90" />
            <div className="text-3xl md:text-4xl font-bold text-white mb-3 leading-none tracking-tight">
              0.2M–1.5M
            </div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1.5">People Without Water</div>
            <div className="text-slate-500 text-xs">0.4M–3M m³ lost annually</div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-slate-800 hover:border-slate-700 transition-all duration-200">
            <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-4 opacity-90" />
            <div className="text-3xl md:text-4xl font-bold text-white mb-3 leading-none tracking-tight">
              78K–924K m³
            </div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1.5">Water Saved Annually</div>
            <div className="text-slate-500 text-xs">With automated PAC dosing</div>
          </div>
        </div>


        {/* HAB Impact Flow Section */}
        <div className="max-w-6xl mx-auto mt-32 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">The HAB Crisis Flow</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Understanding how harmful algal blooms cascade into massive water loss
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Water Loss Flow */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-8 text-center">Daily Water Loss from HABs</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-red-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <h4 className="font-semibold text-white">HAB Event Occurs</h4>
                  </div>
                  <p className="text-slate-400 text-sm">Algal bloom releases toxins and organic matter</p>
                </div>

                <div className="flex justify-center">
                  <div className="text-red-400 text-2xl">↓</div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                    <h4 className="font-semibold text-white">Plant Shutdown</h4>
                  </div>
                  <p className="text-slate-400 text-sm">4-15 days downtime per event</p>
                  <p className="text-orange-400 text-xs mt-2 font-medium">$4K-$30K lost per plant</p>
                </div>

                <div className="flex justify-center">
                  <div className="text-orange-400 text-2xl">↓</div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplets className="w-6 h-6 text-blue-400" />
                    <h4 className="font-semibold text-white">Massive Water Loss</h4>
                  </div>
                  <p className="text-slate-400 text-sm">0.4-3M m³ lost annually</p>
                  <p className="text-blue-400 text-xs mt-2 font-medium">200K-1.5M people affected</p>
                </div>
              </div>
            </div>

            {/* Right: Current Solution Flow */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-8 text-center">Present-Day Solution</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-red-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <h4 className="font-semibold text-white">HAB Detected</h4>
                  </div>
                  <p className="text-slate-400 text-sm">Algae releases sticky organic matter (AOM/TEP)</p>
                </div>

                <div className="flex justify-center">
                  <div className="text-sky-400 text-2xl">↓</div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <FlaskConical className="w-6 h-6 text-yellow-400" />
                    <h4 className="font-semibold text-white">Manual PAC Dosing</h4>
                  </div>
                  <p className="text-slate-400 text-sm">Workers guess dosage amounts</p>
                  <p className="text-yellow-400 text-xs mt-2 font-medium">Often over/under-doses</p>
                </div>

                <div className="flex justify-center">
                  <div className="text-yellow-400 text-2xl">↓</div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Settings className="w-6 h-6 text-purple-400" />
                    <h4 className="font-semibold text-white">Partial Filtration</h4>
                  </div>
                  <p className="text-slate-400 text-sm">Removes only 40-50% of contaminants</p>
                  <p className="text-purple-400 text-xs mt-2 font-medium">Membranes still get fouled</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automated PAC Solution Section */}
        <div className="max-w-6xl mx-auto mt-32 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">The Automated Solution</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            How sensor-guided PAC dosing eliminates the problem
          </p>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-10 border border-emerald-500/30">
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-8 rounded-xl border-l-4 border-sky-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center">
                    <span className="text-sky-400 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Sensors Detect HAB Early</h4>
                </div>
                <p className="text-slate-300 ml-14">UV254, FDOM, and Chlorophyll-a sensors monitor water quality 24/7 and detect blooms before visible damage</p>
              </div>

              <div className="flex justify-center">
                <div className="text-emerald-400 text-3xl font-bold">↓</div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border-l-4 border-purple-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-white text-lg">AI Calculates Optimal Dose</h4>
                </div>
                <p className="text-slate-300 ml-14">Smart algorithm analyzes sensor data and determines precise PAC amount needed - no guesswork</p>
              </div>

              <div className="flex justify-center">
                <div className="text-emerald-400 text-3xl font-bold">↓</div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border-l-4 border-cyan-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Automated Injection</h4>
                </div>
                <p className="text-slate-300 ml-14">PAC automatically injected at exact dosage, binding to organic matter (AOM/TEP) before it reaches membranes</p>
              </div>

              <div className="flex justify-center">
                <div className="text-emerald-400 text-3xl font-bold">↓</div>
              </div>

              <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-8 rounded-xl border-l-4 border-emerald-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-emerald-400 w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white text-lg">Result: Clean Water, Zero Downtime</h4>
                </div>
                <div className="ml-14 grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-400">50-70%</p>
                    <p className="text-xs text-slate-400">Contaminant removal</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-sky-400">78K-924K m³</p>
                    <p className="text-xs text-slate-400">Water saved annually</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-400">Zero</p>
                    <p className="text-xs text-slate-400">Plant shutdowns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20 pb-20">
          <button
            onClick={() => setCurrentPage('problem')}
            className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base transform hover:scale-105"
          >
            Explore the Crisis →
          </button>
        </div>
      </div>
    </div>
  );

  const ProblemPage = () => (
    <div className="min-h-screen relative bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/75 to-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>
      <div className="relative z-10 w-full px-6 py-32">
        <div className="mb-32 max-w-5xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">The Crisis</h1>
          <p className="text-2xl text-slate-300 font-medium">
            Harmful Algal Blooms are costing the industry millions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Key Crisis Stats */}
          <div className="bg-slate-900/50 backdrop-blur-sm p-12 mb-32 rounded-2xl shadow-xl border border-red-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  $4K-$30K lost per plant per event
                </h2>
                <p className="text-slate-300 text-lg mb-2">
                  HABs force plants to shut down for 4-15 days per event
                </p>
                <p className="text-slate-400 mt-2 text-base">
                  Affecting 100-200 large SWRO plants worldwide (10% of 1,000-2,000 large facilities)
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-32">
            <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-xl shadow-lg border border-slate-800 hover:border-slate-700 hover:shadow-2xl transition-all duration-300 card-hover">
              <h3 className="text-xl font-semibold mb-4 text-white">Global Water Loss Scale</h3>
              <div className="text-4xl font-bold text-blue-400 mb-3">0.4-3M m³</div>
              <p className="text-slate-300 mb-2 text-base font-medium">Lost annually across all affected plants</p>
              <p className="text-sm text-slate-400">
                Enough water for 200,000-1,500,000 people per year
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-xl shadow-lg border border-slate-800 hover:border-slate-700 hover:shadow-2xl transition-all duration-300 card-hover">
              <h3 className="text-xl font-semibold mb-4 text-white">Current PAC Usage</h3>
              <div className="text-4xl font-bold text-orange-400 mb-3">10-20%</div>
              <p className="text-slate-300 mb-2 text-base font-medium">Of affected plants use PAC</p>
              <p className="text-sm text-slate-400">
                Only 10-40 plants out of ~150 HAB-affected facilities
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-xl shadow-lg border border-slate-800">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Overdosing & Underdosing
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="text-base font-medium">
                  90-95% rely on manual guesswork
                </p>
                <p className="text-base text-slate-400">
                  Workers overdose or underdose by 5-10% daily during blooms, causing waste and performance issues.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                    <h4 className="font-medium text-white mb-2 text-base">Overdosing</h4>
                    <p className="text-sm text-slate-400">
                      Wastes chemicals and increases sludge
                    </p>
                    <p className="text-xl font-medium text-white mt-3">$100-300/yr</p>
                    <p className="text-xs text-slate-500 mt-1">$81-$11,096 across 9-38 plants</p>
                  </div>
                  <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                    <h4 className="font-medium text-white mb-2 text-base">Underdosing</h4>
                    <p className="text-sm text-slate-400 mb-2">
                      Causes membrane fouling and downtime
                    </p>
                    <p className="text-xl font-medium text-white mt-3">9K-76K m³ lost</p>
                    <p className="text-xs text-slate-500 mt-1">$9K-$7.2M cost impact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-xl shadow-lg border border-slate-800">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Worker Burden
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="text-base font-medium">
                  1-3 hours every day during blooms
                </p>
                <p className="text-base text-slate-400">
                  Manual dosing is slow and labor-intensive, taking workers away from critical tasks.
                </p>
                <div className="bg-slate-800/50 p-8 mt-6 rounded-lg border border-slate-700">
                  <h4 className="font-medium text-white mb-4 text-base">Daily Tasks:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Sample water and perform tests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Check water quality sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Manually adjust PAC dosing</span>
                    </li>
                  </ul>
                  <p className="text-base font-medium text-white mt-6">
                    $720-$4,380 per plant/year
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    36-219 hours annually; $6,480-$166,440 across 9-38 plants
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-xl shadow-lg border border-slate-800">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Low PAC Adoption
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="text-base font-medium">
                  80-90% of plants avoid PAC entirely
                </p>
                <p className="text-base text-slate-400">
                  Manual dosing is too messy and wasteful, despite PAC's cost advantages.
                </p>
                <div className="bg-slate-800/50 p-8 mt-6 rounded-lg border border-slate-700">
                  <h4 className="font-medium text-white mb-4 text-base">The Opportunity</h4>
                  <p className="text-sm mb-6 text-slate-400">
                    If half of non-PAC plants adopted automated dosing:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/70 p-6 rounded border border-slate-700">
                      <p className="text-xl font-medium text-white mb-2 whitespace-nowrap">64,000-810,000 m³</p>
                      <p className="text-xs text-slate-400">Water saved annually</p>
                    </div>
                    <div className="bg-slate-800/70 p-6 rounded border border-slate-700">
                      <p className="text-xl font-medium text-white mb-2">32,000-405,000</p>
                      <p className="text-xs text-slate-400">People served</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-16 mt-32 mb-16 rounded-2xl shadow-2xl border border-emerald-500/30">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-10 h-10 text-emerald-400" />
              <h2 className="text-3xl font-bold text-center text-white">The Opportunity</h2>
            </div>
            <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto">
              Fixing manual dosing (9-38 plants) + enabling PAC adoption (40-90 plants) = Total Impact
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <p className="text-xl md:text-2xl font-bold text-emerald-400 mb-2 whitespace-nowrap">77,500-924,000 m³</p>
                <p className="text-base text-slate-400 whitespace-nowrap">Water saved per year</p>
              </div>
              <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <p className="text-xl md:text-2xl font-bold text-emerald-400 mb-2">$77,500-$1,848,000</p>
                <p className="text-base text-slate-400">Annual savings</p>
              </div>
              <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <p className="text-xl md:text-2xl font-bold text-emerald-400 mb-2">38,750-462,000</p>
                <p className="text-base text-slate-400">People helped</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <button
              onClick={() => setCurrentPage('solution')}
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base transform hover:scale-105"
            >
              See Our Solution →
            </button>
          </div>

          {/* Learn More Button */}
          <div className="text-center mb-16">
            <a
              href="https://pacdose-automation.super.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-900/50 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4" />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const SolutionPage = () => (
    <div className="min-h-screen relative bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/75 to-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>
      <div className="relative z-10 w-full px-6 py-32">
        <div className="mb-32 text-center max-w-5xl mx-auto animate-fade-in-up">
          <div className="inline-block mb-6">
            <Lightbulb className="w-16 h-16 text-sky-400 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Our Solution</h1>
          <p className="text-2xl text-slate-300 mb-3 font-medium">
            Sensor-Guided Auto-Dosing
          </p>
          <p className="text-lg text-slate-400">
            Responsive, not reactive
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-16 mb-32 border border-slate-800">
            <h2 className="text-3xl font-bold mb-3 text-center text-white">How It Works</h2>
            <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto text-lg">
              A simple add-on that makes dosing intelligent
            </p>

            {/* Vertical centered card flow */}
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Seawater Intake</h3>
                      <p className="text-gray-700 text-sm">Raw ocean water enters the system</p>
                    </div>
                  </div>
                </div>
                <div className="text-blue-600 text-3xl my-2 font-bold">↓</div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Water Quality Sensors</h3>
                      <p className="text-gray-700 text-sm">UV254, FDOM, and Chlorophyll-a sensors detect organic matter and algae levels</p>
                    </div>
                  </div>
                </div>
                <div className="text-blue-600 text-3xl my-2 font-bold">↓</div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Algorithm Calculates Dosage</h3>
                      <p className="text-gray-700 text-sm">Smart system analyzes sensor data and determines optimal PAC amount</p>
                    </div>
                  </div>
                </div>
                <div className="text-blue-600 text-3xl my-2 font-bold">↓</div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Automated PAC Injection</h3>
                      <p className="text-gray-700 text-sm">Precise dosing system adds powdered activated carbon to the water</p>
                    </div>
                  </div>
                </div>
                <div className="text-blue-600 text-3xl my-2 font-bold">↓</div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      5
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Rapid Mixing</h3>
                      <p className="text-gray-700 text-sm">PAC particles bind to algal organic matter (AOM) and sticky substances</p>
                    </div>
                  </div>
                </div>
                <div className="text-blue-600 text-3xl my-2 font-bold">↓</div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      6
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">DAF Filtration System</h3>
                      <p className="text-gray-700 text-sm">Dissolved air flotation removes PAC-bound contaminants</p>
                    </div>
                  </div>
                </div>
                <div className="text-blue-600 text-3xl my-2 font-bold">↓</div>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      7
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Clean Water Output</h3>
                      <p className="text-gray-700 text-sm">Purified water proceeds to RO membranes for final desalination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-12 mb-32 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-medium mb-4 text-center text-white">The Sensors: How the System "Sees" a Bloom</h2>
            <p className="text-slate-400 mb-10 text-center text-sm">Each sensor tells a different part of the story:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="p-4 text-white font-medium text-sm">Sensor</th>
                    <th className="p-4 text-white font-medium text-sm">What It Detects</th>
                    <th className="p-4 text-white font-medium text-sm">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="p-4 font-medium text-sky-400 text-sm">UV254</td>
                    <td className="p-4 text-sm">Organic matter in water</td>
                    <td className="p-4 text-sm">Directly tracks the "sticky stuff" PAC removes</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="p-4 font-medium text-sky-400 text-sm">FDOM Fluorescence</td>
                    <td className="p-4 text-sm">Biopolymers like AOM/TEP</td>
                    <td className="p-4 text-sm">Shows when slime levels rise before water looks bad</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="p-4 font-medium text-sky-400 text-sm">Chlorophyll-a / Phycocyanin</td>
                    <td className="p-4 text-sm">Algal pigments</td>
                    <td className="p-4 text-sm">Tells us a bloom is starting - so we can act early</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-sky-400 text-sm">Turbidity / SDI</td>
                    <td className="p-4 text-sm">Cloudiness or fouling potential</td>
                    <td className="p-4 text-sm">Alerts if things get too thick for PAC alone</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 mt-8 text-center text-sm">
              When these sensors detect abnormal readings, the controller switches the plant into <span className="font-medium text-white">"bloom mode"</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-32">
            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl border border-slate-800">
              <h3 className="text-base font-medium mb-3 text-white">Bloom Mode Logic</h3>
              <p className="text-slate-400 mb-6 text-sm">
                The "brain" of the system that automatically adjusts PAC dosing based on real-time conditions
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">1.</span>
                  <span><span className="font-medium text-white">Detect:</span> Sensors pick up rising organics or algae levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">2.</span>
                  <span><span className="font-medium text-white">Decide:</span> If readings cross thresholds, enter bloom mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">3.</span>
                  <span><span className="font-medium text-white">Dose:</span> Increase PAC gradually to catch the extra gunk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">4.</span>
                  <span><span className="font-medium text-white">Check:</span> Safety rules stop overdosing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5">5.</span>
                  <span><span className="font-medium text-white">Log:</span> Dashboard shows what changed and why</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl border border-slate-800">
              <h3 className="text-base font-medium mb-3 text-white">A Week in the Life of a Bloom</h3>
              <div className="space-y-3 text-sm text-slate-300 mb-4">
                <div className="flex gap-2">
                  <span className="font-medium text-white whitespace-nowrap">Day 1:</span>
                  <span>Clear water → Normal mode, base PAC only</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-white whitespace-nowrap">Day 2–3:</span>
                  <span>Chlorophyll rising → System bumps PAC slightly</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-white whitespace-nowrap">Day 4–6:</span>
                  <span>Peak organics → PAC increases to capture AOM/TEP</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-white whitespace-nowrap">Day 7–10:</span>
                  <span>Bloom fades → Doses taper down smoothly</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm italic">
                Instead of reacting after membranes foul, the system adapts as the bloom evolves
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl border border-slate-800">
              <h3 className="text-base font-medium mb-3 text-white">Precise Injection</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Automated PAC injection system delivers exact dosages at the optimal point in the treatment process
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Eliminates overdosing waste (saves $81-11K/year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Prevents underdosing membrane fouling ($100K-200K/year impact)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Reduces manual labor by 1-3 hours daily</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl border border-slate-800">
              <h3 className="text-base font-medium mb-3 text-white">Built-in Safeguards</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Multiple safety systems ensure reliable, safe operation
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span><span className="font-medium text-white">Fallback Mode:</span> If any sensor fails, revert to safe base dose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span><span className="font-medium text-white">Conflict Mode:</span> Freeze changes if readings don't make sense</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span><span className="font-medium text-white">Safe Mode:</span> PAC dose changes slowly within fixed limits</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl border border-slate-800 md:max-w-md w-full">
                <h3 className="text-base font-medium mb-3 text-white">Easy Retrofitting</h3>
                <p className="text-slate-400 mb-6 text-sm">
                  Works with existing infrastructure - no major construction needed
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">✓</span>
                    <span>Mount sensors on existing sample lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">✓</span>
                    <span>Plug controller into feeder motor (0-10V or 4-20mA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">✓</span>
                    <span>Monitor from small web dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-slate-800 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">Why It's Feasible Now</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-sky-400 text-lg leading-none flex-shrink-0">•</span>
                  <div className="text-sm text-slate-300">
                    <span className="font-medium text-white">Sensors are cheap and rugged:</span>
                    <span> UV254 and fluorescence monitors now under $1k-2k USD</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sky-400 text-lg leading-none flex-shrink-0">•</span>
                  <div className="text-sm text-slate-300">
                    <span className="font-medium text-white">Automation is simple:</span>
                    <span> Even a Raspberry Pi or low-end PLC can run the dosing logic</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-sky-400 text-lg leading-none flex-shrink-0">•</span>
                  <div className="text-sm text-slate-300">
                    <span className="font-medium text-white">Retrofits are non-invasive:</span>
                    <span> Everything fits on existing pipes and panels</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sky-400 text-lg leading-none flex-shrink-0">•</span>
                  <div className="text-sm text-slate-300">
                    <span className="font-medium text-white">Impact is measurable:</span>
                    <span> Watch SDI and UV254 drop in real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-slate-800 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">Key Advantages Over Manual Dosing</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-semibold text-emerald-400 mb-2">50-70%</p>
                <p className="text-xs text-slate-400">AOM/TEP removal efficiency (vs 40-50% with manual underdosing)</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-sky-400 mb-2">25-35%</p>
                <p className="text-xs text-slate-400">Reduction in downtime per HAB event</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-purple-400 mb-2">24/7</p>
                <p className="text-xs text-slate-400">Automated monitoring with zero manual labor</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-slate-800 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-center text-white">The Bottom Line</h3>
            <p className="text-base text-slate-300 text-center max-w-4xl mx-auto leading-relaxed">
              Plants no longer need to fight HABs blindfolded. Instead of waiting for fouling and shutdowns,
              they can <span className="font-medium text-white">see</span> a bloom coming,
              <span className="font-medium text-white"> act</span> at the right time, and
              <span className="font-medium text-white"> save</span> water, money, and hours of cleanup - all with a few sensors and smarter dosing.
            </p>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setCurrentPage('impact')}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base transform hover:scale-105"
            >
              See the Impact →
            </button>
          </div>

          {/* Learn More Button */}
          <div className="text-center mt-8 mb-16">
            <a
              href="https://pacdose-automation.super.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-900/50 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4" />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const ImpactPage = () => (
    <div className="min-h-screen relative bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/75 to-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>
      <div className="relative z-10 w-full px-6 py-32">
        <div className="mb-16 text-center max-w-6xl mx-auto animate-fade-in-up">
          <div className="inline-block mb-6">
            <TrendingUp className="w-16 h-16 text-emerald-400 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Global Impact</h1>
          <p className="text-2xl md:text-3xl text-slate-300 leading-snug font-medium">
            Transforming water security worldwide
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-red-500/30 p-16 rounded-2xl shadow-2xl mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <AlertTriangle className="w-12 h-12 text-red-400" />
              <h2 className="text-5xl md:text-6xl font-bold text-center text-white">
                $400M–$2B
              </h2>
            </div>
            <p className="text-xl text-center text-slate-300 mb-3 font-medium">
              Annual global HAB impact costs
            </p>
            <p className="text-center text-slate-400 text-lg">
              Across 100-200 large SWRO plants affected by harmful algal blooms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-10 border border-blue-500/30 text-center shadow-lg hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 card-hover">
              <Droplets className="w-14 h-14 mx-auto mb-4 text-blue-400" />
              <h3 className="text-4xl font-bold text-blue-400 mb-3">0.4–3M m³</h3>
              <p className="text-white font-semibold mb-3 text-lg">Water Lost Annually</p>
              <p className="text-base text-slate-400 leading-relaxed">
                Enough for 200,000-1,500,000 people yearly
              </p>
            </div>

            <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-10 border border-orange-500/30 text-center shadow-lg hover:border-orange-500/50 hover:shadow-2xl transition-all duration-300 card-hover">
              <AlertTriangle className="w-14 h-14 mx-auto mb-4 text-orange-400" />
              <h3 className="text-4xl font-bold text-orange-400 mb-3">4–15 days</h3>
              <p className="text-white font-semibold mb-3 text-lg">Downtime per Event</p>
              <p className="text-base text-slate-400 leading-relaxed">
                Shutdown for cleaning and recovery
              </p>
            </div>

            <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-10 border border-purple-500/30 text-center shadow-lg hover:border-purple-500/50 hover:shadow-2xl transition-all duration-300 card-hover">
              <FlaskConical className="w-14 h-14 mx-auto mb-4 text-purple-400" />
              <h3 className="text-4xl font-bold text-purple-400 mb-3">100-200</h3>
              <p className="text-white font-semibold mb-3 text-lg">Affected Plants</p>
              <p className="text-base text-slate-400 leading-relaxed">
                10% of 1,000-2,000 large SWRO facilities
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-slate-800">
              <h3 className="text-3xl font-bold mb-8 text-white">Economic Breakdown</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded border border-slate-700">
                  <h4 className="font-semibold text-white mb-2 text-base">Current PAC Users (9-38 plants)</h4>
                  <p className="text-slate-300 mb-2 text-sm">
                    Converting from manual to automated dosing saves <span className="font-medium text-emerald-400">$22,900-$457,800/year</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    Prevents 13,500-114,000 m³ water loss annually (enough for 6,750-57,000 people)
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded border border-slate-700">
                  <h4 className="font-semibold text-white mb-2 text-base">New PAC Adopters (40-90 plants)</h4>
                  <p className="text-slate-300 mb-2 text-sm">
                    Automation enables 50% of non-users to adopt PAC, saving <span className="font-medium text-emerald-400">$64,000-$1,620,000/year</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    Recovers 64,000-810,000 m³/year (water for 32,000-405,000 people)
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded border border-slate-700">
                  <h4 className="font-semibold text-white mb-2 text-base">Total Industry Impact</h4>
                  <p className="text-slate-300 mb-2 text-sm">
                    Combined savings: <span className="font-medium text-emerald-400 text-base">$77,500-$1,848,000/year</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    Total water secured: 77,500-924,000 m³/year (serving 38,750-462,000 people)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                Market Penetration Potential
              </h3>
              <p className="text-base text-center text-slate-400 mb-6">
                Automation removes barriers to PAC adoption, enabling 50-65% market share growth
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded border border-slate-700 text-center">
                  <p className="text-4xl font-semibold text-orange-400 mb-2">10-20%</p>
                  <p className="text-slate-300 text-sm">Current PAC adoption rate</p>
                  <p className="text-xs text-slate-400 mt-2">Only 10-40 plants out of 100-200 HAB-affected</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded border border-slate-700 text-center">
                  <p className="text-4xl font-semibold text-emerald-400 mb-2">50-65%</p>
                  <p className="text-slate-300 text-sm">Projected adoption with automation</p>
                  <p className="text-xs text-slate-400 mt-2">50-130 plants using optimized PAC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-slate-900/50 backdrop-blur-sm border-l-4 border-emerald-500/50 p-8 rounded">
            <h3 className="text-xl font-semibold text-white mb-4">Water Security Impact</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              This solution directly addresses water scarcity by recovering water that would otherwise be lost
              during HAB events. By optimizing PAC dosing and enabling broader adoption, we're unlocking
              <span className="font-medium text-emerald-400"> 77,500-924,000 m³ of potable water annually</span> - water that's already being processed but currently wasted
              due to inefficient algae management. This is critical for arid regions dependent on desalination, where
              66% of capacity is SWRO-based.
            </p>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setCurrentPage('prototype')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base transform hover:scale-105"
            >
              See the Prototype →
            </button>
          </div>

          {/* Learn More Button */}
          <div className="text-center mt-8 mb-16">
            <a
              href="https://pacdose-automation.super.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-900/50 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4" />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const PrototypePage = () => (
    <div className="min-h-screen relative bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/75 to-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>
      <div className="relative z-10 w-full px-6 py-32">
        <div className="mb-16 text-center max-w-6xl mx-auto animate-fade-in-up">
          <div className="inline-block mb-6">
            <Zap className="w-16 h-16 text-purple-400 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Prototype Demo</h1>
          <p className="text-2xl md:text-3xl text-slate-300 leading-snug font-medium">
            See our automated PAC dosing system in action
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive Demo Section */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-12 mb-16 border border-slate-800">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Monitor className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-center text-white">Interactive Demo</h2>
            </div>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto text-lg">
              Experience our prototype system directly in your browser
            </p>

            {/* Interactive Demo Embed Container */}
            <div className="bg-slate-800/50 p-6 rounded-xl shadow-inner border border-slate-700">
              <div className="w-full h-[1240px] bg-slate-950 flex items-center justify-center rounded-lg overflow-hidden shadow-lg border-2 border-slate-700">
                <iframe
                  className="w-full h-full"
                  src="https://plan-execute-spark.lovable.app"
                  title="Interactive Prototype Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Prototype Features</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto text-lg">
              What you'll see in the demonstration
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl shadow-lg border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Real-Time Monitoring</h3>
                </div>
                <p className="text-slate-400 text-base mb-4">
                  Watch as sensors detect changes in water quality and the system responds automatically
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>UV254 organic matter detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>FDOM fluorescence monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Live data visualization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl shadow-lg border border-slate-800 hover:border-purple-500/50 hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Automated Dosing</h3>
                </div>
                <p className="text-slate-400 text-base mb-4">
                  See how the system calculates and adjusts PAC dosing in real-time
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Bloom mode activation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Precise chemical injection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Safety failsafe mechanisms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl shadow-lg border border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Dashboard Interface</h3>
                </div>
                <p className="text-slate-400 text-base mb-4">
                  User-friendly control panel for monitoring and management
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Historical data graphs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Alert notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Manual override options</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl shadow-lg border border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-8 h-8 text-indigo-400" />
                  <h3 className="text-xl font-semibold text-white">Hardware Setup</h3>
                </div>
                <p className="text-slate-400 text-base mb-4">
                  Compact, retrofit-friendly hardware design
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">✓</span>
                    <span>Sensor mounting systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">✓</span>
                    <span>Controller integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">✓</span>
                    <span>Dosing pump configuration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mb-16">
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base transform hover:scale-105"
            >
              ← Back to Home
            </button>
          </div>

          {/* Learn More Button */}
          <div className="text-center mb-16">
            <a
              href="https://pacdose-automation.super.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-900/50 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4" />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const pages = {
    home: HomePage,
    problem: ProblemPage,
    solution: SolutionPage,
    impact: ImpactPage,
    prototype: PrototypePage
  };

  const CurrentPageComponent = pages[currentPage as keyof typeof pages];

  const keyTerms = [
    { term: "HABs (Harmful Algal Blooms)", definition: "Rapid overgrowths of algae in seawater, often triggered by warm temperatures and nutrient pollution. They release toxins and organic gunk that clog and foul desalination systems." },
    { term: "AOM (Algal Organic Matter)", definition: "The mix of dissolved organic compounds released by algae - mainly proteins, polysaccharides, and acids. It causes \"slimy\" fouling in filters and RO membranes." },
    { term: "TEP (Transparent Exopolymer Particles)", definition: "Sticky, web-like organic particles secreted by algae during blooms. They act like biological glue, clogging UF and RO membranes." },
    { term: "PAC (Powdered Activated Carbon)", definition: "A fine, highly porous form of carbon added before filtration. It adsorbs (binds) organic compounds, toxins, and odors from the water, protecting downstream membranes." },
    { term: "DAF (Dissolved Air Flotation)", definition: "A pretreatment step that releases microbubbles into water to float and remove algae, PAC, and other suspended solids before filtration." },
    { term: "UV254", definition: "A sensor measurement of how much UV light at 254 nm is absorbed by organics in water - a real-time indicator of how \"gunky\" the water is." },
    { term: "FDOM (Fluorescent Dissolved Organic Matter)", definition: "Organic compounds that fluoresce under specific light; used as an optical proxy for algae-derived biopolymers like TEP." },
    { term: "SDI (Silt Density Index)", definition: "A measure of how quickly fine particles clog a filter. Lower SDI = cleaner feedwater = longer membrane life." },
    { term: "RO (Reverse Osmosis)", definition: "The main desalination step where high-pressure pumps push seawater through semipermeable membranes to remove salts and contaminants." },
    { term: "UF (Ultrafiltration)", definition: "A membrane filtration step before RO that removes fine particles and microorganisms but not dissolved organics like AOM/TEP." },
    { term: "SWRO", definition: "Seawater reverse osmosis plants - large-scale facilities that desalinate ocean water for drinking and industrial use." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Glossary Modal */}
      {glossaryOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setGlossaryOpen(false)}>
          <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden border border-slate-700" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-white" />
                <h2 className="text-2xl font-bold text-white">Key Terms Glossary</h2>
              </div>
              <button
                onClick={() => setGlossaryOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(85vh-5rem)] p-8 bg-slate-950/50">
              <div className="grid md:grid-cols-2 gap-6">
                {keyTerms.map((item, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2 text-base">{item.term}</h4>
                    <p className="text-sm text-slate-300">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Glossary Button */}
      <button
        onClick={() => setGlossaryOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 z-50 flex items-center gap-3"
        title="Open Glossary"
      >
        <BookOpen className="w-6 h-6" />
        <span className="font-bold text-base whitespace-nowrap">
          Glossary
        </span>
      </button>

      {/* Navigation Bar */}
      <nav className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
              <div className="relative">
                <Droplets className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 bg-blue-400/20 blur-xl group-hover:bg-cyan-400/20 transition-colors"></div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Automated PAC Dosing</span>
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
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
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
