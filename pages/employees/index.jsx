import styles from '../../styles/index.module.scss'
import Head from 'next/head'
import { getLayout } from '../../componer/header/Header'
import Link from 'next/link'

const Customers = () => {
    return (
        <div className={`${styles.display}`}>
            <Head><title>員工管理</title></Head>
            {/* <Header title="probe" /> */}
            <div className={styles.probescontent}>
                <div className={styles.probesupper}>
                    <div className={`${styles.probesteleport} ${styles.display}`}>
                        <Link href="/employees/edit"><div className={styles.probescube}>新增員工</div></Link>
                        <Link href="/employees/employeeslist"><div className={styles.probescube}>查詢員工</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



Customers.getLayout = getLayout;

export default Customers

