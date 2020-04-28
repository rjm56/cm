import styled from "styled-components";
import { mediaQuery } from "../utils/mediaQuery";
import { CardLayout } from "../components/organisms/CardLayout";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large};

  ${mediaQuery.tablet`
    padding: 80px;
  `}
`;

const Logo = styled.img`
  display: block;
  max-width: 180px;
  margin: ${({ theme }) => `0px auto ${theme.spacing.medium}`};

  ${mediaQuery.tablet`
    margin: ${({ theme }) => `0 ${theme.spacing.tiny} 40px`};
  `}
`;

export default () => (
  <Container>
    <Logo src="https://cm-commerce.com/wp-content/themes/receiptful/assets/img/cmcommerce/brand/logo-minimal.svg" />
    <CardLayout />
  </Container>
);
