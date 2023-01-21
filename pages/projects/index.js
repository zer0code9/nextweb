import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import style from './Projects.module.css'
import React from 'react'

export default function Projects() {
    var projects = 
    [
        { "name": "SlashPack", "desc": "URLs to subprojects", "version": "v1.2.0" }
    ]
    var future = 
    [
        { "name": "LagScope", "desc": "Small APIs for developers" },
        { "name": "Crash", "desc": "A multi-purpose programming language" },
    ]

    var subprojects = 
    [
        { "name": "CSS Shortcuts", "desc": "CSS shortcuts by class names", "version": "v1.1.5", "from": "Slash" }
    ]
    var futuresub = 
    [
        { "name": "SmoothLS", "desc": "Make your page smoother", "from": "LagScope" },
        { "name": "Crystal", "desc": "The Crash Node.js", "from": "Crash" },
        { "name": "Glitch", "desc": "The Crash's JSON", "from": "Crash" }
    ]
    return (
        <>
        <Head><title>Projects</title></Head>
        <div className={style.wrap}>
        <div>
            <div>
                <div>Projects</div>
                {projects.map(function(key, idx) { 
                    return (
                        <div className={[idx+1] && styles.card}>
                            <div className={styles.cardcontent}>
                                <div className={styles.titles}>
                                    <div className={styles.title}>{key.name}</div>
                                    <div className={styles.subtitle}>{key.desc}</div>
                                    <div className={styles.credits}>{key.version}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <div>Future Projects</div>
                {future.map(function(key, idx) { 
                    return (
                        <div className={[idx+1] && styles.card}>
                            <div className={styles.cardcontent}>
                                <div className={styles.titles}>
                                    <div className={styles.title}>{key.name}</div>
                                    <div className={styles.subtitle}>{key.desc}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <div>
                <div>Subprojects</div>
                {subprojects.map(function(key, idx) { 
                    return (
                        <div className={[idx+1] && styles.card}>
                            <div className={styles.cardcontent}>
                                <div className={styles.titles}>
                                    <div className={styles.title}>{key.name}</div>
                                    <div className={styles.subtitle}>{key.desc}</div>
                                    <span className={styles.credits}>{key.version}</span><span>  </span>
                                    <span className={styles.credits}>From {key.from}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <div>Future Subprojects</div>
                {futuresub.map(function(key, idx) { 
                    return (
                        <div className={[idx+1] && styles.card}>
                            <div className={styles.cardcontent}>
                                <div className={styles.titles}>
                                    <div className={styles.title}>{key.name}</div>
                                    <div className={styles.subtitle}>{key.desc}</div>
                                    <div className={styles.credits}>From {key.from}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
        </>
    )
}