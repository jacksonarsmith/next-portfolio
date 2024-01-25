import styles from './testimonials.module.css'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <div id='testimonials' className={styles.container}>
      <h1>Testimonials</h1>
      <hr />
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <Image src='/testimonial_jacob.jpeg' width={480} height={480} alt='Jacob Testimonial Picture' className={styles.image} priority={false}/>
          <p>I highly recommend Jackson for their exceptional programming skills. Their proficiency in diverse languages, ability to solve complex problems, and collaborative mindset make them an invaluable asset to any team. Jackson consistently delivers high-quality solutions and is an outstanding contributor to any programming project.</p>
        </div>
      </div>
    </div>
  )
}
