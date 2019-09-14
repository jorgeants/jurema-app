import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Imprima|Roboto:400,500&display=swap');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
	}

	* {
		box-sizing: border-box;
	}

	h1 {
		font-family: 'Imprima', sans-serif;
		font-weight: 600;
  }
`

export const theme = {
	primary: '#5ebefe',
	secondary: '#11a99e',
	gray: '#797979',
	grayLight: '#c9c9c9',
	light: '#FFF9F8',
}
