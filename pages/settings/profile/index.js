import Head from 'next/head'
import style from '../Profile.module.css'
import React from 'react'
import Link from 'next/link'

export default function AccountPage() {
    return (
        <>
        <Head>
            <title>Profile</title>
        </Head>
        <div className={style.dataContent}>
          <div className={style.contentArea}>
            <div className={style.content}>
              <div className={style.setting}>Settings</div>
              <div className={[style.cont, style.current].join(" ")}>Profile</div>
              <Link className={style.link} href="../settings/account"><div className={style.cont}><a className={style.links}>Account</a></div></Link>
              <Link href="../settings/security"><div className={[style.cont, style.last].join(" ")}><a>Security</a></div></Link>
            </div>
          </div>
          <div className={style.meDataArea}>
            <strong className={style.titleData}>Account</strong><hr />
            <div className="meData">
              <div className={style.settingArea}>
                <strong>Display Name</strong>
                <input type="text" className={style.input} />
                <div class="h6">Your display name is the name that others will see you as. If left empty, your username will be your display name</div>
              </div>
              <div className={style.settingArea}>
                  <strong>Email</strong>
                  <input type="text" className={style.input} />
              </div>
              <div className={style.settingArea}>
                <strong>URL</strong>
                <input type="date" className={style.input} />
              </div>
              <div className={style.settingArea}>
                <strong>Business</strong>
                <input type="date" className={style.input} />
                <div class="h6">Let others know who you work for!</div>
              </div>

              <div>
                <button type="submit" className={[style.saveProfile, style.button].join(" ")}>Save Account</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}