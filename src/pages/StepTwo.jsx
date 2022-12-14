import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '../components/Grid';
import Info from '../components/Info';
import LinkButton from '../components/LinkButton';
import StepControl from '../components/StepControl';
import { StepContext } from '../contexts/StepContext';

const StepTwo = () => {
  const { data, setData } = useContext(StepContext);
  const navigate = useNavigate();

  useEffect(() => {
    setData({ ...data, atualStep: data.steps[1] });
  }, []);

  function handleClick(e) {
    setData({ ...data, service: e.target.innerText.toLowerCase() });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.service) {
      navigate('/step_three');
    } else {
      alert('Please choose a service.');
    }
  }

  return (
    <div>
      <Info
        title="Our services"
        text="Please select which service you are interested in."
      />
      <Grid>
        <Item onClick={handleClick} active={data.service === 'development'}>
          <div>
            <img
              src="https://barbosadiego.github.io/multi-step-form/assets/development.svg"
              alt="development"
            />
          </div>
          <p>Development</p>
        </Item>
        <Item onClick={handleClick} active={data.service === 'web design'}>
          <div>
            <img
              src="https://barbosadiego.github.io/multi-step-form/assets/web.svg"
              alt="web"
            />
          </div>
          <p>Web Design</p>
        </Item>
        <Item onClick={handleClick} active={data.service === 'marketing'}>
          <div>
            <img
              src="https://barbosadiego.github.io/multi-step-form/assets/marketing.svg"
              alt="marketing"
            />
          </div>
          <p>Marketing</p>
        </Item>
        <Item onClick={handleClick} active={data.service === 'other'}>
          <div>
            <img
              src="https://barbosadiego.github.io/multi-step-form/assets/setting.svg"
              alt="setting"
            />
          </div>
          <p>Other</p>
        </Item>
      </Grid>
      <StepControl>
        <Link to="/step_one">
          <LinkButton>Previous step</LinkButton>
        </Link>
        <Link to="/step_three" onClick={handleSubmit}>
          <LinkButton filled>Next step</LinkButton>
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
  border: 2px solid transparent;
  gap: 1rem;
  padding: 25px;
  box-shadow: 0px 2px 11px rgba(69, 65, 164, 0.06),
    0px 4px 10px rgba(31, 37, 89, 0.07);
  border-radius: 16px;
  cursor: pointer;
  transition: 0.1s;
  border-color: ${({ active }) => (active ? ' #4A3AFF' : '')};

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
