import styled from 'styled-components';
import pxToRem from '../helpers/pxToRem';
import { Link, useNavigate } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
import StepControl from '../components/StepControl';
import { useContext, useEffect } from 'react';
import { StepContext } from '../contexts/StepContext';

const StepFour = () => {
  const { data, setData } = useContext(StepContext);
  const navigate = useNavigate();

  useEffect(() => {
    setData({ ...data, atualStep: data.steps[3] });
  }, []);

  function handleClick() {
    const project = {
      client: data.user,
      service: data.service,
      budget: data.budget,
    };
    setData({
      steps: ['one', 'two', 'three', 'four'],
      atualStep: '',
      user: {
        name: '',
        email: '',
        phone: '',
        company: '',
      },
      service: '',
      budget: '',
    });
    console.log(project);
    alert('You project will be request.');
    navigate('/step_one');
  }

  return (
    <>
      <StyledContent>
        <div>
          <img
            src="https://barbosadiego.github.io/multi-step-form/assets/submit.svg"
            alt="ok sign"
          />
        </div>
        <h3>Submit your quote request</h3>
        <p>
          Please review all the information you previously typed in the past
          steps, and if all is okay, submit your message to receive a project
          quote in 24 - 48 hours.
        </p>
        <LinkButton onClick={handleClick} filled>
          Submit
        </LinkButton>
      </StyledContent>
      <StepControl>
        <Link to="/step_three">
          <LinkButton>Previuos step</LinkButton>
        </Link>
      </StepControl>
    </>
  );
};

export default StepFour;

const StyledContent = styled.div`
  height: 405px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    line-height: ${pxToRem(30)};
    font-weight: 400;
    color: ${({ theme }) => theme.color.neutral600};
    text-align: center;
    max-width: 40ch;
    margin-top: 1rem;
  }
`;
