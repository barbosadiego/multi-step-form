import styled from 'styled-components';
import Theme from './theme/theme';
import pxToRem from './helpers/pxToRem';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import StepOne from './pages/StepOne';

const App = () => {
  return (
    <Theme>
      <Header>
        <h2>Get a project quote</h2>
        <p>
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </p>
      </Header>
      <Routes>
        <Route path="/" element={<Form />}>
          <Route path="step_one" element={<StepOne />} />
        </Route>
      </Routes>
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
