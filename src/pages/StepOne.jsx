import styled from 'styled-components';
import pxToRem from '../helpers/pxToRem';
import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
import Info from '../components/Info';

const StepOne = () => {
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
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="(123) 456-7890"
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company name"
            />
          </div>
        </form>
      </StyledContent>
      <Link to="/step_two">
        <LinkButton>Next step</LinkButton>
      </Link>
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
