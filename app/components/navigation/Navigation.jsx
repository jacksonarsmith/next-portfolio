'use client'

import styles from './navigation.module.css'
import '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

config.autoAddCss = false; 

export default function Navigation() {
  const router = useRouter(); 

  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <ul className={styles.list}>
          <li>
            <Link href='https://www.linkedin.com/in/jackson-smith-a221b81a1/' className={styles.link}>
              <FontAwesomeIcon icon={ faLinkedin } className={styles.icon}/>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/jacksonarsmith' className={styles.link}>
              <FontAwesomeIcon icon={ faGithub } className={styles.icon}/>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <Link href='#skills' className={styles.link} onClick={() => router.push('skills')}>Skills</Link>
          </li>
          <li>
            <Link href='#projects' className={styles.link} onClick={() => router.push('projects')}>Projects</Link>
          </li>
          <li>
            <Link href='#testimonials' className={styles.link} onClick={() => router.push('testimonials')}>Testimonials</Link>
          </li>
          <li>
            <Link className={styles.link} href='/jacksonarsmith_resume_2024.pdf' download>
              <FontAwesomeIcon icon={ faFilePdf } className={styles.icon}/>
            </Link>
          </li>
          <li>
            <Link href='#contact' className={styles.link} onClick={() => router.push('contact')}>
              <FontAwesomeIcon icon={ faEnvelope } className={styles.icon}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}