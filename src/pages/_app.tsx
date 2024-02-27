import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import theme from '@/styles/theme';
import global from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
