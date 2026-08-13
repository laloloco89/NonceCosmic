// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NonceCosmic title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NonceCosmic/i);
    expect(titleElement).toBeInTheDocument();
});
