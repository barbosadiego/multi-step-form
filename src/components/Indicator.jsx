import styled from 'styled-components';

const Indicator = (props) => {
  return (
    <StyledIndicator>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </StyledIndicator>
  );
};

export default Indicator;

const StyledIndicator = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral400};

  & > div {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.neutral300};
    color: ${({ theme }) => theme.color.neutral600};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  & div + div::before {
    position: absolute;
    content: '';
    display: block;
    width: 100px;
    height: 6px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.neutral300};
    left: -108px;
  }
`;
