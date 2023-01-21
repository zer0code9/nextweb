import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'
import konu from '../public/Konu.png'

function Blog({ posts }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div>
      <Head><title>Slash</title></Head>
      <div className={styles.home}>
        <div className={styles.hero}>Hello</div>
        <div>
          Welcome to Slash
        </div>
        <Image loader={myLoader} src={konu} width={100} height={100}></Image>
      </div>
    </div>
  )
}

export default Blog
