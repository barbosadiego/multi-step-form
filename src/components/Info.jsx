import React from 'react';
import styled from 'styled-components';

const Info = ({ title, text }) => {
  return (
    <StyledInfo>
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledInfo>
  );
};

export default Info;

const StyledInfo = styled.div`
  margin-top: 60px;

  h3 {
    color: ${({ theme }) => theme.color.neutral800};
  }

  p {
    color: ${({ theme }) => theme.color.neutral600};
  }
`;
