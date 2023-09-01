import styles from '../../../styles/index.module.scss'
import { getLayout } from '../../header/Header'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Edit = () => {
    const router = useRouter();

    const [data, setData] = useState([]);

    useEffect(() => {
        if(!router.isReady) return;
        const { Id } = router.query
        fetch(`http://192.168.25.68:8000/api/Probe/detail/${Id}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                setData(res[0]);
            })
    }, [router.isReady])
    return (
        <div className={`${styles.display}`}>
            <Head><title>{data.probeId?'修改設備資訊' : '新增設備資訊'}</title></Head>
            <div className={`${styles.display} ${styles.editprobe}`}>
                <div className={`${styles.probeInfo} ${styles.display}`}>
                    <div className={`${styles.probetitle} ${styles.display}`}><h1>{data.probeId? '修改設備資訊' : '新增設備資訊'}</h1></div>
                    <div className={`${styles.probecontent}`}>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>probe ID: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='probeId' placeholder={data.probeId ? data.probeId : '請輸入 probeID'} />
                            </div>
                        </div>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>硬碟: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='harddiskdrive' required value={data.hddcode||''}>
                                    <option value={""} >請選擇容量大小</option>
                                    <option value={0} >8GB</option>
                                    <option value={1} >16GB</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>型號: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='probetype' required value={data.typecode}>
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
                                <input type='text' name='probeId' placeholder={data.probeId ? data.probeId : '請輸入 單價'} />
                            </div>
                        </div>
                        <div className={`${styles.probeInfoCell} ${styles.note} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>備註: </div>
                            <div className={` ${styles.textareacell}`}>
                                <textarea name='note'></textarea>
                            </div>
                        </div>
                    </div >
                    <div className={` ${styles.confirm} ${styles.display} `}>
                        <div className={`${styles.flex1} ${styles.display} ${styles.btnleft}`}>清除</div>
                        <div className={`${styles.flex1} ${styles.display} ${styles.btnright}`}>送出</div>
                    </div>
                    {/* <input type='text' name='probeId' placeholder={data.probeId ? data.probeId : '請輸入 probeID'} />
                    <input type='text' name='' placeholder={data ? data.probeId : '請輸入 單價'} />
                    <input type='text' placeholder={data ? data.probeId : '請輸入 備註'} /> */}
                </div >

            </div >

        </div >
    )
}

Edit.getLayout = getLayout;
export default Edit