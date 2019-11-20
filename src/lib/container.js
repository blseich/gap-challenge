import React from 'react';

function Container({ children }) {
  return (
    <main style={{
      display: 'flex',
      height: '80%',
    }}>
      { children }
    </main>
  );
}

export { Container };
