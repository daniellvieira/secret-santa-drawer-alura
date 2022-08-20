import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil"
import { useResultDraw } from "../state/hooks/useResultDraw";
import { useUsersList } from "../state/hooks/useUsersList";
import Draw from "./Draw";

jest.mock('../state/hooks/useUsersList', () => {
  return { useUsersList: jest.fn() }
})

jest.mock('../state/hooks/useResultDraw', () => {
  return { useResultDraw: jest.fn() }
})

describe('the page of draw', () => {
  const users = ['Daniel', 'Fernandes', 'Vieira'];
  const result = new Map([
    ['Daniel', 'Fernandes'],
    ['Fernandes', 'Vieira'],
    ['Vieira', 'Daniel']
  ]);

  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue(users);
    (useResultDraw as jest.Mock).mockReturnValue(result);
  })

  test('should all users can be show your secret santa', () => {
    render(<RecoilRoot><Draw /></RecoilRoot>)

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(users.length);
  })

  test('', () => {
    render(<RecoilRoot><Draw /></RecoilRoot>)

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: users[0]
      }
    });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const secretSanta = screen.getByRole('alert');
    expect(secretSanta).toBeInTheDocument();
  })
})