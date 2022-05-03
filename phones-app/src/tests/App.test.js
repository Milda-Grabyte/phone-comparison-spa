import { render, screen } from '@testing-library/react';
import App from '../App';

describe('test App component', () => {
  test('render App', () => {
    render(<App />, { root: 'concurrent' });
    screen(getByText('Hello')).not.toBeInTheDocument();
  });
});
