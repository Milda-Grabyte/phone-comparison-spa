import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../infrastructure/components/Header';

test('renders Header component', () => {
  render(
    <BrowserRouter>
        <Header model='Acer Liquid Z110' cart={ 4 } />
    </BrowserRouter>
  );
  expect(screen.getByText('4')).toBeInTheDocument();
});

