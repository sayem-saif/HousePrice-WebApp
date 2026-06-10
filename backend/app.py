import os

from flask import Flask, jsonify
from flask_cors import CORS

from routes.predict import predict_bp


def create_app() -> Flask:
    app = Flask(__name__)
    allowed_origins = os.getenv("CORS_ORIGINS", "*").split(",")
    CORS(app, resources={r"/*": {"origins": allowed_origins}})

    app.register_blueprint(predict_bp)

    @app.get("/health")
    def health_check():
        return jsonify({"status": "ok", "service": "house-price-api"})

    return app


app = create_app()


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=os.getenv("FLASK_DEBUG") == "1")
