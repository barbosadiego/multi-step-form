import { useContext, useEffect, useRef } from 'react';
import { StepContext } from '../contexts/StepContext';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Indicator = () => {
  const { data } = useContext(StepContext);

  return (
    <StyledIndicatorArea>
      <StyledIndicator active={true}>1</StyledIndicator>
      <StyledIndicator
        active={
          data.atualStep === 'two' ||
          data.atualStep === 'three' ||
          data.atualStep === 'four'
        }
      >
        2
      </StyledIndicator>
      <StyledIndicator
        active={data.atualStep === 'three' || data.atualStep === 'four'}
      >
        3
      </StyledIndicator>
      <StyledIndicator active={data.atualStep === 'four'}>4</StyledIndicator>
    </StyledIndicatorArea>
  );
};

export default Indicator;

const StyledIndicatorArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral400};
`;

const StyledIndicator = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#4A3AFF' : '#eff0f6')};
  color: ${({ active }) => (active ? '#fff' : '#6e7191')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s;

  &:nth-child(n + 2):before {
    position: absolute;
    content: '';
    display: block;
    width: 100px;
    height: 6px;
    border-radius: 4px;
    background-color: ${({ active }) => (active ? '#4A3AFF' : '#eff0f6')};
    left: -108px;
  }
`;
