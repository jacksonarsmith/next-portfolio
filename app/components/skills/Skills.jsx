'use client'

import styles from './skills.module.css'
import { useState } from 'react'

export default function Skills() {
  const [selectedItem, setSelectedItem] = useState(0)

  const handleItemSelection = (index) => {
    setSelectedItem(index); 
  }
  return (
    <div className={styles.container}>
      <div className={styles.selection}>
        <ul>
          <li>
            Frontend Technologies
          </li>
          <li>
            Backend Technologies
          </li>
          <li>
            Development Tools & Strategies
          </li>
        </ul>
      </div>
      <div className={styles.columns}>
        <ul>
          <div className={styles.frontend}>
            <h3>Frontend Tech Stack</h3>
            <ul>
              <li>
                <h4>Frontend Languages</h4>
              </li>
              <li>
                <h4>Frontend Frameworks</h4>
              </li>
            </ul>
          </div>
          <div className={styles.backend}>

          </div>
          <div className={styles.development}>

          </div>
        </ul>
      </div>
    </div>
  )
}
