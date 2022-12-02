import React from 'react';
import styled from 'styled-components';

const StepControl = ({ children, reverse = false }) => {
  return <StyledStepControl reverse={reverse}>{children}</StyledStepControl>;
};

export default StepControl;

const StyledStepControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  position: relative;
  bottom: -100px;
  left: -50px;
  width: 700px;
  padding-bottom: 10px;
`;
