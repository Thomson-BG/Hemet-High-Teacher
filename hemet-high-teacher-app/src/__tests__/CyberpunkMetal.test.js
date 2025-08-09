import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CyberpunkMetal from '../components/CyberpunkMetal';

describe('CyberpunkMetal Component', () => {
  test('renders cyberpunk metal SVG with accessibility label', () => {
    render(<CyberpunkMetal />);
    
    const svgElement = screen.getByRole('img', { 
      name: /cyberpunk styled metal badge with letters t and i/i 
    });
    
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('cyberpunk-metal-svg');
  });

  test('contains T and i letters in SVG', () => {
    const { container } = render(<CyberpunkMetal />);
    
    const textElements = container.querySelectorAll('text');
    const textContents = Array.from(textElements).map(el => el.textContent);
    
    expect(textContents).toContain('T');
    expect(textContents).toContain('i');
  });

  test('has proper container structure', () => {
    const { container } = render(<CyberpunkMetal />);
    
    const metalContainer = container.querySelector('.cyberpunk-metal-container');
    expect(metalContainer).toBeInTheDocument();
  });

  test('SVG has proper dimensions and viewBox', () => {
    const { container } = render(<CyberpunkMetal />);
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '200');
    expect(svg).toHaveAttribute('height', '120');
    expect(svg).toHaveAttribute('viewBox', '0 0 200 120');
  });
});