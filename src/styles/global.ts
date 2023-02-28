import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-soothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }



  .container {
    max-width: 70%;
    margin-right: auto;
    margin-left: auto;
  }

`
