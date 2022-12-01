import styled from 'styled-components';

const LinkButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default LinkButton;

const StyledButton = styled.button`
  margin-top: 30px;
  position: absolute;
  bottom: -100px;
  right: 0;
  width: 165px;
  height: 60px;
  padding: 20px 40px;
  border-radius: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.title5};
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.neutral100};
  box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
  border: none;
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
