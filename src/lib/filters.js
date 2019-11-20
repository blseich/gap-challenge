import React from 'react';

function Filters() {
  return (
    <>
      <h4>
        filters
      </h4>
      <ul style={{
        listStyleType: 'none',
        padding: '0',
      }}>
        <li style={{
          borderTop: '1px solid black',
          borderBottom: '1px solid black',
          padding: '.5rem',
        }}>color
        </li>
        <li style={{
          borderBottom: '1px solid black',
          padding: '.5rem',
        }}>size
        </li>
        <li style={{
          borderBottom: '1px solid black',
          padding: '.5rem',
        }}>style
        </li>
      </ul>
    </>
  );
}

export { Filters };
