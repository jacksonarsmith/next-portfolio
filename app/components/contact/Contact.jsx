import styles from './contact.module.css'

export default function Contact() {
  return (
    <div id='contact' className={styles.container}>
      <h1>Get in touch</h1>
      <div className={styles.line}></div>
      <p>
        I'm here to explore opportunities with you. Whether you're seeking a new challenge, 
        interested in a collaboration, or have a specific role in mind, I'd love to hear from 
        you. Use the form below to reach out, and let's start a conversation about how we can 
        create success together!
      </p>
      <div className={styles.form}>
        <div className={styles.grid_two}>
          <input type="text" placeholder='Enter Name'/>
          <input type="email" id="email" placeholder='Enter email'/>
        </div>
        <input type="text" placeholder='Message' className={styles.message}/>
        <button disabled="disabled">Send Message</button>
      </div>
    </div>
  )
}
