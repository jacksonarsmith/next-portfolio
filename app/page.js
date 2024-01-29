import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/app/components/navigation/Navigation'
import Hero from '@/app/components/hero/Hero'
import Skills from '@/app/components/skills/Skills'
import Projects from '@/app/components/projects/Projects'
import Testimonials from '@/app/components/testimonials/Testimonials'
import Contact from '@/app/components/contact/Contact'
import Footer from '@/app/components/footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your Page Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}