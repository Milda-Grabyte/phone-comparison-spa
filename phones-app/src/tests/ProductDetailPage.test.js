import { render, screen} from '@testing-library/react';
import ProductDetailPage from '../infrastructure/pages/ProductDetailPage';
import { BrowserRouter } from 'react-router-dom';

describe('test ProductListPage component', () => {
  test('renders component', () => {
    const setCart = jest.fn();
    const layout = render(
        <BrowserRouter>
            <ProductDetailPage cart={2} setCart={setCart}/>
        </BrowserRouter>  
    );
    expect(typeof layout).toBe('object');
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
