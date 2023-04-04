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
    color: ${({ theme }) => theme.colors['base-text']}
    -webkit-font-soothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    color: ${({ theme }) => theme.colors['base-text']}
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }



  .container {
    width: 100%;
    max-width: 60%;
    margin-right: auto;
    margin-left: auto;
    
   
    
  }

  input::-webkit-outer-spin-button, 
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  input[type="number"] {
    -moz-appearance: textfield;
  }
`
