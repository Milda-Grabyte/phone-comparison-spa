import { useGetService } from './infrastructure/hooks/useGetService';
import PhoneAppRouter from './infrastructure/router/PhoneAppRouter';
import { StyledWrapper } from './styles/wrapper';
import { useState } from 'react';


function App() {
  const products = useGetService('product')
  const [cart, setCart] = useState(0);

    return (
      <div className='App'>
        <StyledWrapper>
          <PhoneAppRouter cart={cart} setCart={setCart} products={products} />
        </StyledWrapper>
      </div>
    );
}

export default App;
