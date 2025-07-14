import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #557ae0;
    --secondary: #ffffffff
  }

  body {
    background-color: #d4d4d4ff
  }
`;