import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Imprima|Roboto:400,500&display=swap');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
	}

	h1 {
		font-family: 'Imprima', sans-serif;
		font-weight: 400;
  }
`

export const theme = {
	primary: '#2fbf9e',
}
