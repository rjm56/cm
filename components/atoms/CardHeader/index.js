import { node } from "prop-types";
import { Header } from "../Typography";
import { Wrapper } from "./styles";

export const CardHeader = ({ children }) => {
  return (
    <Wrapper>
      <Header shouldTruncate lineNo={2}>
        {children}
      </Header>
    </Wrapper>
  );
};

CardHeader.propTypes = {
  children: node,
};
