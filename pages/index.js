import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'

function Blog({ posts }) {
  return (
    <div>
      <Head><title>Slash</title></Head>
      <div className={styles.cards}>
        <div>
          {posts.map(function(key, idx) { 
            return (
              <card className={idx}>
                <div className={styles.cardcontent}>
                  <div className={styles.titles}>
                    <div className={styles.subtitle}>
                        {key.subtitle}
                    </div>
                    <div className={styles.title}>
                      {key.title}
                    </div>
                </div>
            </div>
        </card>
      )
      })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://raw.githubusercontent.com/isplashy/post/main/post.json')
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  }
}

export default Blog
