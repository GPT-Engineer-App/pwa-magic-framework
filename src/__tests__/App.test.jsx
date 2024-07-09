import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mock the page components
jest.mock('../pages/Index', () => () => <div>Index Page</div>);
jest.mock('../pages/Features', () => () => <div>Features Page</div>);
jest.mock('../pages/Settings', () => () => <div>Settings Page</div>);
jest.mock('../pages/Contact', () => () => <div>Contact Page</div>);

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('App Name')).toBeInTheDocument();
  });

  it('renders Index page on root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Index Page')).toBeInTheDocument();
  });

  it('renders Features page on /features route', () => {
    render(
      <MemoryRouter initialEntries={['/features']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Features Page')).toBeInTheDocument();
  });

  it('renders Settings page on /settings route', () => {
    render(
      <MemoryRouter initialEntries={['/settings']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Settings Page')).toBeInTheDocument();
  });

  it('renders Contact page on /contact route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Contact Page')).toBeInTheDocument();
  });
});