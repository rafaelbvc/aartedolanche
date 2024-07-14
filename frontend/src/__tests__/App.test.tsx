import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/contatos abrir o app/i);
  expect(linkElement).toBeInTheDocument();
});
