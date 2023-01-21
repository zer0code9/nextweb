import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'
import Nav from './api/nav'
import Footer from './api/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
