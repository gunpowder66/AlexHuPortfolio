import '../styles/globals.css'
import Navbar from '../components/Navbar.js'

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  )
}

export default MyApp
