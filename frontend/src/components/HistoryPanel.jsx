import { Trash2 } from "lucide-react";

import { formatCurrency } from "../utils/formatters";

export default function HistoryPanel({ history, onClear }) {
  return (
    <aside className="glass-panel rounded-lg p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            History
          </p>
          <h3 className="mt-1 text-xl font-extrabold text-slate-950 dark:text-white">
            Recent predictions
          </h3>
        </div>
        {history.length ? (
          <button
            type="button"
            onClick={onClear}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white/70 text-slate-500 transition hover:text-red-500 dark:border-slate-700 dark:bg-slate-900/70"
            aria-label="Clear history"
          >
            <Trash2 size={16} />
          </button>
        ) : null}
      </div>

      <div className="mt-5 space-y-3">
        {history.length ? (
          history.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-slate-200/70 bg-white/55 p-3 dark:border-slate-700/70 dark:bg-slate-950/30"
            >
              <p className="font-extrabold text-slate-950 dark:text-white">
                {formatCurrency(item.predicted_price)}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="rounded-lg border border-dashed border-slate-300 p-4 text-sm leading-6 text-slate-500 dark:border-slate-700 dark:text-slate-400">
            No predictions yet. Your latest estimates will be stored locally in this browser.
          </p>
        )}
      </div>
    </aside>
  );
}
