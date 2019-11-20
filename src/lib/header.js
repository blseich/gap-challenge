import React from 'react';

function Header({ children }) {
  return (
    <header>
      <h1 style={{
        textAlign: 'center',
        border: '1px solid black',
        padding: '1rem',
      }}>
        { children }
      </h1>
    </header>
  );
}

export { Header };
