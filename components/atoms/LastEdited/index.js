import { string } from "prop-types";
import { Copy } from "../Typeography";

export const LastEdited = ({ lastEdited }) => {
  return <Copy>{`Last edited ${lastEdited}`}</Copy>;
};

LastEdited.propTypes = {
  lastEdited: string,
};
