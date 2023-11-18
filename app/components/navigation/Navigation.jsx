import styles from './navigation.module.css'
import '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

config.autoAddCss = false; 

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <ul className={styles.list}>
          <li>
            <Link href='#linkedin' className={styles.link}>
              <FontAwesomeIcon icon={ faLinkedin } className={styles.icon}/>
            </Link>
          </li>
          <li>
            <Link href='#github' className={styles.link}>
              <FontAwesomeIcon icon={ faGithub } className={styles.icon}/>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <Link href='#skills' className={styles.link}>Skills</Link>
          </li>
          <li>
            <Link href='#projects' className={styles.link}>Projects</Link>
          </li>
          <li>
            <Link href='#testimonials' className={styles.link}>Testimonials</Link>
          </li>
          <li>
            <Link href='#contact' className={styles.link}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}