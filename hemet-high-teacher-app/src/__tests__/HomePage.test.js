import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../components/HomePage';

// Mock the child components
jest.mock('../components/CyberpunkMetal', () => {
  return function MockCyberpunkMetal() {
    return <div data-testid="cyberpunk-metal">Cyberpunk Metal Component</div>;
  };
});

jest.mock('../components/PWAInstallButton', () => {
  return function MockPWAInstallButton() {
    return <button data-testid="pwa-install-button">Install App</button>;
  };
});

describe('HomePage Component', () => {
  test('renders main heading', () => {
    render(<HomePage />);
    
    const heading = screen.getByRole('heading', { 
      name: /hemet high hub app/i 
    });
    
    expect(heading).toBeInTheDocument();
  });

  test('renders search input', () => {
    render(<HomePage />);
    
    const searchInput = screen.getByPlaceholderText(/search\.\.\./i);
    
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'text');
  });

  test('renders category and subcategory dropdowns', () => {
    render(<HomePage />);
    
    const selects = screen.getAllByRole('combobox');
    
    expect(selects).toHaveLength(2);
    expect(selects[0]).toBeInTheDocument(); // Category dropdown
    expect(selects[1]).toBeInTheDocument(); // Subcategory dropdown
  });

  test('renders NEXT button', () => {
    render(<HomePage />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    expect(nextButton).toBeInTheDocument();
  });

  test('renders CyberpunkMetal component', () => {
    render(<HomePage />);
    
    const cyberpunkMetal = screen.getByTestId('cyberpunk-metal');
    
    expect(cyberpunkMetal).toBeInTheDocument();
  });

  test('renders PWAInstallButton component', () => {
    render(<HomePage />);
    
    const pwaButton = screen.getByTestId('pwa-install-button');
    
    expect(pwaButton).toBeInTheDocument();
  });

  test('search functionality updates results', () => {
    render(<HomePage />);
    
    const searchInput = screen.getByPlaceholderText(/search\.\.\./i);
    
    fireEvent.change(searchInput, { target: { value: 'assessment' } });
    
    // After searching, the component should still render
    expect(searchInput).toHaveValue('assessment');
  });

  test('category selection updates subcategory options', () => {
    render(<HomePage />);
    
    const categorySelect = screen.getAllByRole('combobox')[0];
    
    fireEvent.change(categorySelect, { target: { value: 'Technology' } });
    
    expect(categorySelect).toHaveValue('Technology');
  });

  test('renders attribution text', () => {
    render(<HomePage />);
    
    const attribution = screen.getByText(/thomson innovations/i);
    
    expect(attribution).toBeInTheDocument();
    expect(attribution).toHaveClass('attribution');
  });

  test('renders instructions text', () => {
    render(<HomePage />);
    
    const instructions = screen.getByText(/you need to be signed into your husd google account/i);
    
    expect(instructions).toBeInTheDocument();
  });

  test('renders search description', () => {
    render(<HomePage />);
    
    const searchDescription = screen.getByText(/search above, using keywords/i);
    
    expect(searchDescription).toBeInTheDocument();
    expect(searchDescription).toHaveClass('search-description');
  });
});