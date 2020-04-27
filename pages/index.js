import React from "react";
import styled from "styled-components";
import { Card } from "../components/organisms/Card/index.js";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <Title>
    Homepage
    <Card
      header="Important announcement"
      lastEdited="4 hours ago"
      copy="A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content."
      includeFavourite
      includeCardMenu
    />
  </Title>
);
