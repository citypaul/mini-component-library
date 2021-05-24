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
  const expectedMinValue = 50;
  const expectedMaxValue = 150;
  const expectedNowValue = 85;

  render(
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
});

test("Can increment the value", async () => {
  const expectedValue = 30;
  const { rerender } = render(<ProgressBar />);

  const component = await screen.findByRole("progressbar");

  expect(component).toHaveAttribute("aria-valuenow", "0");

  rerender(<ProgressBar value={expectedValue} />);

  expect(component).toHaveAttribute("aria-valuenow", expectedValue.toString());
});

test.todo(
  "Will set to default max value if value now is initialised higher than the default max value"
);
