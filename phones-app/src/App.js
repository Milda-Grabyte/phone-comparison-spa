import Header from './infrastructure/components/Header';
import { useGetService } from './infrastructure/hooks/useGetService';
import PhoneAppRouter from './infrastructure/router/PhoneAppRouter';
import { Wrapper } from './styles/wrapper';

function App() {
  const products = useGetService('product', 1)
    return (
      <div className='App'>
        <Header />
        <Wrapper>
          <PhoneAppRouter products={products} />
        </Wrapper>
      </div>
    );
}

export default App;
