import { getLayout } from "../header/Header";
import styles from '../../styles/index.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const url = process.env.NEXT_PUBLIC_API_HOST

const testdata = [
    {
        id: 3,
        GUInumber: 23142353,
        Organization_Name: '賜泓科技',
        contractPerson	: '傅昱智',
        saleID: 0,
        FAEID: 1,
        createdate: '2023/08/29',
        Maintenance_Agreement_at: '2024/08/29',
        status: 0,
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

const customerlist = () => {
    const [customerdata, setcustomerdata] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // fetch('http://'+local+'/api/Probe')
        fetch(`http://${url}/api/customers`)
            .then((response) => response.json())
            .then((res) => {
                setcustomerdata(res);
                // console.log('123');
            })
    }, [])

    const Cardmap = (data) => {

        // const disable = (Id) => {

        //     const action = confirm('確定要停用?')
        //     if (action) {
        //         const probeInfo = {
        //             id: Id,
        //         }
        //         fetch(`http://${url}/api/Probe/invisible`, {
        //             method: 'POST',
        //             body: JSON.stringify(probeInfo),
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //         }).then((response) => {
        //             fetch(`http://${url}/api/Probe`)
        //                 .then((response) => response.json())
        //                 .then((res) => {
        //                     setprobedata(res);
        //                     // console.log('123');
        //                 })
        //         }
        //         )

        //     } else {
        //         console.log('取消動作')
        //     }
        // }
        // console.log(data.d)
        if (data.d.length == '') {
            return <div>暫無客戶資料</div>
        } else {
            return data.d.map(dat => (

                <div className={`${styles.card} = ${styles.display}`}>
                    <div className={`${styles.cardupper} ${styles.display} `}>
                        <div className={`${styles.probeid} ${styles.display}`}>
                             {dat.Organization_Name}{/*客戶名稱 */}
                        </div>
                        <div className={`${styles.probestatus} ${styles.display}`}>
                            {dat.Maintenance_Agreement_at}{/*保固到期日 */}
                        </div>
                    </div>
                    <div className={`${styles.cardcontent}`}>
                        <div>承辦人員:{dat.contractPerson}</div>
                        <div>聯繫方式:{dat.contractPerson_PhoneNumber}</div>
                        {/* <div>批次:{dat.createdate}</div> */}
                        {/* <div>硬碟大小:{dat.harddiskdrive}</div>
                        <div>單價:{dat.price}</div> */}
                        <div>備註:{dat.note ? dat.note : ''}</div>
                    </div>
                    <div className={`${styles.cardbuttom} ${styles.display}`}>
                        <Link href={`/customers/edit/${dat.id}`}><div className={`${styles.flex1} ${styles.justfy} ${styles.display} ${styles.btnleft}`}>修改</div></Link>
                        <Link href={`/customers/detail/${dat.id}`}><div className={`${styles.flex1} ${styles.justfy} ${styles.display} ${styles.btnright}`} onClick={() => {
                            detail(`${dat.id}`)
                        }}>詳細</div></Link>
                    </div>
                </div>
            )
            )
        }
    }

    return (

        <div className={`${styles.display}`}>
            <Head><title>查詢客戶</title></Head>
            {/* <Header title="probe"/> */}
            <div className={`${styles.probelistcontent}`}>
                <Cardmap d={customerdata ? customerdata : ''} />
            </div>
        </div >
    )
}

customerlist.getLayout = getLayout;

export default customerlist