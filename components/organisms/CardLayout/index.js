import { cardVariants } from "../../../mocks/cardVariants";
import { Wrapper, CardColumn } from "./styles";
import { Card } from "../Card";

export const CardLayout = () => {
  return (
    <Wrapper>
      {cardVariants.map(
        ({
          id,
          media,
          header,
          subheader,
          description,
          includeFavourite,
          includeCardMenu,
        }) => {
          return (
            <CardColumn key={id}>
              <Card
                media={media}
                header={header}
                subheader={subheader}
                description={description}
                includeFavourite={includeFavourite}
                includeCardMenu={includeCardMenu}
              />
            </CardColumn>
          );
        }
      )}
    </Wrapper>
  );
};
