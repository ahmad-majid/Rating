import React from 'react';

function ThankYouPage({ message }) {
  return (
    <div className="thank-you-page">
      <h2>Thank You!</h2>
      <div className="thanks--rating">{message}</div>
    </div>
  );
}

export default ThankYouPage;
