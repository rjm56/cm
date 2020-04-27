import styled from "styled-components";

export const Header = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.font.large.fontSize};
  line-height: ${({ theme }) => theme.font.large.lineHeight};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: normal;
`;

export const Copy = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font.small.fontSize};
  line-height: ${({ theme }) => theme.font.small.lineHeight};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: normal;
`;
