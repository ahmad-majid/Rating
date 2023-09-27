import React, { useState } from 'react';
import './App.css';
import thankyou from './thank-you.svg';

function App() {
  const [rating, setRating] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleRatingSubmit = () => {
    if (rating === null) return;
    setShowThankYou(true);
  };

  return (
    <div className="container">
      <div
        id="card-a"
        className={`card card-question ${showThankYou ? 'inactive' : 'active'}`}
      >
        <img
          className="star-img"
          width="17"
          height="16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png"
          alt="star"
        />
        <div className="text-section">
          <h2 className="title">How did we do?</h2>
          <p className="gen-text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <ul>
          {[1, 2, 3, 4, 5].map((star) => (
            <li
              key={star}
              className={`nr-btn ${rating === star ? 'selected-star' : ''}`}
              onClick={() => setRating(star)}
            >
              {star}
            </li>
          ))}
        </ul>
        <button id="submit-btn" onClick={handleRatingSubmit}>
          SUBMIT
        </button>
      </div>

      <div
        id="card-b"
        className={`card card-answer ${showThankYou ? 'active' : 'inactive'}`}
      >
        <img
          className="svg-img"
          width="162"
          height="108"
          src={thankyou}
          alt="thanks"
        />
        <div className="selection">
          <p className="msg-text">You selected {rating} out of 5</p>
        </div>
        <div className="text-section-2">
          <h2 className="title">Thank you!</h2>
          <p className="gen-text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>

      {/* Conditionally render the attribution */}
      {!showThankYou && (
        <div className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/profile/ahmad-majid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://www.linkedin.com/in/ahmad-majid-957ba9200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahmad Majid
          </a>
          .
        </div>
      )}
    </div>
  );
}

export default App;
