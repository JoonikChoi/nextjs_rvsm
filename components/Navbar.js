//import styles from '../styles/Home.module.css'
import styles from "../styles/NavbarMain.module.css"
import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link'

export default function NavbarMain() {
  return (
    <div className={styles.root}>
    <div className={styles.top_container}>
      <a href="/" className={styles.logo}></a>
    </div>
    <div className={styles.sub_nav_container}>
      <ul className={styles.sub_nav_top}>
        {/* <li> 
          <span className={styles.sub_nav_toggle}>님 안녕하세요</span>
        </li>
        <li> 
          <div onclick="logout()" className={styles.sub_nav_toggle}>로그아웃</div>
        </li> */}
        <li className={styles.li}>
          <Link href="/login">
            <a className={styles.sub_nav_toggle}>로그인</a>
          </Link>
        </li>
        <li className={styles.li}>
          <a href="/registration" className={styles.sub_nav_toggle}>회원가입</a>
        </li>
      </ul>
    </div>
    <div className={styles.main_nav_container}>
      <ul className={styles.main_nav}>
        <li className={styles.li}><a href="/iot" className={styles.main_nav_toggle}>환자 정보 보기</a></li>
        <li className={styles.li}><a href="/rtc" className={styles.main_nav_toggle}>Nodejs Socket Test</a></li>
        <li className={styles.li}><a href="/peerjs_sample" className={styles.main_nav_toggle}>Sample</a></li>
      </ul>
    </div>
    </div>
  )
}
