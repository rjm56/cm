import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../constants/styles/theme";

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
