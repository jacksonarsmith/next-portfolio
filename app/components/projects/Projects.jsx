import Link from 'next/link';
import styles from './projects.module.css'

export default function Projects() {
  const projects = [
    { title: 'IMDB Top Movies Web Scraper', description: 'This is project 1', link: 'https://github.com/jacksonarsmith/top-movies-web-scraper' },
    { title: 'Imperial Contracting Ottawa Web App', description: 'This is project 2', link: 'http://github.com/user/project2' },
    { title: 'Python Project', description: 'This is project 3', link: 'http://github.com/user/project3' },
    { title: 'Java or C++ Project', description: 'This is project 4', link: 'http://github.com/user/project4' },
  ];

  return (
    <div id='projects'>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.line}></div>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2>{project.title}</h2>
            <div className={styles.line_card}></div> 
            <p>{project.description}</p>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">Source Code</Link>
          </div>
        ))}
      </div>
    </div>
  )
}