import { render, screen, waitFor } from '@testing-library/react';
import ProductListPage from '../infrastructure/pages/ProductListPage';
import { BrowserRouter } from 'react-router-dom';

const productList = [
    {
      "id": "ZmGrkLRPXOTpxsU4jjAcv",
      "brand": "Acer",
      "model": "Iconia Talk S",
      "price": "170",
      "image": "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
    },
    {
      "id": "cGjFJlmqNPIwU59AOcY8H",
      "brand": "Acer",
      "model": "Liquid Z6 Plus",
      "price": "250",
      "image": "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
    }
]

describe('test ProductListPage component', () => {
  test('renders component', () => {
    const layout = render(
        <BrowserRouter>
            <ProductListPage products={productList} />
        </BrowserRouter>  
    );
    expect(typeof layout).toBe('object');
    expect(screen.getByText('Liquid Z6 Plus')).toBeInTheDocument();
  });
});
