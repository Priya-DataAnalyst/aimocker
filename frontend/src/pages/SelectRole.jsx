import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectRole.css'; // import the custom CSS

const SelectRole = () => {
  const [company, setCompany] = useState('');
  const [level, setLevel] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const companies = ['Google', 'Meta', 'Amazon', 'OpenAI'];
  const levels = ['L1', 'L2', 'L3', 'L4'];
  const roles = ['Data Analyst', 'Data Scientist', 'ML Engineer'];

  const handleStart = () => {
    if (company && level && role) {
      navigate('/interview');
    } else {
      alert('Please select company, level, and role before starting.');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="heading">Customize Your Mock Interview</h1>

        <div className="section">
          <h2>Select Your Company</h2>
          <div className="company-grid">
            {companies.map((c) => (
              <button
                key={c}
                className={`btn company-btn ${company === c ? 'selected' : ''}`}
                onClick={() => setCompany(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Select Your Level</h2>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="dropdown"
          >
            <option value="">-- Select Level --</option>
            {levels.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="section">
          <h2>Select Your Role</h2>
          <div className="role-grid">
            {roles.map((r) => (
              <button
                key={r}
                className={`btn role-btn ${role === r ? 'selected' : ''}`}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <p className="preview">
          {company && level && role
            ? `Preview: Prep for ${company} ${level} ${role}`
            : 'Please select all options to see your interview preview.'}
        </p>

        <button onClick={handleStart} className="start-btn">
          Start Interview
        </button>
      </div>
    </div>
  );
};

export default SelectRole;
