import { string } from "prop-types";
import { Copy } from "../Typography";
import styled from "styled-components";

const StyledLastEdited = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const LastEdited = ({ lastEdited }) => {
  return (
    <StyledLastEdited>
      <Copy>{`Last edited ${lastEdited}`}</Copy>
    </StyledLastEdited>
  );
};

LastEdited.propTypes = {
  lastEdited: string,
};
