import { render, screen } from '@testing-library/react';
import Breadcrumbs from '../infrastructure/components/Breadcrumbs';
import { BrowserRouter } from 'react-router-dom';

describe('test Breadcrumbs component', () => {
  test('renders Breadcrumbs component with home path', () => {
    render(
      <BrowserRouter>
        <Breadcrumbs path={'/'} />
      </BrowserRouter>
    );
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(() => screen.getByText('model')).toThrow();
  });

  test('renders Breadcrumbs component with model path', () => {
    render(
      <BrowserRouter>
        <Breadcrumbs path={'/8hKbH2UHPM_944nRHYN1n'} />
      </BrowserRouter>
    );
    expect(screen.getByText('model')).toBeInTheDocument();
  });
});