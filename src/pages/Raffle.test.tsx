import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil"
import { useUsersList } from "../state/hooks/useUsersList";
import Raffle from "./Raffle";

jest.mock('../state/hooks/useUsersList', () => {
  return { useUsersList: jest.fn() }
})

describe('the page of raffles', () => {
  const users = ['Daniel', 'Fernandes', 'Vieira'];

  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue(users)
  })

  test('should all users can be show your secret santa', () => {
    render(<RecoilRoot><Raffle /></RecoilRoot>)

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(users.length);
  })
})