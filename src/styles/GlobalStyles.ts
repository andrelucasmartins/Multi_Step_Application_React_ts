import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: clamp(20rem, 100vw, 100%);

  background-image: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.gray[100]} 50%, ${({ theme }) =>
  theme.colors.white} 50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  
}

`;
