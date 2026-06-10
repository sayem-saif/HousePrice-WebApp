import { Moon, Sun, Home, Calculator } from "lucide-react";

export default function Navbar({ currentPage, onNavigate, darkMode, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate("landing")}
          className="flex items-center gap-3 text-left"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-600 font-black text-white shadow-glow">
            HP
          </span>
          <span>
            <span className="block text-sm font-extrabold text-slate-950 dark:text-white">
              HousePrice AI
            </span>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
              Regression intelligence
            </span>
          </span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate("landing")}
            className={`secondary-button hidden sm:inline-flex ${currentPage === "landing" ? "border-teal-300 text-teal-700 dark:text-teal-300" : ""}`}
          >
            <Home size={16} />
            Overview
          </button>
          <button
            type="button"
            onClick={() => onNavigate("predict")}
            className={`secondary-button ${currentPage === "predict" ? "border-teal-300 text-teal-700 dark:text-teal-300" : ""}`}
          >
            <Calculator size={16} />
            Predict
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white/70 text-slate-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
