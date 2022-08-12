import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductDetailPage from '../infrastructure/pages/ProductDetailPage';

describe('test ProductListPage component', () => {
  test('renders component', () => {
    const setCart = jest.fn();
    const view = render(
        <BrowserRouter>
          <ProductDetailPage setModel={ jest.fn() } cart={ 2 } setCart={ setCart }/>
      </BrowserRouter>  
    );
    expect(typeof view).toBe('object');
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
