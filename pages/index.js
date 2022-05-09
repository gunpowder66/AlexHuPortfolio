/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { Card, Paper } from '@mui/material';

export default function LandingPage() {
  const [val, setVal] = useState(false);
  const [course, setCourse] = useState(false);


  return (
    <div className={styles.all}>
      <Head>
        <title>Alex Hu's Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Alex Hu Website Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cardDiv} >
        <Card
        className={styles.card}
        id='classmates-card'
        onMouseEnter={() => setCourse(true)}
        onMouseLeave={() => setCourse(false)}>
          <div className={styles.gif}>
            {
              (course)
              ? <Image src={'/gifs/classmates.gif'} alt='gif' layout='fill' objectFit="contain"/>
              : <Image src={'/classmatesfreeze.png'} alt='gif' layout='fill' objectFit='contain' />
            }
          </div>
          <div className={styles.title}>Classmates</div>
          <div className={styles.description}>
          Mentorship-based remote learning platform that connects mentors and mentees around the world
          <br/>
          <br/>
          Built with:
          <br/>
          Node, Nextjs, Firebase, MUI, and Jest
          </div>
        </Card>
      </div>

      <div className={styles.cardDiv} >
        <Card
        className={styles.card}
        id='val-card'
        onMouseEnter={() => setVal(true)}
        onMouseLeave={() => setVal(false)}>
          <div className={styles.gif}>
            {
              (val)
              ? <Image src={'/gifs/Valorankings_voting.gif'} alt='gif' layout='fill' objectFit="contain"/>
              : <Image src={'/staticimg_val.png'} alt='gif' layout='fill' objectFit='contain' />
            }
          </div>
          <div className={styles.title}>ValoRankings</div>
          <div className={styles.description}>
          Full stack crowdsourcing web application that utilizes a voting system to gather real time data and show popularity rankings for all cosmetic items used in the game Valorant.
          <br/>
          <br/>
          Built with:
          <br/>
          Node, React, Express, and Postgres
          </div>
        </Card>
      </div>

      <div className={styles.cardDiv} >
        <Card
        className={styles.card}
        id='kloth-card'
        onMouseEnter={() => setVal(true)}
        onMouseLeave={() => setVal(false)}>
          <div className={styles.klothGif}>
            {
              (val)
              ? <Image src={'/gifs/reviews_filters.gif'} alt='gif' layout='fill' objectFit="contain"/>
              : <Image src={'/klothfreeze.png'} alt='gif' layout='fill' objectFit='contain' />
            }
          </div>
          <div className={styles.Klothtitle}>Kloth</div>
          <div className={styles.Klothdescription}>
          A single-page, front-end web application of the product page for an e-commerce website
          <br/>
          <br/>
          Built with:
          <br/>
          Node, React, Express, and MUI
          </div>
        </Card>
      </div>

      <div style={{marginTop: '5%'}}>MEOW</div>
    </div>
  )
}
