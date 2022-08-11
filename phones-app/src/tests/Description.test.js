import { render, screen, waitFor } from '@testing-library/react';
import itemMock from './mocks/item.mock.json';
import Description from '../infrastructure/components/Description';

describe('test Description component', () => {
  test('transforms data into React JSX element object', () => {
    const view = render(<Description item={ itemMock } />);
    expect(typeof view).toBe('object');
    waitFor(() => expect(screen.getByText('Gprs')).toBeTruthy());
  });
});
