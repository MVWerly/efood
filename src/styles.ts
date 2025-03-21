import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmonPink: '#E66767',
  alabasterWhite: '#FFF8F2',
  lightPeach: '#FFEBD9',
  white: '#ffffff'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${colors.alabasterWhite};
    color: ${colors.salmonPink};
  }
`
