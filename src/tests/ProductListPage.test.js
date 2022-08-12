import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductListPage from '../infrastructure/pages/ProductListPage';

const productList = [
  {
    'brand': 'Acer',
    'id': 'ZmGrkLRPXOTpxsU4jjAcv',
    'image': 'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
    'model': 'Iconia Talk S',
    'price': '170'
  },
  {
    'brand': 'Acer',
    'id': 'cGjFJlmqNPIwU59AOcY8H',
    'image': 'https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg',
    'model': 'Liquid Z6 Plus',
    'price': '250'
  }
];

describe('test ProductListPage component', () => {
  test('renders component', () => {
    const view = render (
      <BrowserRouter>
        <ProductListPage products={ productList } />
      </BrowserRouter>  
    );
    expect(typeof view).toBe('object');
    expect(screen.getByText('Liquid Z6 Plus')).toBeInTheDocument();
  });
});
