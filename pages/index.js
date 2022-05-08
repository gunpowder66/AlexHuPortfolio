/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { Card, Paper } from '@mui/material';

export default function LandingPage() {
  const [imgHover, setImgHover] = useState(false);

  const onHover = () => {
    setImgHover(true);
  }

  const onExit = () => {
    setImgHover(false);
  }



  return (
    <div className={styles.all}>
      <Head>
        <title>Alex Hu's Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Alex Hu Website Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card className={styles.card} raised={false}>
        <div className={styles.gif}>
          <Image src={'/gifs/Valorankings_voting.gif'} alt='gif' layout='fill' objectFit="contain"/>
        </div>
      </Card>


    </div>
  )
}
