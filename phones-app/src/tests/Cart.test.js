import { render, screen } from '@testing-library/react';
import Cart from '../infrastructure/components/Cart';

test('renders learn react link', () => {
  render(<Cart total={2}/>);
  const text = screen.getByText('2');
  expect(text).toBeInTheDocument();
});
