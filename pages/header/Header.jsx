import React from 'react'
import styles from '../../styles/index.module.scss'
import Link from 'next/link'
import SideBar from '../sidebar/sidebar';

const Header = ({ children }) => {
    return (
        <>
        <div className={styles.header}>
            <div className={`${styles.probesupperleft} ${styles.display}`}><Link href="/">PIXIS CRM System</Link></div>
            <div className={`${styles.probesuppermid}`}><SideBar/></div>
            <div className={`${styles.probesuppermid}`}></div>
            <div className={`${styles.probesupperright} ${styles.display}`}><Link href="/probes">登入</Link></div>
        </div>
        { children }
        </>
    )
}

export const getLayout =(page)=><Header>{page}</Header>;


// export default Header