import styles from './testimonials.module.css'

export default function Testimonials() {
  return (
    <div id='testimonials' className={styles.container}>
      <h1>Testimonials</h1>
      <div className={styles.line}></div>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero perferendis numquam id, molestiae molestias aliquid, delectus fugiat rerum beatae odio ea laboriosam tempora sequi praesentium autem tenetur, qui aut fugit.</p>
        </div>
        <div className={styles.testimonial}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident, inventore placeat omnis sunt perspiciatis enim. Voluptatum, autem rerum sed eaque suscipit hic nobis natus alias cum neque? Neque, adipisci!</p>
        </div>
      </div>
    </div>
  )
}
