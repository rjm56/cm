import { Dropdown } from "../../atoms/Dropdown";
import { MenuSvg } from "./menuSvg";

export const CardMenu = () => {
  const cardMenuOptions = [
    { id: "save", label: "Save" },
    { id: "edit", label: "Edit" },
    { id: "preview", label: "Preview" },
  ];

  // eslint-disable-next-line no-console
  const handleSelectItem = (id) => console.log(`selected ${id}`);

  return (
    <Dropdown
      options={cardMenuOptions}
      onSelect={handleSelectItem}
      renderMenuIcon={(isOpen) => <MenuSvg isOpen={isOpen} />}
    />
  );
};
