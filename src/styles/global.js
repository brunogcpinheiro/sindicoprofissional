import { createGlobalStyle } from "styled-components";
import { accent } from '../utils/colors';

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
  
  .active {
    color: ${accent};
  }
`;

export default GlobalStyles;
