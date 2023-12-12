import styles from '../../../styles/index.module.scss'
import { getLayout } from '../../header/Header'
import Link from 'next/link'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import url from '../../../url/url'

const url = process.env.NEXT_PUBLIC_API_HOST

const Edit = () => {
    const router = useRouter();
    // const [data, setData] = useState([]);
    const [probeId, setProbeId] = useState('');
    const [hddcode, setHddcode] = useState('');
    const [typecode, setTypecode] = useState('');
    const [price, setPrice] = useState('');
    const [note, setNote] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const addprobe = () => {
        const probeInfo = {
            probeId: probeId,
            type: typecode,
            harddiskdrive: hddcode,
            price: price,
            note: note,
        }
        fetch(`http://${url}/api/Probe/`, {
            method: 'POST',
            body: JSON.stringify(probeInfo),
            headers: {
                'content-type': 'application/json'
            },
        }).then((response) => {
            response.json()
            router.push('/probes/probelist')
        })

    }

    useEffect(() => {
        validateForm();
    }, [probeId, hddcode, typecode, price]);

    const validateForm = () => {
        let errors = {};

        if (!probeId) {
            errors.probeId = 'probeId is required.';
        } else if (!(Number(probeId))) {
            errors.probeId = 'probeId no a number.';
        }

        if (!hddcode) {
            errors.hddcode = 'hddcode is required.';
        }

        if (!typecode) {
            errors.typecode = 'typecode is required.';
        }

        if (!price) {
            errors.price = 'price is required.';
        } else if (!(Number(price))) {
            errors.price = 'price no a number.';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }

    const probeSubmit = () => {
        if (isFormValid) {
            console.log('Form submitted successfully!');
            addprobe()
        } else {
            console.log('Form has errors. Please correct them.');
            // errors.submit = '請檢查新增內容' 
            // setErrors(errors);
        }
    };

    return (
        <div className={`${styles.display}`}>
            <Head><title>{'新增設備資訊'}</title></Head>
            <form className={`${styles.display} ${styles.editprobe}`}>
                <div className={`${styles.probeInfo} ${styles.display}`}>
                    <div className={`${styles.probetitle} ${styles.display}`}><h1>{'新增設備資訊'}</h1></div>
                    <div className={`${styles.probecontent}`}>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>probe ID: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='probeId' placeholder={'請輸入 probeID'} value={probeId} onChange={(e) => {
                                    setProbeId(e.target.value)
                                }} />
                            </div>
                        </div>
                        {!!errors.probeId && <p className={styles.error1}>{errors.probeId}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>硬碟: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='harddiskdrive' required onChange={(e) => {
                                    setHddcode(e.target.value)
                                }}>
                                    <option value={""}>請選擇容量大小</option>
                                    <option value={0}>8GB</option>
                                    <option value={1}>16GB</option>
                                </select>

                            </div>
                        </div>
                        {!!errors.hddcode && <p className={styles.error1}>{errors.hddcode}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>型號: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='probetype' required onChange={(e) => {
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
                        {!!errors.typecode && <p className={styles.error1}>{errors.typecode}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>單價:  </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='probeId' placeholder={'請輸入 單價'} required onChange={(e) => {
                                    setPrice(e.target.value)
                                }} />
                            </div>
                        </div>
                        {!!errors.price && <p className={styles.error1}>{errors.price}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.note} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>備註: </div>
                            <div className={` ${styles.textareacell}`}>
                                <textarea name='note' onChange={(e) => {
                                    setNote(e.target.value)
                                }}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={` ${styles.confirm} ${styles.display} `}>
                        <div className={`${styles.flex1} ${styles.display} ${styles.btnleft}`} onClick={() => {
                            router.back()
                        }}>返回</div>
                        <div className={`${styles.flex1} ${styles.display} ${styles.btnright}`} onClick={() => {
                            probeSubmit()
                        }}>送出</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

Edit.getLayout = getLayout;
export default Edit