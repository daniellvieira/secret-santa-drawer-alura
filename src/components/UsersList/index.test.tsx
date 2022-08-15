import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import UsersList from "."
import { useUsersList } from "../../state/hooks/useUsersList"

jest.mock('../../state/hooks/useUsersList', () => {
  return { useUsersList: jest.fn() }
})

describe('when users list is blank', () => {
  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue([])
  })

  test('should be render without elements', () => {
    render(<RecoilRoot><UsersList /></RecoilRoot>)

    const itens = screen.queryAllByRole('listitem');
  
    expect(itens).toHaveLength(0);
  })
})

describe('when users list has users', () => {
  const users = ['Daniel', 'Vieira'];

  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue(users)
  })

  test('should be render with elements', () => {
    render(<RecoilRoot><UsersList /></RecoilRoot>)

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(users.length);
  })
})
