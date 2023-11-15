import styles from '../../styles/index.module.scss'
import Head from 'next/head'
import {getLayout} from '../header/Header' 

const Customer =() =>{

    <div>
        <Head><title>客戶列表</title></Head>
        <div className={`${styles.Customer}`}>

        </div>
    </div>
} 

Customer.getLayout= getLayout;

export default Customer

