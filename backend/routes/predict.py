from flask import Blueprint, jsonify, request

from utils.model_loader import load_model
from utils.preprocessing import build_feature_frame, normalize_payload


predict_bp = Blueprint("predict", __name__)


@predict_bp.post("/predict")
def predict_price():
    payload = request.get_json(silent=True) or {}

    try:
        model = load_model()
        features = build_feature_frame(payload, model)
        prediction = model.predict(features)
        predicted_price = float(prediction[0])

        return jsonify(
            {
                "predicted_price": round(predicted_price, 2),
                "inputs": normalize_payload(payload),
            }
        )
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except FileNotFoundError as exc:
        return jsonify({"error": str(exc)}), 500
    except Exception as exc:
        return jsonify({"error": "Prediction failed.", "details": str(exc)}), 500
