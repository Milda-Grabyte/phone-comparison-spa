import { render, screen } from '@testing-library/react';
import Header from '../infrastructure/components/Header';
import { BrowserRouter } from 'react-router-dom';

  test('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header cart={4} />
      </BrowserRouter>
    );
    expect(screen.getByText('4')).toBeInTheDocument();
  });

