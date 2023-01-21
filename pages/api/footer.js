import styles from '../../styles/Home.module.css'
import React from 'react'
import {useEffect} from "react"

function support() {
    
}

export default function Footer() {
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.footerItems}>
                <a>SlashDEV</a>
                <a>SlashSEC</a>
                <a>SlashART</a>
            </div>
            <div className={styles.footerItems}>
                <a>About</a>
                <a>Privacy</a>
                <a>Security</a>
            </div>
        </div>
        <div className={styles.about}>
            <span>Created & Powered by Slash</span>
            <span>&copy; Slash</span>
        </div>
        </>
    )
}