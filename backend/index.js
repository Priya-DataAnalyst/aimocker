import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import startRouter from './routes/start.js';
import answerRouter from './routes/answer.js';

dotenv.config();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/start', startRouter);
app.use('/api/answer', answerRouter);

app.listen(port, () => {
  console.log(`✅ Backend running on http://localhost:${port}`);
});
