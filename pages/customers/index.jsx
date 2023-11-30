import styles from '../../styles/index.module.scss'
import Head from 'next/head'
import {getLayout} from '../header/Header' 
import Link from 'next/link'

const Customer = () =>{

    return(
        <div>
        <Head><title>{'客戶列表'}</title></Head>
        <div className={`${styles.customer} `}>
            <div className={` ${styles.flex}`}>誠品生活</div>
            <div className={` ${styles.flex}`}>內容列</div>
        </div>
    </div>
    )
} 
const Customers = () => {
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
                        <Link href="/customers/edit"><div className={styles.probescube}>新增客戶</div></Link>
                            {/* <div className={styles.probescube}>修改</div> */}
                        {/* </div>
                        <div> */}
                            <Link href="/customers/customerlist"><div className={styles.probescube}>查詢客戶</div></Link>
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



Customers.getLayout= getLayout;

export default Customers

