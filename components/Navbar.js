import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar () {



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