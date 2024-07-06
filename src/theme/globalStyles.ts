import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles
