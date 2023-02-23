import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors['base-background']};
    font: 400 16px Inter, sans-serif;
    
  }

  .container {
    max-width: 70%;
    margin-right: auto;
    margin-left: auto;
  }

`
