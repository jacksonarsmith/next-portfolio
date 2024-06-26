import Link from 'next/link';
import Image from 'next/image'
import styles from './projects.module.css'
import '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false; 

export default function Projects() {
  const projects = [
    { title: 'MERN Web Scraper', description: "A full-stack application developed using the MERN stack (MongoDB, Express.js, React, Node.js) designed to scrape and process data from IMDb's top 1000 movies. The application leverages Express.js, Mongoose, Cheerio, and Axios for web scraping on the back-end, and uses React on the front-end to present the data in an intuitive and user-friendly interface. It includes features for sorting and filtering the movies, providing a dynamic and interactive user experience.", github: 'https://github.com/jacksonarsmith/mern-imdb-scraper', link: 'https://imdb-smith-scraper.vercel.app', image: '/mern-imdb-project.png'},
    { title: 'ICO Website', description: "Developed the Imperial Contracting Ottawa [ICO] Home Renovations website using Next.js to showcase our Ottawa-based full home renovation expertise. The dynamic platform features a curated portfolio, captivating before-and-after gallery, and detailed service offerings, highlighting our commitment to quality craftsmanship. Leveraged modern web technologies for optimal performance and a seamless user experience. The inclusion of client testimonials and a user-friendly contact form underscores our dedication to client satisfaction.", github: 'https://github.com/jacksonarsmith/next-contracting-website', link: 'https://next-contracting-website.vercel.app/', image: '/ico-website-project.png'},
    { title: 'Smith Solutions Website', description: 'A web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that showcases my freelance development operations. The application is designed with a user-friendly interface that allows users to navigate through my portfolio and understand the services I offer. It demonstrates my skills in full-stack development and my ability to create efficient, scalable, and maintainable code.', github: 'https://github.com/jacksonarsmith/smith-solutions-website', link: 'https://softwaresmithsolutions.vercel.app', image: '/smith-solutions-project.png'},
  ];

  return (
    <div id='projects' className={styles.projects}>
      <h1 className={styles.heading}>Projects</h1>
      <hr className={styles.headingHr}/>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2>{project.title}</h2>
            <hr />
            <Image src={project.image} width={500} height={200} alt='Project Picture' className={styles.image} priority={false}/>
            <p>{project.description}</p>
            <div className={styles.links}>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faLink } className={styles.icon}/>
              </Link>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faGithub } className={styles.icon}/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}