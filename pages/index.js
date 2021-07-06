import Head from 'next/head'
import Navbar from '../components/Navbar'
import AppLayout from '../components/AppLayout'
import Hero from '../components/Hero'
import Email from '../components/Email'
import Social from '../components/Social'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <AppLayout>
        <Navbar />
        <Hero />
        <About />
      </AppLayout>
      <Email />
      <Social />
    </>
  )
}
