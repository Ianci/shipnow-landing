import '../styles/index.scss';
import { Themes } from 'shipnow-mercurio';
import { ThemeProvider } from 'react-jss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Themes['shipnow']}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
