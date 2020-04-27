import { oneOf, string } from "prop-types";
import { cardMedia, cardMediaTypes } from "../../../constants/mediaTypes";
import styled from "styled-components";

const BackgroundImage = styled.div`
  height: 200px;
  width: 100%;
  background: ${({ src }) => `url(${src})`} center center no-repeat;
`;

const Video = styled.video`
  width: 100%;
`;

export const CardMedia = ({ type, src, alt }) => {
  const renderMedia = () => {
    if (type === cardMedia.video) {
      return <Video src={src} autoPlay="autoPlay" loop muted alt={alt} />;
    }

    if (type === cardMedia.image || cardMedia.svg) {
      return <BackgroundImage src={src} alt={alt} />;
    }
  };

  return renderMedia();
};

CardMedia.propTypes = {
  type: oneOf(cardMediaTypes),
  src: string.isRequired,
  alt: string,
};
