import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

// Mock the Outlet component from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div data-testid="outlet">Outlet Content</div>,
}));

describe('MainLayout', () => {
  const renderWithRouter = (component) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  it('renders correctly', () => {
    renderWithRouter(<MainLayout />);
    expect(screen.getByText('App Name')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });

  it('displays sidebar on larger screens', () => {
    renderWithRouter(<MainLayout />);
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('hidden', 'md:flex');
  });

  it('opens mobile sidebar when menu button is clicked', () => {
    renderWithRouter(<MainLayout />);
    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('displays navigation items', () => {
    renderWithRouter(<MainLayout />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});