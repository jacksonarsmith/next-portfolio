import styles from './hero.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.gridOne}>
        <div className={styles.button}>
            <div className={styles.box}>J</div>
            <div className={styles.box}>A</div>
            <div className={styles.box}>C</div>
            <div className={styles.box}>K</div>
            <div className={styles.box}>S</div>
            <div className={styles.box}>O</div>
            <div className={styles.box}>N</div>
        </div>
        <h2>
          Software Engineer
        </h2>
        <p className={styles.description}>
            Hello! I&apos;m Jackson Smith, a dedicated software engineer passionate about translating creative ideas into impactful solutions. 
            I specialize in the entire software development life cycle, from designing user-friendly interfaces to architecting scalable 
            back-end systems. My focus is on problem-solving, aiming to address real-world challenges with elegant and efficient solutions. 
            As you explore my portfolio, you&apos;ll find a showcase of projects reflecting my commitment to excellence and innovation. 
        </p>
      </div>
      <div className={styles.gridTwo}>
        <Image src="/background-hero.png" width={3000} height={2000} alt="Picture of the Jackson" className={styles.image} priority={true}/>
      </div>
    </div>
  )
}
