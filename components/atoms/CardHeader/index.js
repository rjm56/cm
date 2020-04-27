import styled from "styled-components";

const StyledCardHeader = styled.h2`
  margin: ${({ theme }) => `0 0 ${theme.spacing.small}`};
`;

export const CardHeader = ({ children }) => {
  return <StyledCardHeader>{children}</StyledCardHeader>;
};
