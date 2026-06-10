import { Download, Edit3, Gauge, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { predictionFields } from "../data/formFields";
import { formatCurrency, formatNumber } from "../utils/formatters";
import { downloadPredictionReport } from "../utils/report";

export default function ResultPanel({ result, values, onModify }) {
  if (!result) {
    return (
      <div className="glass-panel rounded-lg p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Result Preview
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">
          Your estimate will appear here
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Submit the property details to generate a model-backed house price estimate,
          input summary, and downloadable report.
        </p>
      </div>
    );
  }

  const price = Number(result.predicted_price);
  const qualityScore = Math.min(100, Number(values.overallQuality) * 10);
  const areaScore = Math.min(100, Number(values.livingArea) / 35);

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel rounded-lg p-6"
    >
      <p className="text-sm font-bold uppercase tracking-wide text-teal-700 dark:text-teal-300">
        Predicted House Price
      </p>
      <h2 className="mt-3 text-4xl font-black text-slate-950 dark:text-white">
        {formatCurrency(price)}
      </h2>
      <p className="mt-3 rounded-lg bg-teal-600/10 p-3 text-sm font-semibold leading-6 text-teal-800 dark:text-teal-200">
        Strong confidence for the supplied feature set. Final market value can vary
        with neighborhood, condition, and comparable sales not included in this compact form.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Indicator icon={Gauge} label="Quality Signal" value={qualityScore} />
        <Indicator icon={TrendingUp} label="Area Signal" value={areaScore} />
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-extrabold text-slate-950 dark:text-white">Input Summary</h3>
        <div className="mt-3 grid gap-3">
          {predictionFields.map((field) => (
            <div
              key={field.name}
              className="flex items-center justify-between rounded-lg border border-slate-200/70 bg-white/50 px-3 py-2 text-sm dark:border-slate-700/70 dark:bg-slate-950/30"
            >
              <span className="font-semibold text-slate-500 dark:text-slate-400">{field.label}</span>
              <span className="font-extrabold text-slate-900 dark:text-white">
                {formatNumber(values[field.name])} {field.suffix}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={onModify} className="secondary-button">
          <Edit3 size={16} />
          Modify Inputs
        </button>
        <button
          type="button"
          onClick={() => downloadPredictionReport(result, values)}
          className="primary-button"
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>
    </motion.section>
  );
}

function Indicator({ icon: Icon, label, value }) {
  const boundedValue = Math.max(0, Math.min(100, value));

  return (
    <div className="rounded-lg border border-slate-200/70 bg-white/55 p-4 dark:border-slate-700/70 dark:bg-slate-950/30">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
        <Icon size={17} />
        {label}
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${boundedValue}%` }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-teal-500"
        />
      </div>
    </div>
  );
}
