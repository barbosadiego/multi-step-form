import styled from 'styled-components';

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
`;
