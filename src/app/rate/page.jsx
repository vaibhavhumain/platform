'use client'

import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

export default function RateUsPage() {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating < 1 || rating > 5) {
      setError('Rating must be between 1 and 5');
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/api/app-ratings`, {
        rating,
        feedback,
        submittedBy,
      });

      setMessage(res.data.msg);
      setError('');
      setRating(5);
      setFeedback('');
      setSubmittedBy('');
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        maxWidth: '500px',
        margin: '2rem auto',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Rate Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Email (optional):</label>
          <input
            type="email"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
            placeholder="example@gmail.com"
            style={{
              width: '100%',
              padding: '0.6rem',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              color: '#333',
              backgroundColor: '#fff',
            }}
          />
        </div>
        <div>
          <label>Rating (1 to 5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
            style={{
              width: '100%',
              padding: '0.6rem',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              color: '#333',
              backgroundColor: '#fff',
            }}
          />
        </div>
        <div>
          <label>Feedback (optional):</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            placeholder="Your thoughts..."
            style={{
              width: '100%',
              padding: '0.6rem',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              color: '#333',
              backgroundColor: '#fff',
              resize: 'vertical',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.7rem 1.5rem',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </form>

      {message && <p style={{ color: 'green', marginTop: '1rem' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}
