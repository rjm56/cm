import styled from "styled-components";
import { Card } from "../components/organisms/Card/index.js";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: 100px;
  background-color: #f5f8ff; //TODO: move to theme
`;

const CardWrapper = styled.div`
  flex: 0 1 calc(25% - 8px);
`;

export default () => (
  <Wrapper>
    <CardWrapper>
      <Card
        media={{
          type: "img",
          src: "image-placeholder.png",
          alt: "placeholder image",
        }}
        header="Important announcement"
        subheading="4 hours ago"
        includeFavourite
        includeCardMenu
      />
    </CardWrapper>
    <CardWrapper>
      <Card
        header="Important announcement"
        subheading="4 hours ago"
        copy="A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content."
        includeFavourite
        includeCardMenu
      />
    </CardWrapper>
    <CardWrapper>
      <Card
        header="Important announcement"
        subheading="4 hours ago"
        includeCardMenu
      />
    </CardWrapper>
    <CardWrapper>
      <Card header="Important announcement" subheading="4 hours ago" />
    </CardWrapper>
  </Wrapper>
);
