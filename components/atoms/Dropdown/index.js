import { useState, useRef, useEffect } from "react";
import { func, arrayOf, shape, string } from "prop-types";
import { Wrapper, MenuTrigger, MenuItems, MenuItem } from "./styles";

export const Dropdown = ({ renderMenuIcon, options, onSelect }) => {
  const wrapper = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const handleClickOutside = (e) => {
    if (wrapper.current && wrapper.current.contains(e.target)) {
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectItem = (id) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <Wrapper ref={wrapper}>
      <MenuTrigger onClick={handleClick} isOpen={isOpen}>
        {renderMenuIcon(isOpen)}
      </MenuTrigger>
      {isOpen && (
        <MenuItems>
          {options.map(({ id, label }) => (
            <MenuItem
              tabIndex="0"
              key={id}
              onClick={() => handleSelectItem(id)}
            >
              {label}
            </MenuItem>
          ))}
        </MenuItems>
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  renderMenuIcon: func.isRequired,
  options: arrayOf(shape({ id: string, label: string })).isRequired,
  onSelect: func.isRequired,
};
