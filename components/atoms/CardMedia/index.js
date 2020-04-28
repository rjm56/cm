import { oneOf, string } from "prop-types";
import { cardMedia, cardMediaTypes } from "../../../constants/mediaTypes";
import styled from "styled-components";

const BackgroundImage = styled.span`
  display: block;
  background: ${({ source }) => `url(${source})`} center center no-repeat;
  background-size: cover;
  height: 200px;
`;

const Video = styled.video`
  width: 100%;
  object-fit: cover;
  height: 200px;
`;

export const CardMedia = ({ type, src, alt }) => {
  const renderMedia = () => {
    if (type === cardMedia.video) {
      return <Video src={src} autoPlay="autoPlay" loop muted alt={alt} />;
    }

    if (type === cardMedia.image || cardMedia.svg) {
      return (
        <div>
          <BackgroundImage source={src} role="img" aria-label={alt} />
        </div>
      );
    }
  };

  return renderMedia();
};

CardMedia.propTypes = {
  type: oneOf(cardMediaTypes),
  src: string.isRequired,
  alt: string,
};
