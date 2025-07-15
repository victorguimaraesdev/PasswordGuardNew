import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #557ae0;
    --secondary: #ffffffff;
    --supp: #c9c9c9ff;
    --supp2: #42a3fdff
  }

  body {
    background-color: #c9c9c9ff;
    font-family: "Roboto", sans-serif;
  }
`;