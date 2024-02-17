import styles from '../../../styles/index.module.scss'
import { getLayout } from '../../../componer/header/Header'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { use, useEffect, useState } from 'react'

const Infomation = () => {
    const router = useRouter();

    const { Id } = router.query
    const url = process.env.NEXT_PUBLIC_API_HOST
    useEffect(() => {

    })

    return (
        <div className={`${styles.display}`}>
            <Head><title>客戶詳細資訊</title></Head>
            <div>{Id}</div>
            <div>{url}</div>
        </div>
    )
}

Infomation.getLayout = getLayout
export default Infomation;