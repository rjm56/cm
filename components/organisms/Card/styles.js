import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: 5px;
`;

export const CardContent = styled.div`
  padding: ${({ theme, withImage }) =>
    `${withImage ? theme.spacing.medium : theme.spacing.large} ${
      theme.spacing.medium
    } 0`};
`;

export const CardActions = styled.div`
  padding: ${({ theme }) => `0 ${theme.spacing.small}`};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: center;
`;

export const CardMenuWrapper = styled.div`
  margin-left: auto;
`;
