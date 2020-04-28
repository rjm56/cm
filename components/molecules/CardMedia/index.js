import { oneOf, string } from "prop-types";
import { cardMedia, cardMediaTypes } from "../../../constants/mediaTypes";
import { Video } from "../../atoms/Video";
import { BackgroundImage } from "../../atoms/BackgroundImage";

export const CardMedia = ({ type, src, alt }) => {
  const renderMedia = () => {
    if (type === cardMedia.video) {
      return (
        <Video
          src={src}
          autoPlay="autoPlay"
          loop
          muted
          title={alt}
          poster="video-placeholder.png"
        />
      );
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
  type: oneOf(cardMediaTypes).isRequired,
  src: string.isRequired,
  alt: string.isRequired,
};
