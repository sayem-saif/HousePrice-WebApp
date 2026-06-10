import math
from typing import Any

import numpy as np
import pandas as pd


CANONICAL_FEATURES = [
    "OverallQual",
    "GrLivArea",
    "GarageArea",
    "GarageCars",
    "TotalBsmtSF",
    "YearBuilt",
    "FullBath",
]

FIELD_ALIASES = {
    "overallQuality": "OverallQual",
    "livingArea": "GrLivArea",
    "garageArea": "GarageArea",
    "garageCapacity": "GarageCars",
    "basementArea": "TotalBsmtSF",
    "yearBuilt": "YearBuilt",
    "fullBathrooms": "FullBath",
}

FIELD_LIMITS = {
    "OverallQual": (1, 10),
    "GrLivArea": (200, 10000),
    "GarageArea": (0, 2000),
    "GarageCars": (0, 5),
    "TotalBsmtSF": (0, 7000),
    "YearBuilt": (1800, 2030),
    "FullBath": (0, 5),
}

FEATURE_DEFAULTS = {
    "Id": 0,
    "MSSubClass": 60,
    "MSZoning": "RL",
    "LotFrontage": 70,
    "LotArea": 9600,
    "Street": "Pave",
    "Alley": "None",
    "LotShape": "Reg",
    "LandContour": "Lvl",
    "Utilities": "AllPub",
    "LotConfig": "Inside",
    "LandSlope": "Gtl",
    "Neighborhood": "NAmes",
    "Condition1": "Norm",
    "Condition2": "Norm",
    "BldgType": "1Fam",
    "HouseStyle": "1Story",
    "OverallQual": 5,
    "OverallCond": 5,
    "YearBuilt": 1995,
    "YearRemodAdd": 1995,
    "RoofStyle": "Gable",
    "RoofMatl": "CompShg",
    "Exterior1st": "VinylSd",
    "Exterior2nd": "VinylSd",
    "MasVnrType": "None",
    "MasVnrArea": 0,
    "ExterQual": "TA",
    "ExterCond": "TA",
    "Foundation": "PConc",
    "BsmtQual": "TA",
    "BsmtCond": "TA",
    "BsmtExposure": "No",
    "BsmtFinType1": "Unf",
    "BsmtFinSF1": 0,
    "BsmtFinType2": "Unf",
    "BsmtFinSF2": 0,
    "BsmtUnfSF": 900,
    "TotalBsmtSF": 900,
    "Heating": "GasA",
    "HeatingQC": "TA",
    "CentralAir": "Y",
    "Electrical": "SBrkr",
    "1stFlrSF": 1000,
    "2ndFlrSF": 0,
    "LowQualFinSF": 0,
    "GrLivArea": 1500,
    "BsmtFullBath": 0,
    "BsmtHalfBath": 0,
    "FullBath": 2,
    "HalfBath": 1,
    "BedroomAbvGr": 3,
    "KitchenAbvGr": 1,
    "KitchenQual": "TA",
    "TotRmsAbvGrd": 6,
    "Functional": "Typ",
    "Fireplaces": 0,
    "FireplaceQu": "None",
    "GarageType": "Attchd",
    "GarageYrBlt": 1995,
    "GarageFinish": "Unf",
    "GarageCars": 2,
    "GarageArea": 450,
    "GarageQual": "TA",
    "GarageCond": "TA",
    "PavedDrive": "Y",
    "WoodDeckSF": 0,
    "OpenPorchSF": 40,
    "EnclosedPorch": 0,
    "3SsnPorch": 0,
    "ScreenPorch": 0,
    "PoolArea": 0,
    "PoolQC": "None",
    "Fence": "None",
    "MiscFeature": "None",
    "MiscVal": 0,
    "MoSold": 6,
    "YrSold": 2010,
    "SaleType": "WD",
    "SaleCondition": "Normal",
}


def _to_number(value: Any, field: str) -> float:
    if value is None or value == "":
        raise ValueError(f"{field} is required.")
    try:
        number = float(value)
    except (TypeError, ValueError) as exc:
        raise ValueError(f"{field} must be a number.") from exc
    if not math.isfinite(number):
        raise ValueError(f"{field} must be a finite number.")
    return number


def normalize_payload(payload: dict[str, Any]) -> dict[str, float]:
    """Validate API payload and return model-facing Ames feature names."""
    normalized: dict[str, float] = {}

    for incoming_name, feature_name in FIELD_ALIASES.items():
        raw_value = payload.get(incoming_name, payload.get(feature_name))
        value = _to_number(raw_value, incoming_name)
        min_value, max_value = FIELD_LIMITS[feature_name]
        if value < min_value or value > max_value:
            raise ValueError(
                f"{incoming_name} must be between {min_value:g} and {max_value:g}."
            )
        normalized[feature_name] = value

    return normalized


def build_feature_frame(payload: dict[str, Any], model: Any) -> pd.DataFrame:
    """Build a dataframe compatible with the saved estimator or pipeline."""
    values = normalize_payload(payload)
    defaults = FEATURE_DEFAULTS.copy()
    defaults.update(values)
    defaults["YearRemodAdd"] = max(defaults["YearBuilt"], defaults["YearRemodAdd"])
    defaults["GarageYrBlt"] = defaults["YearBuilt"] if defaults["GarageCars"] else 0
    defaults["BsmtUnfSF"] = defaults["TotalBsmtSF"]
    defaults["1stFlrSF"] = max(defaults["TotalBsmtSF"], min(defaults["GrLivArea"], 2200))
    defaults["2ndFlrSF"] = max(defaults["GrLivArea"] - defaults["1stFlrSF"], 0)
    defaults["TotRmsAbvGrd"] = max(4, min(12, round(defaults["GrLivArea"] / 300)))
    defaults["HouseStyle"] = "2Story" if defaults["2ndFlrSF"] > 0 else "1Story"
    defaults["GarageType"] = "Attchd" if defaults["GarageCars"] else "None"
    defaults["GarageFinish"] = "Unf" if defaults["GarageCars"] else "None"
    defaults["GarageQual"] = "TA" if defaults["GarageCars"] else "None"
    defaults["GarageCond"] = "TA" if defaults["GarageCars"] else "None"

    feature_names = getattr(model, "feature_names_in_", None)
    if feature_names is None and hasattr(model, "steps"):
        for _, step in model.steps:
            feature_names = getattr(step, "feature_names_in_", None)
            if feature_names is not None:
                break

    if feature_names is None:
        feature_names = CANONICAL_FEATURES

    row = {}
    for feature in list(feature_names):
        row[feature] = defaults.get(feature, 0)

    frame = pd.DataFrame([row], columns=list(feature_names))

    numeric_columns = [
        feature
        for feature, value in FEATURE_DEFAULTS.items()
        if isinstance(value, (int, float)) and feature in frame.columns
    ]
    for column in numeric_columns:
        frame[column] = pd.to_numeric(frame[column], errors="coerce")

    return frame.replace([np.inf, -np.inf], np.nan).fillna(0)
