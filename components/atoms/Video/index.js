import styled from "styled-components";

export const Video = styled.video`
  width: 100%;
  object-fit: cover;
  height: ${({ height }) => height || "200px"};
`;
