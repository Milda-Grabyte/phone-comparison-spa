import { render, screen } from '@testing-library/react';
import Cart from '../infrastructure/components/Cart';

test('renders Cart component', () => {
  render(<Cart total={2}/>);
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(() => screen.getByText('3')).toThrow()
});