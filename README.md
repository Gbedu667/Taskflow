# TaskFlow – SFE Project

TaskFlow is a simple task management system built to demonstrate
the Software Development Life Cycle (SDLC).

Backend: taskflow_api  
API Endpoint: /api/tasks  
Database: taskflow.db

HOW TO RUN (EXAM SAFE)
cd backend
pip install -r requirements.txt
uvicorn taskflow_api.main:app --reload
