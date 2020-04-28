import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const MenuTrigger = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.tiny};
  border: ${({ theme, isOpen }) =>
    `1px solid ${isOpen ? theme.colors.borderAction : theme.colors.border}`};
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.action : theme.colors.white};
  border-radius: 2px;
  display: flex;
`;

export const MenuItems = styled.ul`
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

export const MenuItem = styled.li`
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
