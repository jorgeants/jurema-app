import React from 'react';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme/globalStyle'
import {
	Container
} from './styleApp';

import Routes from './config/routes'

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Container>
					<BrowserRouter>
						<Routes />
					</BrowserRouter>
				</Container>
			</ThemeProvider>
			<GlobalStyle />
		</Provider>
	);
}

export default App;
