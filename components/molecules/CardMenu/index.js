import styled from "styled-components";
import { Dropdown } from "../../atoms/Dropdown";
import { MenuSvg } from "./menu";

const Wrapper = styled.div`
  position: relative;
`;

export const CardMenu = () => {
  const cardMenuOptions = [
    { id: "save", label: "Save" },
    { id: "edit", label: "Edit" },
    { id: "preview", label: "Preview" },
  ];

  const handleSelectItem = (id) => console.log(`selected ${id}`);

  return (
    <Dropdown
      options={cardMenuOptions}
      onSelect={handleSelectItem}
      renderMenuIcon={(isOpen) => <MenuSvg isOpen={isOpen} />}
    />
  );
};
