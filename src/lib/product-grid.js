import React from 'react';
import { Card } from './';

function ProductGrid({ products }) {
  return (
    <section style={{
      display: 'flex',
      height: '100%',
    }}>
      {
        products.map((pants, i) => (
          <Card
          />
        ))
      }
    </section>
  );
}

export { ProductGrid };
