import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "."
import { useUsersList } from "../../state/hooks/useUsersList"

jest.mock('../../state/hooks/useUsersList', () => {
  return { useUsersList: jest.fn() }
})

const mockNavigation = jest.fn();
jest.mock('react-router-dom', () => {
  return { useNavigate: () => mockNavigation }
})


describe('when it is less than 3 users in list', () => {
  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue([])
  })

  test('should button is disabled', () => {
    render(<RecoilRoot><Footer /></RecoilRoot>)

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  })
})

describe('when it has 3 or more user in list', () => {
  const users = ['Daniel', 'Vieira', 'Fernandes'];

  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue(users)
  })

  test('should button was enabled', () => {
    render(<RecoilRoot><Footer /></RecoilRoot>)

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  })

  test('should button redirect to corretly page', () => {
    render(<RecoilRoot><Footer /></RecoilRoot>)
    
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith('/draw');
  })
})