import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '../components/Grid';
import Info from '../components/Info';
import LinkButton from '../components/LinkButton';
import StepControl from '../components/StepControl';
import { StepContext } from '../contexts/StepContext';

const StepThree = () => {
  const { data, setData } = useContext(StepContext);
  const navigate = useNavigate();

  useEffect(() => {
    setData({ ...data, atualStep: data.steps[2] });
  }, []);

  function handleClick(e) {
    setData({ ...data, budget: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.budget) {
      navigate('https://barbosadiego.github.io/multi-step-form/step_four');
    } else {
      alert('Please choose an budget.');
    }
  }

  return (
    <div>
      <Info
        title="What’s your project budget?"
        text="Please select the project budget range you have in mind."
      />
      <Grid>
        <Item active={data.budget === 'budget1'}>
          <StyledInput onClick={handleClick}>
            <input type="radio" name="budget" id="budget1" value="budget1" />
          </StyledInput>
          <label htmlFor="budget1">$5.000 - $10.000</label>
        </Item>
        <Item active={data.budget === 'budget2'}>
          <StyledInput onClick={handleClick}>
            <input type="radio" name="budget" id="budget2" value="budget2" />
          </StyledInput>
          <label htmlFor="budget2">$10.000 - $20.000</label>
        </Item>
        <Item active={data.budget === 'budget3'}>
          <StyledInput onClick={handleClick}>
            <input type="radio" name="budget" id="budget3" value="budget3" />
          </StyledInput>
          <label htmlFor="budget3">$20.000 - $50.000</label>
        </Item>
        <Item active={data.budget === 'budget4'}>
          <StyledInput onClick={handleClick}>
            <input type="radio" name="budget" id="budget4" value="budget4" />
          </StyledInput>
          <label htmlFor="budget4">$50.000+</label>
        </Item>
      </Grid>
      <StepControl>
        <Link to="https://barbosadiego.github.io/multi-step-form/step_two">
          <LinkButton>Previous step</LinkButton>
        </Link>
        <Link
          to="https://barbosadiego.github.io/multi-step-form/step_four"
          onClick={handleSubmit}
        >
          <LinkButton filled>Next step</LinkButton>
        </Link>
      </StepControl>
    </div>
  );
};

export default StepThree;

const Item = styled.div`
  border: 2px solid transparent;
  border-color: ${({ active }) => (active ? ' #4A3AFF' : '')};

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

  & label {
    height: 115px;
    width: 100%;
    cursor: pointer;
    line-height: 115px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.neutral800};
  }

  /* & > div {
    background-color: rgba(74, 58, 255, 0.15);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`;

const StyledInput = styled.div`
  input[type='radio'] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: none;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid ${({ theme }) => theme.color.neutral400};
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type='radio']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    border: 8px solid ${({ theme }) => theme.color.primary};
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em white;
    /* Windows High Contrast Mode */
    background-color: none;
  }

  input[type='radio']:checked::before {
    transform: scale(1);
  }
`;
