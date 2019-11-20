import React from 'react';

function Card({ description, img }) {
  return (
    <div style={{
      border: '1px solid black',
      height: '20%',
      width: '15%',
      background: `url("${img}")`,
      margin: '.2rem',
    }}>
      {description}
    </div>
  );
}

export { Card };
