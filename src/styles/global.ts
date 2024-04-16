import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme["gray-900"]};
   }

   body {
      width: 100vw;
      height: 100vh;
      background-color: ${props => props.theme["gray-100"]};
      color: ${props => props.theme["gray-700"]};
      -webkit-font-smoothing: antialiased;
   }

   body, input, textarea, button {
      font: 400 16px Roboto, sans-serif;
      line-height: 130%;
   }
`