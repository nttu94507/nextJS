import '../styles/global.css';
// import { AppProps } from "next/app";
// import { getLayout as getBasicLayout } from "./header/Header";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} ></Component>);
}

export default App;