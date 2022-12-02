import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '../components/Grid';
import Info from '../components/Info';
import LinkButton from '../components/LinkButton';
import StepControl from '../components/StepControl';
import pxToRem from '../helpers/pxToRem';

const StepTwo = () => {
  return (
    <div>
      <Info
        title="Our services"
        text="Please select which service you are interested in."
      />
      <Grid>
        <Item>
          <div>
            <img src="../assets/development.svg" alt="development" />
          </div>
          <p>Development</p>
        </Item>
        <Item>
          <div>
            <img src="../assets/web.svg" alt="web" />
          </div>
          <p>Web Design</p>
        </Item>
        <Item>
          <div>
            <img src="../assets/marketing.svg" alt="marketing" />
          </div>
          <p>Marketing</p>
        </Item>
        <Item>
          <div>
            <img src="../assets/setting.svg" alt="setting" />
          </div>
          <p>Other</p>
        </Item>
      </Grid>
      <StepControl>
        <Link to="/step_three">
          <LinkButton fill>Next step</LinkButton>
        </Link>
        <Link to="/step_one">
          <LinkButton>Previous step</LinkButton>
        </Link>
      </StepControl>
    </div>
  );
};

export default StepTwo;

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
