import {
  ArrowRight,
  Home,
  LineChart,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function LandingPage({ onStart }) {
  return (
    <main className="overflow-hidden">
      <section className="relative mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="pointer-events-none absolute left-8 top-16 h-28 w-28 rounded-full border border-teal-300/40 bg-teal-300/10 blur-sm dark:border-teal-200/10" />
        <div className="pointer-events-none absolute right-10 top-20 h-20 w-20 rounded-full border border-indigo-300/40 bg-indigo-300/10 blur-sm dark:border-indigo-200/10" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/60 bg-white/55 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm backdrop-blur-xl dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200">
            ML powered valuation workspace
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-6xl">
            Price homes with a cleaner, faster prediction flow.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A focused valuation interface for turning property attributes into
            model-backed estimates, complete with history, reporting, validation,
            and deployment-ready API wiring.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={onStart} className="primary-button">
              Run a Prediction
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["80", "model columns"],
              ["7", "user inputs"],
              ["PDF", "reports"],
            ].map(([value, label]) => (
              <div key={label} className="glass-panel rounded-lg px-4 py-3">
                <p className="text-xl font-black text-slate-950 dark:text-white">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <HeroDashboard />
      </section>
    </main>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 26 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.12, duration: 0.6 }}
      className="relative mx-auto w-full max-w-2xl"
    >
      <div className="ambient-line pointer-events-none absolute -left-8 top-10 h-44 w-44 rounded-full border border-teal-300/30 bg-teal-300/10 blur-md" />
      <div className="ambient-line pointer-events-none absolute -right-4 bottom-12 h-56 w-56 rounded-full border border-indigo-300/30 bg-indigo-300/10 blur-md" />

      <motion.div
        className="floating-card absolute -left-1 top-8 z-20 hidden rounded-lg border border-white/70 bg-white/75 p-4 shadow-2xl shadow-slate-300/50 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/40 sm:block"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-600 text-white">
            <Home size={19} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Estimated value
            </p>
            <p className="text-xl font-black text-slate-950 dark:text-white">$285k</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="floating-card-delayed absolute -right-2 bottom-10 z-20 hidden rounded-lg border border-white/70 bg-white/75 p-4 shadow-2xl shadow-slate-300/50 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/40 md:block"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-teal-300 dark:bg-white dark:text-teal-700">
            <LineChart size={19} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Signal strength
            </p>
            <p className="text-xl font-black text-slate-950 dark:text-white">92%</p>
          </div>
        </div>
      </motion.div>

      <div className="glass-panel-strong relative rounded-lg p-4 sm:p-5">
        <div className="rounded-lg border border-slate-900/10 bg-slate-950 p-4 text-white shadow-2xl dark:border-white/10 dark:bg-slate-950/90 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-teal-300">Prediction Console</p>
              <h2 className="mt-2 text-3xl font-black">$284,760</h2>
              <p className="mt-2 text-sm font-medium text-slate-400">Generated from trained pipeline</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-teal-200">
              Live API
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Quality", "8 / 10", "82%"],
              ["Living Area", "2,140 sq ft", "74%"],
              ["Garage", "2 cars", "66%"],
            ].map(([label, value, width]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-2 text-sm font-extrabold text-white">{value}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="h-full rounded-full bg-teal-400"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-white">Feature contribution</p>
              <p className="text-xs font-bold text-slate-500">Ames schema</p>
            </div>
            <div className="space-y-3">
              {[
                ["OverallQual", "92%"],
                ["GrLivArea", "78%"],
                ["YearBuilt", "59%"],
                ["TotalBsmtSF", "51%"],
              ].map(([label, width]) => (
                <div key={label} className="grid grid-cols-[94px_1fr] items-center gap-3">
                  <span className="text-xs font-semibold text-slate-400">{label}</span>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-teal-400 to-indigo-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
