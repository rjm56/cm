import styled from "styled-components";

export const BackgroundImage = styled.span`
  display: block;
  background: ${({ source }) => `url(${source})`} center center no-repeat;
  background-size: cover;
  height: ${({ height }) => height || "200px"};
`;
