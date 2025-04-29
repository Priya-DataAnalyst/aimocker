import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Interview.css'; // for styling

const Interview = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNextPrompt, setShowNextPrompt] = useState(false);
  const [startPayload] = useState({
    company: 'Google',
    level: 'L2',
    role: 'Data Analyst',
  });

  // Fetch first question
  useEffect(() => {
    const startInterview = async () => {
      try {
        const res = await axios.post('http://localhost:3001/api/start', startPayload);
        setCurrentQuestion(res.data.question);
      } catch (err) {
        console.error('Failed to fetch first question:', err);
      }
    };

    startInterview();
  }, []);

  const handleSubmitAnswer = async () => {
    if (!userAnswer.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3001/api/answer', {
        question: currentQuestion,
        answer: userAnswer,
      });

      const newEntry = {
        question: currentQuestion,
        answer: userAnswer,
        feedback: res.data.feedback,
      };

      setChatHistory([...chatHistory, newEntry]);
      setUserAnswer('');
      setShowNextPrompt(true);
    } catch (err) {
      console.error('Error sending answer:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleNextQuestion = async () => {
    setLoading(true);
    setShowNextPrompt(false);
    try {
      const res = await axios.post('http://localhost:3001/api/start', startPayload);
      setCurrentQuestion(res.data.question);
    } catch (err) {
      console.error('Failed to fetch next question:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="interview-container">
      <h1 className="interview-title">AI Mock Interview</h1>
      <div className="chat-box">
        {chatHistory.map((item, index) => (
          <div key={index} className="chat-block">
            <div className="chat-question"><strong>Question:</strong> {item.question}</div>
            <div className="chat-answer"><strong>You:</strong> {item.answer}</div>
            <div className="chat-feedback"><strong>Feedback:</strong> {item.feedback}</div>
          </div>
        ))}

        {currentQuestion && !showNextPrompt && (
          <div className="chat-block">
            <div className="chat-question"><strong>Question:</strong> {currentQuestion}</div>
            <textarea
              className="answer-box"
              rows="4"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer here..."
            />
            <button onClick={handleSubmitAnswer} disabled={loading} className="submit-btn">
              {loading ? 'Submitting...' : 'Submit Answer'}
            </button>
          </div>
        )}

        {showNextPrompt && (
          <div className="next-prompt">
            <p>Would you like to continue to the next question?</p>
            <button onClick={handleNextQuestion} disabled={loading} className="next-btn">
              {loading ? 'Loading...' : 'Yes, Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interview;
