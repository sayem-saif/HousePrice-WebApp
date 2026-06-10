import { Info } from "lucide-react";

export default function FieldInput({ field, value, error, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between gap-3 text-sm font-bold text-slate-700 dark:text-slate-200">
        {field.label}
        <span className="group relative inline-flex text-slate-400">
          <Info size={16} />
          <span className="pointer-events-none absolute right-0 top-7 z-20 w-64 rounded-lg border border-slate-200 bg-white p-3 text-xs font-medium leading-5 text-slate-600 opacity-0 shadow-xl transition group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            {field.tooltip}
          </span>
        </span>
      </span>
      <div className="relative">
        <input
          className={`input-field pr-16 ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/15" : ""}`}
          type="number"
          min={field.min}
          max={field.max}
          step={field.step}
          value={value}
          onChange={(event) => onChange(field.name, event.target.value)}
        />
        {field.suffix ? (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
            {field.suffix}
          </span>
        ) : null}
      </div>
      {error ? <p className="mt-2 text-xs font-semibold text-red-500">{error}</p> : null}
    </label>
  );
}
