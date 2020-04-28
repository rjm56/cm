import { css } from "styled-components";

const breakpoints = { desktop: 992, tablet: 768 };

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media screen and (min-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
