import { node } from "prop-types";
import { Header } from "../Typography";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: ${({ theme }) => `0 0 ${theme.spacing.small}`};
`;

export const CardHeader = ({ children }) => {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
};

CardHeader.propTypes = {
  children: node,
};
