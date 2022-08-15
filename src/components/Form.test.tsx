import { render, screen } from "@testing-library/react";
import React from "react";
// Jest

test('when input in blank, new user cannot be added', () => {
  render(<Form />)
  // find input in DON
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  // find button
  const button = screen.getByRole('button');
  // ensure input to be in the document
  expect(input).toBeInTheDocument();
  // ensure button to be disabled
  expect(button).toBeDisabled();
})