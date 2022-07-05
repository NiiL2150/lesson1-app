import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  for (let i = 0; i <= 9; i++) {
    screen.getByText(i.toString()).click();
  }
  screen.getByText('.').click();
  expect(screen.getByTestId('calcOutput')).toHaveValue('0123456789.');
});
