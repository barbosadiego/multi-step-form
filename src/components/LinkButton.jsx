import styled from 'styled-components';

const LinkButton = ({ children, filled = false, onClick }) => {
  return (
    <StyledButton onClick={onClick} filled={filled}>
      {children}
    </StyledButton>
  );
};

export default LinkButton;

const StyledButton = styled.button`
  margin-top: 30px;
  width: 200px;
  height: 60px;
  padding: 20px 40px;
  border-radius: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.title5};
  font-weight: ${({ filled }) => (filled ? '700' : '400')};
  background-color: ${({ filled }) => (filled ? '#4A3AFF' : '#ffffff')};
  color: ${({ filled }) => (filled ? '#fff' : '#4A3AFF')};
  box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
  border: ${({ filled }) => (filled ? 'none' : '1px solid #4A3AFF')};
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
