import React from 'react';

function Column({ children, flexGrow, extraStyles = {} }) {
  return (
    <div style={{
      flexGrow,
      border: '1px solid black',
      padding: '1rem',
      ...extraStyles,
    }}>
      { children }
    </div>
  );
}

export { Column };
