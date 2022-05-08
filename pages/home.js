/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Hu's Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Meow</h1>
      <h1>Meow</h1>
      <h1>Meow</h1>
      <h1>Meow</h1>
      <h1>Meow</h1>
    </div>
  )
}
