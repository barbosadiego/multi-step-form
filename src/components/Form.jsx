import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Indicator from './Indicator';

const Form = () => {
  return (
    <>
      <StyledForm>
        <Indicator />
        <Outlet />
      </StyledForm>
    </>
  );
};

export default Form;

const StyledForm = styled.div`
  width: 700px;
  /* height: 606px; */
  margin: 0 auto;
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 34px;
  margin-top: 45px;
  padding: 10px 50px 60px;
`;
