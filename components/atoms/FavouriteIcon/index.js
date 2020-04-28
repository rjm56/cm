import { useState } from "react";
import { FavouriteSvg } from "./favouriteSvg";
import { Wrapper } from "./styles";

export const FavouriteIcon = () => {
  const [isFavourited, setIsFavourited] = useState(false);

  const handleClick = () => setIsFavourited(!isFavourited);

  return (
    <Wrapper
      onClick={handleClick}
      tabIndex="0"
      aria-label={
        isFavourited ? "Un-favourite this card" : "Favourite this card"
      }
    >
      <FavouriteSvg isFavourited={isFavourited} />
    </Wrapper>
  );
};
