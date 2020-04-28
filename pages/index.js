import styled from "styled-components";
import { Card } from "../components/organisms/Card/index.js";
import { mediaQuery } from "../utils/mediaQuery.js";

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
      <CardWrapper>
        <Card
          media={{
            type: "img",
            src: "image-placeholder.png",
            alt: "placeholder image",
          }}
          header="Countdown announcement unlimited pizza for everyone"
          subheader="4 hours ago"
          includeFavourite
          includeCardMenu
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          media={{
            type: "img",
            src: "image-placeholder.png",
            alt: "placeholder image",
          }}
          header="Countdown announcement unlimited pizza for everyone"
          subheader="4 hours ago"
          description="A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content."
          includeFavourite
          includeCardMenu
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          header="Important announcement"
          subheader="4 hours ago"
          description="A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content."
          includeFavourite
          includeCardMenu
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          header="Important announcement"
          subheader="4 hours ago"
          includeCardMenu
        />
      </CardWrapper>
      <CardWrapper>
        <Card header="Important announcement" subheader="4 hours ago" />
      </CardWrapper>
    </Wrapper>
  </Container>
);
