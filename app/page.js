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
