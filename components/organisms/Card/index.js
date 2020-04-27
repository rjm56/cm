import { string, bool } from "prop-types";
import { CardHeader } from "../../atoms/CardHeader";
import { LastEdited } from "../../atoms/LastEdited";
import { Copy } from "../../atoms/Typeography";
import { FavouriteIcon } from "../../atoms/FavouriteIcon";
import { CardMenu } from "../../molecules/CardMenu";

export const Card = ({
  header = "",
  lastEdited = "",
  copy = "",
  includeFavourite = false,
  includeCardMenu = false,
}) => {
  return (
    <div>
      {!!header && <CardHeader>{header}</CardHeader>}
      {!!lastEdited && <LastEdited lastEdited={lastEdited} />}
      {!!copy && <Copy>{copy}</Copy>}
      {includeFavourite && <FavouriteIcon />}
      {includeCardMenu && <CardMenu />}
    </div>
  );
};

Card.propTypes = {
  header: string,
  lastEdited: string,
  copy: string,
  includeFavourite: bool,
  includeCardMenu: bool,
};
