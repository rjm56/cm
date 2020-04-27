import { string } from "prop-types";
import { Copy } from "../Typography";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Subheading = ({ subheading }) => {
  return (
    <Wrapper>
      <Copy as="h3">{subheading}</Copy>
    </Wrapper>
  );
};

Subheading.propTypes = {
  subheading: string,
};
