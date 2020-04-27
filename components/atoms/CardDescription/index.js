import styled from "styled-components";
import { Copy } from "../Typography";
import { node } from "prop-types";

const StyledCardDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const CardDescription = ({ children }) => {
  return (
    <StyledCardDescription>
      <Copy>{children}</Copy>
    </StyledCardDescription>
  );
};

CardDescription.propTypes = { children: node };
