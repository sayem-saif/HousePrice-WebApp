import { useState } from "react";

import HistoryPanel from "../components/HistoryPanel";
import PredictionForm, { validatePrediction } from "../components/PredictionForm";
import ResultPanel from "../components/ResultPanel";
import { defaultFormValues } from "../data/formFields";
import { predictHousePrice } from "../services/api";
import { clearHistory, loadHistory, savePrediction } from "../services/history";

export default function PredictPage() {
  const [values, setValues] = useState(defaultFormValues);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(loadHistory);

  function handleChange(name, value) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validatePrediction(values);
    setErrors(nextErrors);
    setApiError("");

    if (Object.keys(nextErrors).length) {
      return;
    }

    setLoading(true);
    try {
      const numericPayload = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, Number(value)])
      );
      const data = await predictHousePrice(numericPayload);
      setResult(data);
      setHistory(
        savePrediction({
          id: crypto.randomUUID(),
          predicted_price: data.predicted_price,
          inputs: numericPayload,
          createdAt: new Date().toISOString(),
        })
      );
    } catch (error) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleClearHistory() {
    clearHistory();
    setHistory([]);
  }

  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
      <section className="space-y-6">
        <PredictionForm
          values={values}
          errors={errors}
          apiError={apiError}
          loading={loading}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <ResultPanel result={result} values={values} onModify={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      </section>
      <HistoryPanel history={history} onClear={handleClearHistory} />
    </main>
  );
}
