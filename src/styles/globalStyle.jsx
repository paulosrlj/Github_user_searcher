import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      --text-color: rgb(209, 199, 199);
  }

  body {
      width: 100vw;
      height: 100vh;

      overflow-X: hidden;

      background: linear-gradient(90deg, #9a2626, #460941);
  }
`;
