# House Price Prediction Web App

Full-stack ML application for predicting house prices with React, Tailwind CSS,
Framer Motion, Flask, pandas, NumPy, and the trained `house_price_model.pkl`.

## Project Structure

```text
house-price-webapp/
frontend/
  src/
    components/
    data/
    pages/
    services/
    utils/
    App.jsx
backend/
  app.py
  model/
    house_price_model.pkl
  routes/
  utils/
  requirements.txt
```

## Local Development

Backend:

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_BASE_URL=http://localhost:5000` in `frontend/.env` if your backend
runs on a different URL.

## API

`POST /predict`

```json
{
  "overallQuality": 7,
  "livingArea": 1800,
  "garageArea": 480,
  "garageCapacity": 2,
  "basementArea": 950,
  "yearBuilt": 2005,
  "fullBathrooms": 2
}
```

Response:

```json
{
  "predicted_price": 285000.75
}
```

## Deployment

### Backend on Render

1. Create a new Render Web Service from this repository.
2. Set the root directory to `backend`.
3. Build command: `pip install -r requirements.txt`
4. Start command: `gunicorn app:app`
5. Environment variables:
   - `CORS_ORIGINS=https://your-vercel-app.vercel.app`
   - `PORT` is supplied by Render.
6. Confirm `https://your-render-service.onrender.com/health` returns `{"status":"ok"}`.

### Frontend on Vercel

1. Import the repository in Vercel.
2. Set the root directory to `frontend`.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Environment variables:
   - `VITE_API_BASE_URL=https://your-render-service.onrender.com`
6. Deploy and test a prediction from the production URL.
