import styled from "styled-components";

export const Header = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.font.large.fontSize};
  line-height: ${({ theme }) => theme.font.large.lineHeight};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Copy = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font.small.fontSize};
  line-height: ${({ theme }) => theme.font.small.lineHeight};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: normal;
`;
