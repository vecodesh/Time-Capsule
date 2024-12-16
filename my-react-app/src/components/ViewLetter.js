import React from 'react';

const ViewLetters = () => {
  const error = true;

  // Inline styles for the container
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
  };

  // Google-style vibrant colors
  const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

  // Utility to alternate colors for letters
  const getGoogleStyle = (index) => ({
    color: googleColors[index % googleColors.length],
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '0 5px',
  });

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {'View Letters'.split('').map((letter, index) => (
          <span key={index} style={getGoogleStyle(index)}>
            {letter}
          </span>
        ))}
      </div>
      {error ? (
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '600px',
          }}
        >
          <p style={{ color: '#EA4335', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Oops!! No email is given.
          </p>
          <button
            style={{
              backgroundColor: '#4285F4',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '20px',
            }}
            onClick={() => (window.location.href = '/')}
          >
            Go to Home <span style={{ marginLeft: '8px' }}>→</span>
          </button>
        </div>
      ) : (
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>No letters available.</p>
      )}
    </div>
  );
};

export default ViewLetters;

