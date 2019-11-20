import React from 'react';
import products from './data/products';
import {
  Header,
  ProductGrid,
  Container,
  Column,
  Filters,
} from './lib';

const appStyles = { height: '100vh', };

function App() {
  return (
    <div style={appStyles}>
      <Header>
        jeans are totally the best
      </Header>

      <Container>
        <Column flexGrow='1'>
          <Filters/>
        </Column>

        <Column
          flexGrow='4'
          extraStyles={{
            marginLeft: '.2rem',
          }}
        >
          <ProductGrid products={products} />
        </Column>
      </Container>
    </div>
  );
}

export default App;
