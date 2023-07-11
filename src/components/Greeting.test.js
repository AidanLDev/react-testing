import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("Renders text, Hello World", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello world");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("When changedText is false display it's good to see you", () => {
    render(<Greeting />);

    const goodToSeeYouEl = screen.getByText("It's good to see you");
    expect(goodToSeeYouEl).toBeInTheDocument();
  });
  test("After clicking the change text button, display Changed!", () => {
    render(<Greeting />);

    const changeTextButton = screen.getByRole("button");
    userEvent.click(changeTextButton);
    const changedText = screen.getByText("Changed!");

    expect(changedText).toBeInTheDocument();
  });

  test("Make sure we don't display both phrases", () => {
    render(<Greeting />);
    const changeTextButton = screen.getByRole("button");
    userEvent.click(changeTextButton);
    const outputEl = screen.queryByText("good to see you", { exact: false });

    expect(outputEl).toBeNull();
  });
});
