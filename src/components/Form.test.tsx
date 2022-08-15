import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";

// AAA (Arrange, Act and Assert em inglês).
test('um nome que que descreve o que vamos testar', () => {
  // arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
  // agimos (realizamos clicks, definimos valores)
  // afirmamos o que queremos (onde realizamos as expectativas)
})

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

