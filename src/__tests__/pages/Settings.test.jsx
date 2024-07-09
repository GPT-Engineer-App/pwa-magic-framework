import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Settings from '../../pages/Settings';

describe('Settings Page', () => {
  it('renders correctly', () => {
    render(<Settings />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText(/Customize your application experience/)).toBeInTheDocument();
  });

  it('displays preference toggles', () => {
    render(<Settings />);
    expect(screen.getByLabelText('Dark Mode')).toBeInTheDocument();
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
  });

  it('allows toggling preferences', () => {
    render(<Settings />);
    const darkModeToggle = screen.getByLabelText('Dark Mode');
    const notificationsToggle = screen.getByLabelText('Notifications');

    fireEvent.click(darkModeToggle);
    fireEvent.click(notificationsToggle);

    expect(darkModeToggle).toBeChecked();
    expect(notificationsToggle).toBeChecked();
  });

  it('displays account management buttons', () => {
    render(<Settings />);
    expect(screen.getByText('Change Password')).toBeInTheDocument();
    expect(screen.getByText('Update Profile')).toBeInTheDocument();
  });

  it('has responsive design classes', () => {
    render(<Settings />);
    const changePasswordButton = screen.getByText('Change Password');
    const updateProfileButton = screen.getByText('Update Profile');

    expect(changePasswordButton).toHaveClass('w-full', 'sm:w-auto');
    expect(updateProfileButton).toHaveClass('w-full', 'sm:w-auto');
  });
});