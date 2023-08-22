import { Provider } from 'react-redux';
import '../styles/global.css';
import store from '../store';
// import { AppProps } from "next/app";
// import { getLayout as getBasicLayout } from "./header/Header";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Provider store={store}><Component {...pageProps} ></Component></Provider>);
}

export default App;