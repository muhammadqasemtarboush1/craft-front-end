import '../styles/globals.css';
import { AuthWrapper } from '../contexts/Auth';
import { Header } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthWrapper>
        <Header/>
        <Component {...pageProps} />
      </AuthWrapper>
    </>
  )
}

export default MyApp