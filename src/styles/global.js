import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Questrial', cursive, sans-serif;
    background: #f5f5f5;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Paytone One', 'Lato', cursive, sans-serif;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  button, a:hover {
    text-decoration: none;
  }

  .bg-wrapper {
    margin: 0 auto;
    width: 70%;
  }

  .bg-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .bg-column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyles;
