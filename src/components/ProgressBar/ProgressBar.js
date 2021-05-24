/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div``;
const StyledBar = styled.div`
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(props) => (props.value === 100 ? "4px" : "none")};
  border-bottom-right-radius: ${(props) =>
    props.value === 100 ? "4px" : "none"};
  height: 12px;
  width: ${(props) => props.value}%;
`;

const ProgressBar = ({ min = 0, max = 100, value = 0, size }) => {
  return (
    <Wrapper>
      <StyledBar
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        min={min}
        max={max}
        value={value}
        role="progressbar"
      ></StyledBar>
    </Wrapper>
  );
};

export default ProgressBar;
