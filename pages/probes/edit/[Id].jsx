import styles from '../../../styles/index.module.scss'
import { getLayout } from '../../header/Header'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { use, useEffect, useState } from 'react'
import { redirect } from 'next/dist/server/api-utils'
// import url from '../../../url/url'

const Edit = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [probeId, setProbeId] = useState('');
    const [hddcode, setHddcode] = useState('');
    const [typecode, setTypecode] = useState('');
    const [price, setPrice] = useState('');
    const [note, setNote] = useState('');

    const { Id } = router.query

    const url = process.env.NEXT_PUBLIC_API_HOST

    useEffect(() => {
        if (!router.isReady) return;
        console.log(process.env.NEXT_PUBLIC_API_HOST)
        
        fetch(`http://${url}/api/Probe/detail/${Id}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                setData(res[0]);
                setProbeId(res[0].probeId)
                setHddcode(res[0].hddcode)
                setTypecode(res[0].typecode)
                setPrice(res[0].price)
                setNote(res[0].note)
            })
    }, [router.isReady])

    const updateProbeInfo = () => {
        // const {Id} = router.query
        const probeInfo = {
            id: Id,
            probeId: probeId,
            type: typecode,
            harddiskdrive: hddcode,
            price: price,
            note: note,
        }
        // console.log(probeInfo)
        fetch(`http://${url}/api/Probe/update`, {
            method: 'POST',
            body: JSON.stringify(probeInfo),
            headers: {
                'content-type': 'application/json'
            },
        }).then((response) => 
        {
            response.json()
            router.push('/probes/probelist')
        })
    }
    return (
        <div className={`${styles.display}`}>
            <Head><title>{data.probeId ? '修改設備資訊' : '新增設備資訊'}</title></Head>
            <div className={`${styles.display} ${styles.editprobe}`}>
                <div className={`${styles.probeInfo} ${styles.display}`}>
                    <div className={`${styles.probetitle} ${styles.display}`}><h1>{data.probeId ? '修改設備資訊' : '新增設備資訊'}</h1></div>
                    <div className={`${styles.probecontent}`}>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>probe ID: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='probeId' placeholder={probeId ? probeId : '請輸入 probeID'} value={probeId ? probeId : ''}
                                // onChange={(e) => {
                                //     setProbeId(e.target.value)
                                // console.log(probeId)
                                // }} 
                                />
                            </div>
                        </div>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>硬碟: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='harddiskdrive' required value={hddcode} onChange={(e) => {
                                    setHddcode(e.target.value)
                                    // console.log(hddcode)
                                }}>
                                    <option value={""} >請選擇容量大小</option>
                                    <option value={0} >8GB</option>
                                    <option value={1} >16GB</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>型號: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='probetype' required value={typecode ? typecode : ''} onChange={(e) => {
                                    setTypecode(e.target.value)
                                }}>
                                    <option value={""}>請選擇型號</option>
                                    <option value={0}>P110</option>
                                    <option value={1}>P120</option>
                                    <option value={2}>P220</option>
                                    <option value={3}>P360</option>
                                    <option value={4}>P560</option>
                                    <option value={5}>P110+(樹苺派4)</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>單價:  </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='probeId' placeholder={price ? price : '請輸入 單價'} defaultValue={price ? price : ''} onChange={(e)=>{
                                    setNote(e.target.value)}}/>
                            </div>
                        </div>
                        <div className={`${styles.probeInfoCell} ${styles.note} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>備註: </div>
                            <div className={` ${styles.textareacell}`}>
                                <textarea name='note' defaultValue={note ? note : ''} onChange={(e)=>{
                                    setNote(e.target.value)
                                }}></textarea>
                            </div>
                        </div>
                    </div >
                    <div className={` ${styles.confirm} ${styles.display} `}>
                        <div className={`${styles.flex1} ${styles.display} ${styles.btnleft}`} onClick={() => router.back()}>放棄修改</div>
                        <div className={`${styles.flex1} ${styles.display} ${styles.btnright}`} onClick={() => {
                            updateProbeInfo('/probes/')
                        }}>送出修改</div>
                    </div>
                </div >

            </div >

        </div >
    )
}

Edit.getLayout = getLayout;
export default Edit