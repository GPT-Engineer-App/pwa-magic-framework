import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Features from '../../pages/Features';

// Mock the ObjectDetection component
jest.mock('../../components/ObjectDetection', () => {
  return function MockObjectDetection() {
    return <div data-testid="object-detection">Object Detection Component</div>;
  };
});

describe('Features Page', () => {
  it('renders correctly', () => {
    render(<Features />);
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText(/Discover what makes our application stand out/)).toBeInTheDocument();
  });

  it('displays four feature cards', () => {
    render(<Features />);
    expect(screen.getByText('Responsive Design')).toBeInTheDocument();
    expect(screen.getByText('User-Friendly Interface')).toBeInTheDocument();
    expect(screen.getByText('Fast Performance')).toBeInTheDocument();
    expect(screen.getByText('Regular Updates')).toBeInTheDocument();
  });

  it('includes the ObjectDetection component', () => {
    render(<Features />);
    expect(screen.getByText('Object Detection Demo')).toBeInTheDocument();
    expect(screen.getByTestId('object-detection')).toBeInTheDocument();
  });

  it('has responsive design classes', () => {
    render(<Features />);
    const gridContainer = screen.getByText(/Discover what makes/).parentElement?.nextElementSibling;
    expect(gridContainer).toHaveClass('grid', 'gap-6', 'sm:grid-cols-2', 'lg:grid-cols-2');
  });
});