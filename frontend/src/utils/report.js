import jsPDF from "jspdf";

import { predictionFields } from "../data/formFields";
import { formatCurrency, formatNumber } from "./formatters";

export function downloadPredictionReport(result, values) {
  const doc = new jsPDF();
  const createdAt = new Date().toLocaleString();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("House Price Prediction Report", 18, 22);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(`Generated: ${createdAt}`, 18, 32);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(`Predicted Price: ${formatCurrency(result.predicted_price)}`, 18, 48);

  doc.setFontSize(12);
  doc.text("Input Summary", 18, 66);

  doc.setFont("helvetica", "normal");
  let y = 78;
  predictionFields.forEach((field) => {
    const value = formatNumber(values[field.name]);
    doc.text(`${field.label}: ${value} ${field.suffix}`.trim(), 22, y);
    y += 9;
  });

  doc.setFontSize(10);
  doc.text("Estimate produced by the trained house_price_model.pkl pipeline.", 18, 274);
  doc.save("house-price-prediction-report.pdf");
}
