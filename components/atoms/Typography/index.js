import styled, { css } from "styled-components";

export const Header = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.font.large.fontSize};
  line-height: ${({ theme }) => theme.font.large.lineHeight};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: normal;

  ${({ shouldTruncate, lineNo }) =>
    shouldTruncate &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${lineNo};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `};
`;

export const Copy = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font.small.fontSize};
  line-height: ${({ theme }) => theme.font.small.lineHeight};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: normal;
`;
