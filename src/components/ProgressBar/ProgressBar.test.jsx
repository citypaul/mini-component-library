import React from "react";
import ProgressBar from "./ProgressBar";
import { render, screen } from "@testing-library/react";

test("Renders", () => {
  const component = render(<ProgressBar />);
});
