import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "."

describe('when users list is blank', () => {
  test('should button is disabled', () => {
    render(<RecoilRoot><Footer /></RecoilRoot>)

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  })
})
