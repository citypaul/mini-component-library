/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div``;

const ProgressBar = ({ min = 0, max = 100, value = 0, size }) => {
  return (
    <Wrapper
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      role="progressbar"
    >
      Hello
    </Wrapper>
  );
};

export default ProgressBar;
