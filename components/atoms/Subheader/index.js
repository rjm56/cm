import { string } from "prop-types";
import { Copy } from "../Typography";
import { Wrapper } from "./styles";

export const Subheader = ({ subheader = "" }) => {
  return (
    <Wrapper>
      <Copy as="h3">{subheader}</Copy>
    </Wrapper>
  );
};

Subheader.propTypes = {
  subheader: string,
};
