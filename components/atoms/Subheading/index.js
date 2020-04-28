import { string } from "prop-types";
import { Copy } from "../Typography";
import { Wrapper } from "./styles";

export const Subheading = ({ subheading = "" }) => {
  return (
    <Wrapper>
      <Copy as="h3">{subheading}</Copy>
    </Wrapper>
  );
};

Subheading.propTypes = {
  subheading: string,
};
