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
        <div>
          <img src="../assets/development.svg" alt="" />
          <p>Development</p>
        </div>
        <div>
          <img src="../assets/web.svg" alt="" />
          <p>Web Design</p>
        </div>
        <div>
          <img src="../assets/marketing.svg" alt="" />
          <p>Marketing</p>
        </div>
        <div>
          <img src="../assets/setting.svg" alt="" />
          <p>Other</p>
        </div>
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
