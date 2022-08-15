import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil"
import Config from "./Config";

const mockNavigation = jest.fn();
jest.mock('react-router-dom', () => {
  return { useNavigate: () => mockNavigation }
})

describe('the page of configurations', () => {
  test('should be render correctly', () => {
    const { container } = render(<RecoilRoot><Config /></RecoilRoot>)

    expect(container).toMatchSnapshot();
  })
})