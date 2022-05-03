import { render, screen, waitFor } from '@testing-library/react';
import Description from '../infrastructure/components/Description';
import itemMock from './mocks/item.mock.json';

describe('test Description component', () => {
  test('transforms data into React JSX element object', () => {
    const layout = render(<Description item={itemMock} />);
    expect(typeof layout).toBe('object');
    waitFor(() => expect(screen.getByText('Gprs')).toBeTruthy());
  });
});
