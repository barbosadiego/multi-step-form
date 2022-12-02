import styled from 'styled-components';
import pxToRem from '../helpers/pxToRem';
import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
import StepControl from '../components/StepControl';

const StepFour = () => {
  return (
    <>
      <StyledContent>
        <div>
          <img src="../assets/submit.svg" alt="ok sign" />
        </div>
        <h3>Submit your quote request</h3>
        <p>
          Please review all the information you previously typed in the past
          steps, and if all is okay, submit your message to receive a project
          quote in 24 - 48 hours.
        </p>
        <LinkButton fill>Submit</LinkButton>
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
