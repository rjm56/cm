import styled from "styled-components";
import { mediaQuery } from "../../../utils/mediaQuery";

export const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  ${mediaQuery.tablet`
    align-items: flex-start;
    flex-direction: row;
  `}
`;

export const CardColumn = styled.div`
  max-width: 300px;
  margin: ${({ theme }) => theme.spacing.tiny};

  ${mediaQuery.tablet`
    width: ${({ theme }) => `calc(50% - ${theme.spacing.small})`};
    max-width: 100%;
  `}

  ${mediaQuery.desktop`
    width: ${({ theme }) => `calc(33.333% - ${theme.spacing.small})`};
  `}

  ${mediaQuery.xLarge`
    width: ${({ theme }) => `calc(25% - ${theme.spacing.small})`};
  `}
`;
