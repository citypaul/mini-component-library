import React from "react";
import ProgressBar from "./ProgressBar";
import { render, screen } from "@testing-library/react";

test("Defaults to a min of zero and max of 100", async () => {
  render(<ProgressBar />);

  const component = await screen.findByRole("progressbar");

  expect(component).toHaveAttribute("aria-valuenow", "0");
  expect(component).toHaveAttribute("aria-valuemin", "0");
  expect(component).toHaveAttribute("aria-valuemax", "100");
});

test("Can customise the min, max and current values", async () => {
  const expectedMinValue = 10;
  const expectedMaxValue = 20;
  const expectedNowValue = 15;

  const { rerender } = render(
    <ProgressBar
      min={expectedMinValue}
      max={expectedMaxValue}
      value={expectedNowValue}
    />
  );

  const component = await screen.findByRole("progressbar");

  expect(component).toHaveAttribute(
    "aria-valuenow",
    expectedNowValue.toString()
  );

  expect(component).toHaveAttribute(
    "aria-valuemin",
    expectedMinValue.toString()
  );

  expect(component).toHaveAttribute(
    "aria-valuemax",
    expectedMaxValue.toString()
  );

  expect(component).toHaveStyleRule("width", `50%`);

  rerender(<ProgressBar min={50} max={100} value={100} />);

  expect(component).toHaveStyleRule("width", `100%`);
});

test("Can increment the value", async () => {
  const expectedValue = 30;
  const { rerender } = render(<ProgressBar />);

  const component = await screen.findByRole("progressbar");

  expect(component).toHaveAttribute("aria-valuenow", "0");
  expect(component).toHaveStyleRule("width", `0%`);

  rerender(<ProgressBar value={expectedValue} />);

  expect(component).toHaveAttribute("aria-valuenow", expectedValue.toString());
  expect(component).toHaveStyleRule("width", `${expectedValue}%`);
});

test("will render a medium bar by default", async () => {
  render(<ProgressBar />);

  const component = await screen.findByTestId("progressBar");

  expect(component).toHaveClass("medium");
});

test("can render different size variants", async () => {
  const { rerender } = render(<ProgressBar size="small" />);

  const component = await screen.findByTestId("progressBar");

  expect(component).toHaveClass("small");
  expect(component).not.toHaveClass("medium");
  expect(component).not.toHaveClass("large");

  rerender(<ProgressBar size="medium" />);

  expect(component).not.toHaveClass("small");
  expect(component).toHaveClass("medium");
  expect(component).not.toHaveClass("large");

  rerender(<ProgressBar size="large" />);

  expect(component).not.toHaveClass("small");
  expect(component).not.toHaveClass("medium");
  expect(component).toHaveClass("large");
});

test.todo(
  "Will set to default max value if value now is initialised higher than the default max value"
);
