/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const calculatePercentage = (value, min, max) =>
  ((value - min) / (max - min)) * 100;

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  background: ${COLORS.transparentGray15};

  &.large {
    padding: 4px;
  }
`;

const StyledBar = styled.div`
  --border-radius: 4px;
  background-color: ${COLORS.primary};
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  border-top-right-radius: ${({ value, min, max }) =>
    calculatePercentage(getValueInBounds(value, min, max), min, max) === 100
      ? "var(--border-radius)"
      : "none"};
  border-bottom-right-radius: ${({ value, min, max }) =>
    calculatePercentage(getValueInBounds(value, min, max), min, max) === 100
      ? "var(--border-radius)"
      : "none"};
  height: 12px;
  width: ${({ value, min, max }) =>
    calculatePercentage(getValueInBounds(value, min, max), min, max)}%;

  ${Wrapper}.small & {
    height: 8px;
  }

  ${Wrapper}.large & {
    height: 16px;
  }
`;

const getValueInBounds = (value, min, max) => {
  const intValue = parseInt(value);
  const intMin = parseInt(min);
  const intMax = parseInt(max);

  if (intValue > intMax) {
    return intMax;
  }

  if (intValue < intMin) {
    return intMin;
  }

  return intValue;
};

const ProgressBar = ({ min = 0, max = 100, value = 0, size = "medium" }) => {
  const valueInBounds = getValueInBounds(value, min, max);

  return (
    <Wrapper className={size} data-testid="progressBar">
      <StyledBar
        aria-valuenow={valueInBounds}
        aria-valuemin={min}
        aria-valuemax={max}
        min={min}
        max={max}
        value={value}
        role="progressbar"
      >
        <VisuallyHidden>
          {calculatePercentage(valueInBounds, min, max)}%
        </VisuallyHidden>
      </StyledBar>
    </Wrapper>
  );
};

export default ProgressBar;
