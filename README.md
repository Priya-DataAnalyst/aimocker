Here’s a clear and short explanation of this prototype- AI Mock Interviewer project’s frontend and backend setup:
 
✅ Frontend (React + Vite)
•	Tools used: React, Vite, plain CSS, React Router
•	Location: localhost:5173
•	What it does:
o	Displays the Welcome screen, Select Role page, and Interview chat
o	Collects user input (company, role, level)
o	Sends requests to the backend to fetch interview questions and submit answers
•	How it connects to backend:
o	Uses axios or fetch to make POST requests to:
o	http://localhost:3001/api/start     → Get first question  
o	http://localhost:3001/api/answer    → Submit answer and receive feedback
 
✅ Backend (Node.js + Express + OpenAI API)
•	Tools used: Node.js, Express, dotenv, OpenAI SDK
•	Location: localhost:3001
•	What it does:
o	Receives role info from frontend
o	Generates interview questions using OpenAI's API based on role, level, company
o	Accepts user answers and returns feedback from the LLM
•	Security: .env stores OPENAI_API_KEY (not pushed to GitHub)
 
🔁 How they work together:
1.	Frontend runs at localhost:5173
2.	Backend runs separately at localhost:3001
3.	Frontend sends data to backend via HTTP POST
4.	Backend generates question or feedback using GPT and returns to frontend
5.	Frontend displays the result in the chat UI

<img width="1285" alt="image" src="https://github.com/user-attachments/assets/69371b05-15f5-40d7-900c-b46c422706d6" />

<img width="1131" alt="image" src="https://github.com/user-attachments/assets/2c560063-fc39-40c9-bff6-c0bbbfecb32f" />

<img width="1131" alt="image" src="https://github.com/user-attachments/assets/d702cea0-859c-4171-b912-718a3d42dee5" />

