import { oneOf, string } from "prop-types";
import { mediaTypes } from "../../../constants/mediaTypes";
import styled from "styled-components";

const Wrapper = styled.div``; //TODO

export const CardMedia = ({ type, src }) => {
  return <Wrapper>I am the card media</Wrapper>;
};

CardMedia.propTypes = {
  type: oneOf(mediaTypes),
  src: string.isRequired,
};
