import { render, screen, userEvent, waitFor } from '@testing-library/react';
import Actions from '../infrastructure/components/Actions';
import itemMock from './mocks/item.mock.json';

describe('test Actions component', () => {
  const setCart = jest.fn();
  test('should check if default select options are selected', () => {
    render(<Actions item={itemMock} productId={'ZmGrkLRPXOTpxsU4jjAcv'} cart={0} setCart={setCart} />);
    expect(screen.getByRole('option', { name: 'Black' }).selected).toBe(true);
    expect(screen.getByRole('option', { name: '16 GB' }).selected).toBe(true);
    expect(screen.getByRole('option', { name: '32 GB' }).selected).toBe(false);
  });

  test('should allow user to change capacity', () => {
    render(<Actions item={itemMock} productId={'ZmGrkLRPXOTpxsU4jjAcv'} cart={0} setCart={setCart} />);
    waitFor(() => userEvent.selectOptions(screen.getByRole('listbox'), screen.getByRole('option', { name: '32 GB' })));
    waitFor(() => expect(screen.getByRole('option', { name: '32 GB' }).selected).toBe(true));
  });

  test('should allow user to change color', () => {
    render(<Actions item={itemMock} productId={'ZmGrkLRPXOTpxsU4jjAcv'} cart={0} setCart={setCart} />);
    waitFor(() => userEvent.type(screen.getByTestId('select-colors'), 'Black'));
    waitFor(() => expect(setCart).toHaveBeenCalledTimes(0));
  });

  test('should include a button', () => {
    render(<Actions item={itemMock} productId={'ZmGrkLRPXOTpxsU4jjAcv'} cart={0} setCart={setCart} />);
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

});