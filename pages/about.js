/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import styles from '../styles/About.module.css'
import Mobileabout from '../components/Mobileabout.js'

import useWindowDimensions from '../resources/useWindowDimensions.js'

export default function About() {

  if (typeof window !== 'undefined') {
    const { width } = useWindowDimensions();

    if (width <= 950) {
      return <Mobileabout />
    }
  }


  return (
    <div className={styles.all}>
      <div className={styles.profile}>
        <Image src={'/itsme.png'} alt='image' layout='fill' objectFit="contain"/>
      </div>
      <div className={styles.title}>
        Hello!
      </div>
      <div className={styles.aboutme}>
        My name is Alex Hu and I am a software engineer looking to build fun and interesting projects.
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