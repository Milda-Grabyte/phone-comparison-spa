import { useState } from 'react';
import { useGetService } from './infrastructure/hooks/useGetService';
import PhoneAppRouter from './infrastructure/router/PhoneAppRouter';
import { StyledWrapper } from './styles/wrapper';


function App() {
  const products = useGetService('product');
  const [cart, setCart] = useState(0);
  const [model, setModel] = useState('');

  return (
      <div className='App'>
      <StyledWrapper>
              <PhoneAppRouter model={ model } setModel={ setModel } cart={ cart } setCart={ setCart } products={ products } />
          </StyledWrapper>
    </div>
  );
}

export default App;
