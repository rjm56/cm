import { string, bool, shape, oneOf } from "prop-types";
import { CardMedia } from "../../atoms/CardMedia";
import { CardHeader } from "../../atoms/CardHeader";
import { Subheading } from "../../atoms/Subheading";
import { CardDescription } from "../../atoms/CardDescription";
import { FavouriteIcon } from "../../atoms/FavouriteIcon";
import { CardMenu } from "../../molecules/CardMenu";
import { cardMediaTypes } from "../../../constants/mediaTypes";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: 5px;
`;

const CardContent = styled.div`
  padding: ${({ theme, withImage }) =>
    `${withImage ? theme.spacing.medium : theme.spacing.large} ${
      theme.spacing.medium
    } 0`};
`;

const CardActions = styled.div`
  padding: ${({ theme }) => `0 ${theme.spacing.small}`};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: center;
`;

const CardMenuWrapper = styled.div`
  margin-left: auto;
`;

export const Card = ({
  media,
  header = "",
  subheading = "",
  copy = "",
  includeFavourite = false,
  includeCardMenu = false,
}) => {
  return (
    <CardWrapper>
      {!!media && <CardMedia {...media} />}
      <CardContent withImage={!!media}>
        <CardHeader>{header}</CardHeader>
        <Subheading subheading={subheading} />

        {!!copy && <CardDescription>{copy}</CardDescription>}
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
    </CardWrapper>
  );
};

Card.propTypes = {
  media: shape({
    type: oneOf(cardMediaTypes),
    src: string.isRequired,
    alt: string,
  }),
  header: string.isRequired,
  subheading: string.isRequired,
  copy: string,
  includeFavourite: bool,
  includeCardMenu: bool,
};
