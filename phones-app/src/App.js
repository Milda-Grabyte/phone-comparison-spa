import { Outlet } from 'react-router-dom';
import { useGetProductService } from './infrastructure/hooks/useGetProductService';
import PhoneAppRouter from './infrastructure/router/PhoneAppRouter';

function App() {
  const products = useGetProductService();
  return (
    <div className="App">
      <PhoneAppRouter products={ products }/>
      <Outlet />
    </div>
  );
}

export default App;
