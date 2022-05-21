import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {


  return (
    <div className={styles.all}>
      <div className={styles.profile}>
        <Image src={'/itsme.png'} alt='image' layout='fill' objectFit="contain"/>
      </div>
      <div className={styles.title}>
        Hello!
      </div>
      <div className={styles.aboutme}>
        My name is Alex Hu and I am a software engineer looking to build fun an interesting projects.
      </div>
      <div className={styles.aboutme}>
        Contact me at:
      </div>
      <div className={styles.contact}>
        alex.hu2766@gmail.com |
        <a href="https://www.linkedin.com/in/chuntaohu" className={styles.link} target="_blank" rel="noreferrer"> Linkedin
        </a> |
        <a href="https://github.com/gunpowder66" className={styles.link} target="_blank" rel="noreferrer"> Github </a>
      </div>
    </div>
  )
}