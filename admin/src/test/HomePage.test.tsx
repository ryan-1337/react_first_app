import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../pages/HomePage/HomePage';

test('should return the words', () => {
  render(<HomePage />);

  // expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText("Acceuil")).toBeInTheDocument();
  expect(screen.getByText("GoodNight - Admin")).toBeInTheDocument();

  const allFormules = screen.getAllByText('Formules')
  allFormules.forEach(formule => {
    expect(formule).toBeInTheDocument()
  })

  const allUsers = screen.getAllByText('Utilisateurs')
  allUsers.forEach(user => {
    expect(user).toBeInTheDocument()
  })
});
