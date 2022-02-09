import styles from '../../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useEffect} from "react"

export default function Nav() {
    return (
        <>
        <nav className={styles.nav}>
            <div className={styles.navItems}>
                <div className={styles.appnav}>
                    <Image src="/slash/public/Konu.png" width={10} height={10}></Image>
                    <Link href="/"><span className={styles.appname}>Slash</span></Link>
                </div> 
                <div className={styles.tabnav}>
                    <Link href="/projects"><a className={styles.comtab, styles.tab}>Projects</a></Link>
                    <Link href="/settings/profile"><a className={styles.comtab, styles.tab}>Profile</a></Link>
                </div>
                <div className={styles.accountnav}></div>
            </div>
        </nav>
        <mobilenav class="mobtab">
            <div className={styles.side}>
            <br /><br /><br /><br /><br /><br />
            </div>
        </mobilenav>
        </>
    )
}

/*
function openTab(tabName) {
    useEffect(() => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabCon");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab");
        
        document.getElementById(tabName).style.display = "block";
    }, []);
}*/