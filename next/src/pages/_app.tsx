import AuthProvider from '../components/AuthProvider'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import "../../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="isolate bg-pillred">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </AuthProvider >
  )
}

export default MyApp


