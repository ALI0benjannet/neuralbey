# Neuralbey Project

## Backend (Django)

1. Navigate to the backend directory:
   ```powershell
   cd backend
   ```
2. (Optional) Create and activate a virtual environment:
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```powershell
   python manage.py migrate
   ```
5. Start the development server:
   ```powershell
   python manage.py runserver
   ```

## Frontend (Vite + React)

1. Navigate to the frontend directory:
   ```powershell
   cd frontend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the development server:
   ```powershell
   npm run dev
   ```

---

- The backend will be available at `http://127.0.0.1:8000/`
- The frontend will be available at the address shown in the terminal (usually `http://localhost:5173/`)
