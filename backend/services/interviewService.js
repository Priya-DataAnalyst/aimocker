import { askOpenAI } from './openaiService.js';

export async function generateFirstQuestion(company, level, role) {
  const prompt = `You are a technical interviewer. Create the first interview question for a candidate applying to ${company} as a ${role} at ${level} level. Make it concise and clear.`;
  const response = await askOpenAI(prompt);
  return response;
}

export async function generateFeedback(question, answer) {
  const prompt = `You are a technical interviewer. The question was: "${question}". The candidate answered: "${answer}". Provide short and helpful feedback in 3–4 sentences.`;
  const response = await askOpenAI(prompt);
  return response;
}
