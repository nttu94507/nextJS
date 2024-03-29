
// import Header from '../Header/header';
import styles from '../../styles/index.module.scss'
import { getLayout } from '../../componer/header/Header'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import { useRouter } from 'next/router'
// import url from '../../url/url'


const url = process.env.NEXT_PUBLIC_API_HOST

const testdata = [
    {
        id: 3,
        probeid: 23142353,
        probestatus: '出貨',
        harddiskdrive: '8GB',
        type: 'P110',
        price: '20000',
        createdate: '2023/08/29',
        ownerName: 'Kim',
        note: ''
    },
    {
        id: 3,
        probeid: 23142353,
        probestatus: '出貨',
        harddiskdrive: '8GB',
        type: 'P110',
        price: '20000',
        createdate: '2023/08/29',
        ownerName: 'Kim',
        note: ''
    },
]



const ProbeList = () => {
    const [probedata, setprobedata] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // fetch('http://'+local+'/api/Probe')
        fetch(`http://${url}/api/Probe`)
            .then((response) => response.json())
            .then((res) => {
                setprobedata(res);
                // console.log('123');
            })
    }, [])

    const Cardmap = (data) => {

        const disable = (Id) => {

            const action = confirm('確定要停用?')
            if (action) {
                const probeInfo = {
                    id: Id,
                }
                fetch(`http://${url}/api/Probe/invisible`, {
                    method: 'POST',
                    body: JSON.stringify(probeInfo),
                    headers: {
                        'content-type': 'application/json'
                    },
                }).then((response) => {
                    fetch(`http://${url}/api/Probe`)
                        .then((response) => response.json())
                        .then((res) => {
                            setprobedata(res);
                            // console.log('123');
                        })
                }
                )

            } else {
                console.log('取消動作')
            }
        }
        // console.log(data.d)
        if (data.d.length == '') {
            return <div>暫無資料</div>
        } else {


            return data.d.map(dat => (
                <div className={`${styles.card}  ${styles.display}`} key={dat.id}>
                    <div className={`${styles.cardupper} ${styles.display} `}>
                        <div className={`${styles.probeid} ${styles.display}`}>
                            {dat.probeId}
                        </div>
                        <div className={`${styles.probestatus} ${styles.display}`}>
                            {dat.status}
                        </div>
                    </div>
                    <div className={`${styles.cardcontent}`}>
                        <div>型號:{dat.type}</div>
                        <div>持有者:{dat.ownerName}</div>
                        <div>批次:{dat.createdate}</div>
                        <div>硬碟大小:{dat.harddiskdrive}</div>
                        <div>單價:{dat.price}</div>
                        <div>備註:{dat.note ? dat.note : ''}</div>
                    </div>
                    <div className={`${styles.cardbuttom} ${styles.display}`}>
                        <Link href={`/probes/edit/${dat.id}`}><div className={`${styles.flex1} ${styles.justfy} ${styles.display} ${styles.btnleft}`}>修改</div></Link>
                        <div className={`${styles.flex1} ${styles.justfy} ${styles.display} ${styles.btnright}`} onClick={() => {
                            disable(`${dat.id}`)
                        }}>停用</div>
                    </div>
                </div>
            )
            )
        }
    }

    return (
        <div className={`${styles.display}`}>
            <Head><title>查詢設備</title></Head>
            {/* <Header title="probe"/> */}
            <div className={`${styles.probelistcontent}`}>
                <Cardmap d={probedata ? probedata : ''} />
            </div>
        </div >
    )
}

ProbeList.getLayout = getLayout;

export default ProbeList;