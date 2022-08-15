import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Form from "./Form";

// AAA (Arrange, Act and Assert em inglês).
test('um nome que que descreve o que vamos testar', () => {
  // arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
  // agimos (realizamos clicks, definimos valores)
  // afirmamos o que queremos (onde realizamos as expectativas)
})

test('when input in blank, new user cannot be added', () => {
  render(<Form />)
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const button = screen.getByRole('button');
  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
})

test('how to add user if name existing', () => {
  render(<RecoilRoot><Form /></RecoilRoot>)
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const button = screen.getByRole('button');

  fireEvent.change(input, { target: { value: 'Daniel Vieira' } });
  fireEvent.click(button);

  expect(input).toHaveFocus();
  expect(input).toHaveValue('');
})