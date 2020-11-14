import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

const theme = {
  colors: {
    primary: "#149EE7",
    secondary: "#6AD0FF",
    white: "#ffffff",
  },
};

const StyleReset = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: ${theme.colors.white};
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weather Forecast - Updated!</title>
      </Head>
      <StyleReset />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
