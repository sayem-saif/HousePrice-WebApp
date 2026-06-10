import { AlertCircle, Loader2, Sparkles } from "lucide-react";

import FieldInput from "./FieldInput";
import { predictionFields } from "../data/formFields";

export function validatePrediction(values) {
  const errors = {};

  predictionFields.forEach((field) => {
    const number = Number(values[field.name]);
    if (values[field.name] === "" || Number.isNaN(number)) {
      errors[field.name] = "Enter a valid number.";
    } else if (number < field.min || number > field.max) {
      errors[field.name] = `Use a value from ${field.min} to ${field.max}.`;
    }
  });

  return errors;
}

export default function PredictionForm({
  values,
  errors,
  apiError,
  loading,
  onChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="glass-panel rounded-lg p-5 sm:p-6">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-wide text-teal-700 dark:text-teal-300">
          Prediction Inputs
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">
          Enter property details
        </h2>
      </div>

      {apiError ? (
        <div className="mb-5 flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300">
          <AlertCircle size={18} />
          {apiError}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        {predictionFields.map((field) => (
          <FieldInput
            key={field.name}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={onChange}
          />
        ))}
      </div>

      <button type="submit" disabled={loading} className="primary-button mt-7 w-full sm:w-auto">
        {loading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
        {loading ? "Calculating estimate" : "Predict House Price"}
      </button>
    </form>
  );
}
