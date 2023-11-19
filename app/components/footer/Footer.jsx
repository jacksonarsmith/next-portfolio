import styles from './footer.module.css'
import '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

config.autoAddCss = false; 

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        <p>&copy; 2023 Jackson Smith. All rights reserved.</p>
      </div>
      <div className={styles.socials}>
        <ul className={styles.list}>
          <li>
            <Link href='https://github.com/jacksonarsmith' className={styles.link}>
              <FontAwesomeIcon icon={ faLinkedin } className={styles.icon}/>
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/jackson-smith-a221b81a1/' className={styles.link}>
              <FontAwesomeIcon icon={ faGithub } className={styles.icon}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
