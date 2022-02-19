import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  colors: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  fonts: {
    heading: 'Questrial',
    body: 'Raleway',
    footer: 'Questrial'
  },
})

const domain:string = process.env.REACT_APP_AUTH0_DOMAIN || '';
const clientId:string = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        audience={'https://dev-cpifyj02.us.auth0.com/api/v2/'}
        scope={'read:current_user update:current_user_metadata'}
        useRefreshTokens
        cacheLocation='localstorage'
      >
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
