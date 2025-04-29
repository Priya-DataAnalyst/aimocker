import express from 'express';
import { generateFeedback } from '../services/interviewService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: 'Missing question or answer' });
  }

  try {
    const feedback = await generateFeedback(question, answer);
    res.json({ feedback });
  } catch (error) {
    console.error('Error generating feedback:', error);
    res.status(500).json({ error: 'Failed to generate feedback' });
  }
});

export default router;
