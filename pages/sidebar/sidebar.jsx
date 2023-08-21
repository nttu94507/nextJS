import Link from 'next/link'
import styles from '../../styles/index.module.scss'

export default function SideBar({ title }) {
    return (
        <div className={`${styles.header}`}>
            <Link href='/probes'>
                <div className={styles.option}>
                    {`設備管理`}
                </div>
            </Link>
            <Link href='/customer'>
                <div className={styles.option}>
                    {`客戶管理 `}
                </div>
            </Link>
            <Link href='/transfer'>
                <div className={styles.option}>
                    {`出貨管理`}
                </div>
            </Link>
            <Link href='/staff'>
                <div className={styles.option}>
                    {`員工管理 `}
                </div>
            </Link>
        </div>

    )
}   