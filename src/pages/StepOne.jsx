import styled from 'styled-components';
import pxToRem from '../helpers/pxToRem';
import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
import Info from '../components/Info';
import StepControl from '../components/StepControl';
import { useContext, useEffect, useState } from 'react';
import { StepContext } from '../contexts/StepContext';

const StepOne = () => {
  const { data, setData } = useContext(StepContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setData({ ...data, atualStep: data.steps[0] });
  }, []);

  const handleSubmit = () => {
    setData({ ...data, user: userData });
  };

  return (
    <>
      <StyledContent>
        <Info
          title="Contact details"
          text="Lorem ipsum dolor sit amet consectetur adipisc."
        />
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Carter"
              value={userData.name || data.user.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phone">Email</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Email address"
              value={userData.email || data.user.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Phone number</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="(123) 456-7890"
              value={userData.phone || data.user.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company name"
              value={userData.company || data.user.company}
              onChange={(e) =>
                setUserData({ ...userData, company: e.target.value })
              }
            />
          </div>
        </form>
      </StyledContent>
      <StepControl reverse>
        <Link to="/step_two" onClick={handleSubmit}>
          <LinkButton fill>Next step</LinkButton>
        </Link>
      </StepControl>
    </>
  );
};

export default StepOne;

const StyledContent = styled.div`
  form {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 20px;

    & > div {
      display: grid;
      gap: 18px;
    }

    label {
      font-size: ${({ theme }) => theme.fontSize.title5};
      font-weight: 500;
      color: ${({ theme }) => theme.color.neutral800};
    }

    input {
      height: 60px;
      width: 100%;
      border-radius: 46px;
      border: 1px solid ${({ theme }) => theme.color.neutral300};
      padding: 20px 50px 20px 20px;
      outline: none;
      font-size: ${pxToRem(18)};
      color: ${({ theme }) => theme.color.neutral600};
      box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
      background-repeat: no-repeat;
      background-position: right 20px center;
    }

    & div:nth-child(1) input {
      background-image: url(../assets/person.svg);
    }

    & div:nth-child(2) input {
      background-image: url(../assets/email.svg);
    }

    & div:nth-child(3) input {
      background-image: url(../assets/phone.svg);
    }

    & div:nth-child(4) input {
      background-image: url(../assets/company.svg);
    }
  }
`;
