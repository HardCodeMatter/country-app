import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@containers/App/App';

import './styles/index.css';
import { ThemeProvider } from './context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
        	<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
