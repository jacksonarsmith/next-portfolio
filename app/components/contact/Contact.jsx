import styles from './contact.module.css'

export default function Contact() {
  return (
    <div id='contact' className={styles.container}>
      <h1>Get in touch</h1>
      <div className={styles.form}>
        <div className={styles.grid_two}>
          <input type="text" placeholder='Enter Name'/>
          <input type="email" id="email" placeholder='Enter email'/>
        </div>
        <input type="text" />
      </div>
    </div>
  )
}
