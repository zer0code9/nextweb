import Head from 'next/head'
import style from '../Profile.module.css'
import React from 'react'
import Link from 'next/link'

export default function AccountPage() {
    return (
        <>
        <Head>
            <title>Security</title>
        </Head>
        <div className={style.dataContent}>
          <div className={style.contentArea}>
            <div className={style.content}>
              <div className={style.setting}>Settings</div>
              <Link href="../settings/profile"><div className={style.cont}>Profile</div></Link>
              <Link className={style.link} href="../settings/account"><div className={style.cont}><a className={style.links}>Account</a></div></Link>
              <div className={[style.cont, style.last, style.current].join(" ")}>Security</div>
            </div>
          </div>
          <div className={style.meDataArea}>
            <strong className={style.titleData}>Account</strong><hr />
            <div className="meData">

              <div className={style.settingArea}>
                <strong>Password</strong>
                <input type="button" value="Change Password" className={style.button} />
              </div>

              <div className={style.settingArea}>
                <strong>2-Factor Login</strong>
                <input type="button" value="Apply" className={style.button} />
              </div>
            </div>
          </div>
        </div>
        </>
    )
}