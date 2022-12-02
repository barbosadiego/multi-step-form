import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '../components/Grid';
import Info from '../components/Info';
import LinkButton from '../components/LinkButton';
import StepControl from '../components/StepControl';
import pxToRem from '../helpers/pxToRem';

const StepThree = () => {
  return (
    <div>
      <Info
        title="Our services"
        text="Please select which service you are interested in."
      />
      <Grid>
        <Item>
          <p>Development</p>
        </Item>
        <Item>
          <p>Web Design</p>
        </Item>
        <Item>
          <p>Marketing</p>
        </Item>
        <Item>
          <p>Other</p>
        </Item>
      </Grid>
      <StepControl>
        <Link to="/step_four">
          <LinkButton fill>Next step</LinkButton>
        </Link>
        <Link to="/step_two">
          <LinkButton>Previous step</LinkButton>
        </Link>
      </StepControl>
    </div>
  );
};

export default StepThree;

const Item = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 25px;
  box-shadow: 0px 2px 11px rgba(69, 65, 164, 0.06),
    0px 4px 10px rgba(31, 37, 89, 0.07);
  border-radius: 16px;
  cursor: pointer;

  & > div {
    background-color: rgba(74, 58, 255, 0.15);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
