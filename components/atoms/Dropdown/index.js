import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { func, arrayOf, shape, string } from "prop-types";

const Wrapper = styled.div`
  position: relative;
`;

const MenuTrigger = styled.div`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.tiny};
  border: ${({ theme, isOpen }) =>
    `1px solid ${isOpen ? theme.colors.borderAction : theme.colors.border}`};
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.action : theme.colors.white};
  border-radius: 2px;
  display: flex;
`;

const MenuItems = styled.ul`
  padding-left: 0;
  margin: 0;
  width: 124px;
  position: absolute;
  right: 0;
  top: 40px;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const MenuItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.small.fontSize};
  line-height: ${({ theme }) => theme.font.small.lineHeight};
  padding: ${({ theme }) => `${theme.spacing.tiny} ${theme.spacing.small}`};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.action};
  }
`;

export const Dropdown = ({ renderMenuIcon, options, onSelect }) => {
  const wrapper = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => setIsOpen(!isOpen);

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
            <MenuItem key={id} onClick={() => handleSelectItem(id)}>
              {label}
            </MenuItem>
          ))}
        </MenuItems>
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  renderMenuIcon: func,
  options: arrayOf(shape({ id: string, label: string })),
  onSelect: func,
};
