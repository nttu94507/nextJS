import styles from '../../styles/index.module.scss'
import { getLayout } from '../header/Header'
import Header from '../sidebar/sidebar'
import Head from 'next/head'
import Link from 'next/link'
// import Home from '../index'

const Probes = () => {
    return (
        <div className={`${styles.display}`}>
            <Head><title>設備管理</title></Head>
            {/* <Header title="probe" /> */}
            <div className={styles.probescontent}>
                <div className={styles.probesupper}>
                    {/* <div className={`${styles.probesupperleft} ${styles.display}`}>
                        <input type="text" />
                    </div>
                    <div className={styles.probesuppermid}>
                    
                    </div>
                    <div className={styles.probesupperright}>
                        <div className={`${styles.btn} ${styles.display}`}>新增</div>
                    </div> */}

                    <div className={`${styles.probesteleport} ${styles.display}`}>
                        
                        {/* <div className={`${styles.display}`}> */}
                        <Link href="/probes/probelist"><div className={styles.probescube}>新增</div></Link>
                            {/* <div className={styles.probescube}>修改</div> */}
                        {/* </div>
                        <div> */}
                            <Link href="/probes/probelist"><div className={styles.probescube}>查詢</div></Link>
                            {/* <div className={styles.probescube}>刪除</div> */}
                        {/* </div> */}


                    </div>

                    {/* <div className={`${styles.dashboardcube} ${styles.display}`}><div className={`${styles.cubeup}`}>P110</div><div className={`${styles.cubebtm}`}>3/223</div></div>
                    <div className={`${styles.dashboardcube} ${styles.display}`}><div className={`${styles.cubeup}`}>P120</div><div className={`${styles.cubebtm}`}>3/223</div></div>
                    <div className={`${styles.dashboardcube} ${styles.display}`}><div className={`${styles.cubeup}`}>P140</div><div className={`${styles.cubebtm}`}>3/223</div></div>
                    <div className={`${styles.dashboardcube} ${styles.display}`}><div className={`${styles.cubeup}`}>P220</div><div className={`${styles.cubebtm}`}>3/223</div></div>
                    <div className={`${styles.dashboardcube} ${styles.display}`}><div className={`${styles.cubeup}`}>P360</div><div className={`${styles.cubebtm}`}>3/223</div></div>
                    <div className={`${styles.dashboardcube} ${styles.display}`}><div className={`${styles.cubeup}`}>P560</div><div className={`${styles.cubebtm}`}>3/223</div></div> */}

                </div>
            </div>
        </div>
    )
}

Probes.getLayout = getLayout;
export default Probes; 