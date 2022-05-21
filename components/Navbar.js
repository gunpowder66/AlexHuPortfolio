/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './Mobilenav.js'

import useWindowDimensions from '../resources/useWindowDimensions.js'

export default function Navbar () {

  if (typeof window !== 'undefined') {
    const { width } = useWindowDimensions();

    if (width <= 950) {
      return <MobileNav />
    }
  }

  return (
    <div className={styles.nav}>
      <Link href='/'>
        <div className={styles.pages}>Projects</div>
      </Link>
      <div className={styles.image}>
        <Image src={'/logo.png'} alt='logo' layout="fill" objectFit="contain"/>
      </div>
      <Link href='/about'>
        <div className={styles.pages}>About</div>
      </Link>
    </div>
  )
}