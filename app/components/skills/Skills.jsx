'use client'

import styles from './skills.module.css'
import '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import Image from 'next/image'

export default function Skills() {
  const [selectedItem, setSelectedItem] = useState(0)

  const handleItemSelection = (index) => {
    setSelectedItem(index); 
  }

  return (
    <div id='skills' className={styles.container}>
      <div className={styles.selection}>
        <ul>
          <li onClick={() => handleItemSelection('frontend')}>
            Front-end Technologies
          </li>
          <li onClick={() => handleItemSelection('backend')}>
            Back-end Technologies
          </li>
          <li onClick={() => handleItemSelection('development')}>
            Development Tools
          </li>
        </ul>
      </div>
      <div className={styles.columns}>
        {selectedItem === 'frontend' && (
        <div className={styles.frontend}>
          <Image src='/html5.png' width={480} height={480} alt='HTML5 icon picture' className={styles.image}/>
          <div className={styles.grid_three}>
            <Image src='/react.png' width={480} height={480} alt='Reactjs icon picture' className={styles.image}/>
            <Image src='/javascript.png' width={480} height={480} alt='Javascript icon picture' className={styles.image}/>
            <Image src='/nextjs.png' width={480} height={480} alt='Nextjs icon picture' className={styles.image}/>
          </div>
          <Image src='/css3.png' width={480} height={480} alt='CSS3 icon picture' className={styles.image}/>
        </div>
        )}
        {selectedItem === 'backend' && (
          <div className={styles.backend}>
            <div className={styles.grid_two}>
              <Image src='/python.png' width={480} height={480} alt='Python icon picture' className={styles.image}/>
              <Image src='/java.png' width={480} height={480} alt='Java icon picture' className={styles.image}/>
            </div>
            <div className={styles.grid_three}>
              <Image src='/javascript.png' width={480} height={480} alt='Javascript icon picture' className={styles.image}/>
              <Image src='/nodejs.png' width={480} height={480} alt='Nodejs icon picture' className={styles.image}/>
              <Image src='/expressjs.png' width={480} height={480} alt='Expressjs icon picture' className={styles.image}/>
            </div>
            <div className={styles.grid_two}>
              <Image src='/cpp.png' width={480} height={480} alt='C++ icon picture' className={styles.image}/>
              <Image src='/mongodb.png' width={480} height={480} alt='MongoDB icon picture' className={styles.image}/>
            </div>
          </div>
        )}
        {selectedItem === 'development' && (
          <div className={styles.development}>
            <div className={styles.grid_two}>
              <Image src='/npm.png' width={480} height={480} alt='NPM icon picture' className={styles.image}/>
              <Image src='/git.png' width={480} height={480} alt='Git icon picture' className={styles.image}/>
            </div>
            <div className={styles.grid_two}>
              <Image src='/jira.png' width={480} height={480} alt='Jira icon picture' className={styles.image}/>
              <Image src='/figma.png' width={480} height={480} alt='Figma icon picture' className={styles.image}/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
