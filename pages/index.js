import styled from "styled-components";
import { Card } from "../components/organisms/Card/index";
import { mediaQuery } from "../utils/mediaQuery";
import { cardVariants } from "../mocks/cardVariants";

const Container = styled.div`
  padding: 24px;
  ${mediaQuery.tablet`
    padding: 80px;
  `}
`;

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  margin: 0 auto 16px;
  width: 300px;
  ${mediaQuery.tablet`
    margin: ${({ theme }) => theme.spacing.tiny};
  `}
`;

const Logo = styled.img`
  display: block;
  max-width: 180px;
  margin: 12px auto 24px;
  ${mediaQuery.tablet`
    margin: ${({ theme }) => `0 ${theme.spacing.tiny} 40px`};
  `}
`;

export default () => (
  <Container>
    <Logo src="https://cm-commerce.com/wp-content/themes/receiptful/assets/img/cmcommerce/brand/logo-minimal.svg" />
    <Wrapper>
      {cardVariants.map(
        ({
          id,
          media,
          header,
          subheader,
          description,
          includeFavourite,
          includeCardMenu,
        }) => {
          return (
            <CardWrapper key={id}>
              <Card
                media={media}
                header={header}
                subheader={subheader}
                description={description}
                includeFavourite={includeFavourite}
                includeCardMenu={includeCardMenu}
              />
            </CardWrapper>
          );
        }
      )}
    </Wrapper>
  </Container>
);
