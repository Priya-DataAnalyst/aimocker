import express from 'express';
import { generateFirstQuestion } from '../services/interviewService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { company, level, role } = req.body;

  if (!company || !level || !role) {
    return res.status(400).json({ error: 'Missing company, level, or role' });
  }

  try {
    const question = await generateFirstQuestion(company, level, role);
    res.json({ question });
  } catch (error) {
    console.error('Error generating question:', error);
    res.status(500).json({ error: 'Failed to generate question' });
  }
});

export default router;
