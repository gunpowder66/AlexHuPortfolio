/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/MobileHome.module.css'
import { Card, Paper } from '@mui/material';

export default function Mobileindex() {
  const [val, setVal] = useState(false);
  const [course, setCourse] = useState(false);
  const [kloth, setKloth] = useState(false);

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
        onMouseLeave={() => setCourse(false)}
        onClick={() => window.open('https://github.com/gunpowder66/classmates', '_blank')}>
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
        onMouseLeave={() => setVal(false)}
        onClick={() => window.open('https://github.com/gunpowder66/Valorankings', '_blank')}>
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
        onMouseEnter={() => setKloth(true)}
        onMouseLeave={() => setKloth(false)}
        onClick={() => window.open('https://github.com/gunpowder66/Kloth', '_blank')}>
          <div className={styles.klothGif}>
            {
              (kloth)
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

      <div className={styles.cardDiv} >
        <Card
        className={styles.card}
        id='klothapi-card'
        onMouseEnter={() => setVal(true)}
        onMouseLeave={() => setVal(false)}
        onClick={() => window.open('https://github.com/gunpowder66/Kloth-Reviews-API', '_blank')}>
          <div className={styles.gif}>
            <Image src={'/KlothApi.png'} alt='gif' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.title}>Kloth - Api</div>
          <div className={styles.description}>
          Back-end api for an e-commerce website designed to be scalable and meet demands of any traffic
          <br/>
          <br/>
          Built with:
          <br/>
          Node, Nginx, Express, Postgres, and K6
          </div>
        </Card>
      </div>

      <div style={{marginTop: '5%'}}>𓁹‿𓁹</div>
    </div>
  )
}
