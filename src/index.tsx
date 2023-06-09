import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from 'react-ga';

//TODO: theme 설정
const theme = {};
if (process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID) {
  ReactGA.initialize(
    process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID as string,
  );
}

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
