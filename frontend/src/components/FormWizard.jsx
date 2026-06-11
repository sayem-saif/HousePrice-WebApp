import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import FieldInput from "./FieldInput";
import { requiredFields, optionalFields } from "../data/formFields";

export default function FormWizard({
  values,
  errors,
  apiError,
  loading,
  onChange,
  onSubmit,
}) {
  const allSteps = [...requiredFields, ...optionalFields];
  const [currentStep, setCurrentStep] = useState(0);

  const currentField = allSteps[currentStep];
  const isLastStep = currentStep === allSteps.length - 1;
  const isFirstStep = currentStep === 0;
  const progress = ((currentStep + 1) / allSteps.length) * 100;

  const handleNext = () => {
    const fieldError = errors[currentField.name];
    if (fieldError || (values[currentField.name] === "" && currentField.required)) {
      return;
    }
    if (currentStep < allSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isLastStep) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-[#0a0f1d] border border-white/10 p-5 sm:p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm font-mono text-white/40">
          <span>Question {currentStep + 1} of {allSteps.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="mt-2 h-1.5 bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full bg-[#EAB308]"
          />
        </div>
      </div>

      {apiError ? (
        <div className="mb-5 flex gap-3 border border-red-900/60 bg-red-950/30 p-4 text-sm font-semibold text-red-300">
          <AlertCircle size={18} />
          {apiError}
        </div>
      ) : null}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentField.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-[#EAB308]">
              {currentField.required ? "Required" : "Optional"}
            </p>
            <h2 className="mt-2 text-2xl font-header font-bold text-white">
              {currentField.question}
            </h2>
          </div>

          <FieldInput
            field={currentField}
            value={values[currentField.name]}
            error={errors[currentField.name]}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirstStep}
          className="px-6 py-3 border border-white/10 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-40"
        >
          <ChevronLeft size={14} className="mr-2 inline" />
          Previous
        </button>

        {isLastStep ? (
          <button type="submit" disabled={loading} className="bg-[#EAB308] text-black px-8 py-3 text-sm font-header font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors disabled:opacity-60">
            {loading ? <Loader2 className="animate-spin inline mr-2" size={14} /> : <Check className="inline mr-2" size={14} />}
            {loading ? "Analyzing property data..." : "Get Prediction"}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            disabled={errors[currentField.name] || (values[currentField.name] === "" && currentField.required)}
            className="bg-[#EAB308] text-black px-8 py-3 text-sm font-header font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors disabled:opacity-60"
          >
            Next
            <ChevronRight size={14} className="ml-2 inline" />
          </button>
        )}
      </div>

      <div className="mt-6 flex items-center justify-center gap-1" role="tablist" aria-label="Form progress">
        {allSteps.map((field, index) => (
          <button
            key={field.name}
            type="button"
            onClick={() => setCurrentStep(index)}
            disabled={index > currentStep + 1}
            className={`w-2 h-2 rounded-full transition-all ${
              index < currentStep
                ? "bg-[#EAB308]"
                : index === currentStep
                ? "bg-[#EAB308] ring-2 ring-[#EAB308]/50"
                : "bg-white/20"
            }`}
            aria-label={`Step ${index + 1}: ${field.label}`}
            aria-current={index === currentStep ? "step" : undefined}
          />
        ))}
      </div>
    </form>
  );
}
