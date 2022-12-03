import styled from 'styled-components';
import Theme from './theme/theme';
import pxToRem from './helpers/pxToRem';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import StepOne from './pages/StepOne';
import { useEffect } from 'react';
import StepTwo from './pages/StepTwo';
import Container from './styles/container';
import StepThree from './pages/StepThree';
import StepFour from './pages/StepFour';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/step_one');
  }, []);

  return (
    <Theme>
      <Container>
        <Header>
          <h2>Get a project quote</h2>
          <p>
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </p>
        </Header>
        <Routes>
          <Route path="/" element={<Form />}>
            <Route path="/step_one" element={<StepOne />} />
            <Route path="/step_two" element={<StepTwo />} />
            <Route path="/step_three" element={<StepThree />} />
            <Route path="/step_four" element={<StepFour />} />
          </Route>
        </Routes>
      </Container>
    </Theme>
  );
};

export default App;

const Header = styled.header`
  color: ${({ theme }) => theme.color.neutral800};
  text-align: center;
  margin-top: 100px;

  p {
    max-width: 45ch;
    margin: 20px auto;
    color: ${({ theme }) => theme.color.neutral600};
    font-size: ${({ theme }) => theme.fontSize.title5};
    line-height: ${pxToRem(30)};
  }
`;
