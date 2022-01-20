import Header from '../components/Header'
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    )
}

export default MyApp
