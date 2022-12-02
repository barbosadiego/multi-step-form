import React from 'react';
import styled from 'styled-components';

const StepControl = ({ children }) => {
  return <StyledStepControl>{children}</StyledStepControl>;
};

export default StepControl;

const StyledStepControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  position: relative;
  bottom: -100px;
  left: -50px;
  width: 700px;
  padding-bottom: 10px;
`;
