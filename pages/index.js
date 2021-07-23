import Head from 'next/head'
import Navbar from '../components/Navbar'
import AppLayout from '../components/AppLayout'
import Hero from '../components/Hero'
import Email from '../components/Email'
import Social from '../components/Social'
import About from '../components/About'
import Scrollbar from '../components/Scrollbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <AppLayout>
        {/* <Scrollbar /> */}
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </AppLayout>
      <Email />
      <Social />
    </>
  )
}
