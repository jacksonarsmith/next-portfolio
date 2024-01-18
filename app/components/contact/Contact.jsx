'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '../../../utils/send-mail';
import styles from './contact.module.css'

export default function Contact() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} id='contact' className={styles.form}>
        <h1>Get in touch</h1>
        <hr />
        <p>
          I&apos;m here to explore opportunities with you. Whether you&apos;re seeking a new challenge, 
          interested in a collaboration, or have a specific role in mind, I&apos;d love to hear from 
          you. Use the form below to reach out, and let&apos;s start a conversation about how we can 
          create success together!
        </p>
        <div className={styles.grid_two}>
          <input type="text" placeholder='Enter Name' {...register('name', { required: true })}/>
          <input type="email" id="email" placeholder='Enter email' {...register('email', { required: true })}/>
        </div>
        <textarea rows={4} placeholder='Message' className={styles.message} {...register('message', { required: true })}/>
        <button>Send Message</button>
      </form>
    </div>
  )
}
