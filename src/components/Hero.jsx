import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import {FiPlus, FiBriefcase, FiCheckCircle, FiTrendingUp, FiCalendar, FiDollarSign, FiClock,  FiShield, FiZap,} from "react-icons/fi";

const Hero = () => {
  const sampleJobs = [
    {
      company: "Google",
      role: "Senior Frontend Engineer",
      location: "Remote / Mountain View",
      salary: "$160k - $195k",
      stage: "Interview Round 3",
      stageColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      time: "Tomorrow, 2:00 PM",
      logoColor: "bg-blue-600",
      letter: "G",
    },
    {
      company: "Stripe",
      role: "Full Stack Developer",
      location: "San Francisco, CA",
      salary: "$150k - $180k",
      stage: "Offer Received",
      stageColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      time: "Decision in 3 days",
      logoColor: "bg-indigo-600",
      letter: "S",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 py-10 lg:py-12 text-white">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[110px]" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Hero Content */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md transition hover:border-blue-400/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                 Smart Job Tracking
              </span>
             
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
           Track Every Application, Land Your  {" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Dream Job
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl font-normal leading-relaxed">
              Stop losing track of spreadsheets and missed emails. Organize your job search pipeline, 
              prepare for upcoming interviews, and manage competitive salary offers in one premium workspace.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                as={Link}
                to="/jobs/add"
                color="primary"
                size="lg"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                startContent={
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/20">
                    <FiPlus size={18} className="transition-transform group-hover:rotate-90 duration-300" />
                  </div>
                }
              >
                Add New Jobs
              </Button>

             
            </div>

            {/* Highlights / Features List */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 sm:text-sm lg:justify-start">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-400" size={16} />
                <span>Zero complex setup</span>
              </div>
              <div className="flex items-center gap-2">
                <FiZap className="text-amber-400" size={16} />
                <span>Live Status Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <FiShield className="text-cyan-400" size={16} />
                <span>100% Private & Secure</span>
              </div>
            </div>

           
          </div>

          {/* Right Column: Premium Interactive Glassmorphism Dashboard Preview */}
          <div className="relative lg:col-span-5">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 blur-2xl opacity-75" />

            {/* Main Interactive Glass Card */}
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl shadow-2xl sm:p-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <FiBriefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Application Track</h3>
                    <p className="text-xs text-slate-400">24 Active Applications</p>
                  </div>
                </div>

                <Link
                  to="/jobs/add"
                  className="flex items-center gap-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/30 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition"
                >
                  <FiPlus size={14} />
                  <span>New</span>
                </Link>
              </div>

              {/* Status Filter Chips */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 text-[11px] font-medium text-slate-300 scrollbar-none">
                <span className="rounded-full bg-blue-600 px-3 py-1 font-semibold text-white shadow-sm">
                  All (24)
                </span>
                <span className="rounded-full bg-slate-800/80 hover:bg-slate-700 px-3 py-1 text-slate-400 border border-slate-700/50 cursor-pointer">
                  Interview (6)
                </span>
                <span className="rounded-full bg-slate-800/80 hover:bg-slate-700 px-3 py-1 text-slate-400 border border-slate-700/50 cursor-pointer">
                  Offers (2)
                </span>
                <span className="rounded-full bg-slate-800/80 hover:bg-slate-700 px-3 py-1 text-slate-400 border border-slate-700/50 cursor-pointer">
                  Applied (16)
                </span>
              </div>

              {/* Sample Job Cards */}
              <div className="mt-4 space-y-3">
                {sampleJobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl border border-slate-800 bg-slate-800/40 p-3.5 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-800/80 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${job.logoColor} font-bold text-white text-base shadow-sm`}
                        >
                          {job.letter}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {job.role}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span>{job.company}</span>
                            <span>•</span>
                            <span className="text-slate-500">{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <span
                        className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${job.stageColor}`}
                      >
                        {job.stage}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-slate-800/60 pt-2 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1 text-emerald-400 font-medium">
                        <FiDollarSign size={12} />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <FiClock size={12} />
                        <span>{job.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Floating Metric Card 1: Top Right */}
            {/* <div className="absolute -top-6 -right-4 hidden sm:flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-3.5 shadow-xl backdrop-blur-md animate-bounce-slow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <FiTrendingUp size={20} />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400">Interview Rate</p>
                <p className="text-sm font-bold text-emerald-300">+28.5% Boost</p>
              </div>
            </div> */}

            {/* Floating Metric Card 2: Bottom Left */}
            {/* <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-slate-900/90 p-3.5 shadow-xl backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <FiCalendar size={20} />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400">Next Up</p>
                <p className="text-xs font-bold text-white">Google Tech Screen (2h)</p>
              </div>
            </div> */}
          </div>

        </div>

     

      </div>
    </section>
  );
};

export default Hero;
