import styles from './hero.module.css'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className={styles.container}>
      <Image src="/hero.jpeg" width={6000} height={4000} alt="Picture of the Jackson" className={styles.image} priority={true}/>

      <div className={styles.description}>
        <h1>Software Engineer</h1>
        <div className={styles.line}></div>
        <p>
          Hello! I'm Jackson Smith, a dedicated software engineer passionate about translating creative ideas into impactful solutions. 
          I specialize in the entire software development life cycle, from designing user-friendly interfaces to architecting scalable 
          back-end systems. My focus is on problem-solving, aiming to address real-world challenges with elegant and efficient solutions. 
          As you explore my portfolio, you'll find a showcase of projects reflecting my commitment to excellence and innovation. 
        </p>
      </div>
    </div>
  )
}
