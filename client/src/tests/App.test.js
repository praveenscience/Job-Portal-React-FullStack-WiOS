import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the app", () => {
  render(<App />);
  const textElement = screen.getByText(/job portal/i);
  expect(textElement).toBeInTheDocument();
});
