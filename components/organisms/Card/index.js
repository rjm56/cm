import { string, bool, shape, oneOf } from "prop-types";
import { CardMedia } from "../../molecules/CardMedia";
import { CardHeader } from "../../atoms/CardHeader";
import { Subheader } from "../../atoms/Subheader";
import { CardDescription } from "../../atoms/CardDescription";
import { FavouriteIcon } from "../../atoms/FavouriteIcon";
import { CardMenu } from "../../molecules/CardMenu";
import { cardMediaTypes } from "../../../constants/mediaTypes";
import { Wrapper, CardContent, CardMenuWrapper, CardActions } from "./styles";

export const Card = ({
  media,
  header,
  subheader,
  description = "",
  includeFavourite = false,
  includeCardMenu = false,
}) => {
  return (
    <Wrapper>
      {!!media && <CardMedia {...media} />}
      <CardContent withImage={!!media}>
        <CardHeader>{header}</CardHeader>
        <Subheader subheader={subheader} />

        {!!description && <CardDescription>{description}</CardDescription>}
      </CardContent>
      {(includeFavourite || includeCardMenu) && (
        <CardActions>
          {includeFavourite && <FavouriteIcon />}
          {includeCardMenu && (
            <CardMenuWrapper>
              <CardMenu />
            </CardMenuWrapper>
          )}
        </CardActions>
      )}
    </Wrapper>
  );
};

Card.propTypes = {
  media: shape({
    type: oneOf(cardMediaTypes),
    src: string.isRequired,
    alt: string.isRequired,
  }),
  header: string.isRequired,
  subheader: string.isRequired,
  description: string,
  includeFavourite: bool,
  includeCardMenu: bool,
};
