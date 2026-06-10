import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import PredictPage from "./pages/PredictPage";

export default function App() {
  const [page, setPage] = useState("landing");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-white">
      <Navbar
        currentPage={page}
        onNavigate={setPage}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((current) => !current)}
      />
      {page === "landing" ? (
        <LandingPage onStart={() => setPage("predict")} />
      ) : (
        <PredictPage />
      )}
    </div>
  );
}
