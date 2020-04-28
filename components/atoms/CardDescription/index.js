import { node } from "prop-types";
import { Copy } from "../Typography";
import { Wrapper } from "./styles";

export const CardDescription = ({ children }) => {
  return (
    <Wrapper>
      <Copy>{children}</Copy>
    </Wrapper>
  );
};

CardDescription.propTypes = { children: node };
