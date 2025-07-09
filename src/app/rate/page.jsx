'use client';

import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

export default function RateUsPage() {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [appName, setAppName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!appName) {
      setError('Please select the app you are rating.');
      return;
    }

    if (rating < 1 || rating > 5) {
      setError('Rating must be between 1 and 5');
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/api/app-ratings`, {
        rating,
        feedback,
        submittedBy,
        appName,
      });

      setMessage(res.data.msg || 'Feedback submitted successfully!');
      setError('');
      setRating(5);
      setFeedback('');
      setSubmittedBy('');
      setAppName('');
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)',
        minHeight: '100vh',
        padding: '3rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
      `}</style>

      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '2.5rem',
          borderRadius: '16px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '2rem',
            fontWeight: '600',
            color: '#333',
          }}
        >
          🌟 Rate Our App
        </h1>

        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Select App</label>
          <select
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            required
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            <option value="">-- Select App --</option>
            <option value="Leads Management">Leads Management</option>
            <option value="Bus Media Gallery">Bus Media Gallery</option>
            <option value="Bus Production Tracker">Bus Production Tracker</option>
            <option value="GobindCoach Website">GobindCoach Website</option>
            <option value="Sales Portal">Sales Portal</option>
            <option value="Inventory Management">Inventory Management</option>
            <option value="HR Management">HR Management</option>
            <option value="Enquiry Dashboard">Enquiry Dashboard</option>
            <option value="Admin Portal">Admin Portal</option>
            <option value="Bus Models Portal">Bus Models Portal</option>
            <option value="Purchase Tracker">Purchase Tracker</option>
          </select>

          <label style={labelStyle}>Your Email (optional)</label>
          <input
            type="email"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
            placeholder="example@gmail.com"
            style={inputStyle}
          />

          <label style={labelStyle}>Rating (1 to 5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
            style={inputStyle}
          />

          <label style={labelStyle}>Feedback (optional)</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your experience..."
            rows="4"
            style={textareaStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit Feedback
          </button>
        </form>

        {message && <p style={{ color: '#2e7d32', marginTop: '1rem' }}>{message}</p>}
        {error && <p style={{ color: '#d32f2f', marginTop: '1rem' }}>{error}</p>}
      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  marginBottom: '0.4rem',
  fontWeight: '500',
  color: '#444',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1.2rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '1rem',
  backgroundColor: '#fff',
  color: '#000',
  transition: '0.3s ease',
  outline: 'none',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
};

const buttonStyle = {
  width: '100%',
  padding: '0.8rem',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: '0.3s ease',
};
