import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../app/globals.css';
import Navbar from '@/Components/Navbar/Navbar'; // Adjust path if necessary
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
