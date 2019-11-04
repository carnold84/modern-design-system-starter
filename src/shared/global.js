import { createGlobalStyle } from 'styled-components';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap';

export const GlobalStyle = createGlobalStyle`
  @import url(${fontUrl});

  body {
  font-family: '"Open Sans", Helvetica, Arial, sans-serif';
  font-size: 14px;
  }
`;
