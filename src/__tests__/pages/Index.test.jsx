import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from '../../pages/Index';

describe('Index Page', () => {
  it('renders correctly', () => {
    render(<Index />);
    expect(screen.getByText('Welcome to Our App')).toBeInTheDocument();
    expect(screen.getByText(/This is the home page of your application/)).toBeInTheDocument();
  });

  it('displays three feature cards', () => {
    render(<Index />);
    expect(screen.getAllByText(/Feature \d/)).toHaveLength(3);
    expect(screen.getAllByText('Learn More')).toHaveLength(3);
  });

  it('has responsive design classes', () => {
    render(<Index />);
    const gridContainer = screen.getByText(/This is the home page/).parentElement?.nextElementSibling;
    expect(gridContainer).toHaveClass('grid', 'gap-6', 'sm:grid-cols-2', 'lg:grid-cols-3');
  });
});