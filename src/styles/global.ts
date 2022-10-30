import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;
    
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  // font-size: 16px (bom para desktop)
  // font-size: 14px (bom para cel e tablet)

    html {
      //telas de até 1080px
      @media (max-width: 1080px) {
        font-size: 93.75%; // 16px x 0.9315 = 15PX
      }
      //telas de até 1080px
      @media (max-width: 720px) {
        font-size: 87.5%; // 16px x 0.865 = 14PX
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased; //melhora a nitidez das fontes
    }

    /*Por padrão, o input, textarea e o button não importam a fonte do body do html. Dessa forma, subscrevo todos eles. */
    body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400; // no html geralmente é 500
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600; 
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
`;
