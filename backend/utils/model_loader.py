from functools import lru_cache
from pathlib import Path

import joblib


MODEL_PATH = Path(__file__).resolve().parents[1] / "model" / "house_price_model.pkl"


@lru_cache(maxsize=1)
def load_model():
    """Load the trained model once per process."""
    if not MODEL_PATH.exists():
        raise FileNotFoundError(f"Model file not found at {MODEL_PATH}")
    return joblib.load(MODEL_PATH)
