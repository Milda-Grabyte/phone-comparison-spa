import Header from './infrastructure/components/Header';
import { useGetService } from './infrastructure/hooks/useGetService';
import PhoneAppRouter from './infrastructure/router/PhoneAppRouter';
import { Wrapper } from './styles/wrapper';
import { useState } from 'react';

function App() {
  const products = useGetService('product')
  const [cart, setCart] = useState(0);
    return (
      <div className='App'>
        <Header cart={cart} />
        <Wrapper>
          <PhoneAppRouter cart={cart} setCart={setCart} products={products} />
        </Wrapper>
      </div>
    );
}

export default App;
