import styles from '../../../styles/index.module.scss'
import { getLayout } from '../../../componer/header/Header'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import url from '../../../url/url'

const url = process.env.NEXT_PUBLIC_API_HOST

const Edit = () => {
    const router = useRouter();
    // const [data, setData] = useEffect()
    const [GUInumber, setGUInumber] = useState('');
    const [Organization_Name, setOrganization_Name] = useState('');
    const [Organization_Address, setOrganization_Address] = useState('');
    const [contractPerson, setcontractPerson] = useState('');
    const [contractPerson_PhoneNumber, setcontractPerson_PhoneNumber] = useState('');
    const [contractPerson_Email, setcontractPerson_Email] = useState('');
    const [SalesID, setSalesID] = useState('');
    const [FAEID, setFAEID] = useState('');
    const [note, setNote] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const addcustomer=()=>{
        const customerInfo = {
            // id: Id,
            GUInumber: GUInumber,
            Organization_Name:Organization_Name,
            Organization_Address:Organization_Address,
            contractPerson:contractPerson,
            contractPerson_PhoneNumber:contractPerson_PhoneNumber,
            contractPerson_Email:contractPerson_Email,
            SalesID: SalesID,
            FAEID: FAEID,
            note: note,
        }
        fetch(`http://${url}/api/customer/`, {
            method: 'POST',
            body: JSON.stringify(customerInfo),
            headers: {
                'content-type': 'application/json'
            },
        }).then(()=>{
            router.push('/customers/customerlist')
        }).catch((error)=>{
            console.log(error)
        })


        console.log(customerInfo)
        
    }

    useEffect (() => {
        let errors = {};

        if (!GUInumber) {
            errors.GUInumber = 'GUInumber is required.';
        } else if (!(Number(GUInumber))) {
            errors.GUInumber = 'GUInumber no a number.';
        }

        if (!Organization_Name) {
            errors.Organization_Name = 'Organization_Name is required.';
        }

        if (!Organization_Address) {
            errors.Organization_Address = 'Organization_Address is required.';
        }

        if (!contractPerson) {
            errors.contractPerson = 'contractPerson is required.';
        }

        if (!contractPerson_PhoneNumber) {
            errors.contractPerson_PhoneNumber = 'contractPerson_PhoneNumber is required.';
        } else if (!(Number(contractPerson_PhoneNumber))) {
            errors.GUInumber = 'contractPerson_PhoneNumber no a number.';
        }

        if (!contractPerson_Email) {
            errors.contractPerson_Email = 'contractPerson_Email is required.';
        }

        if (!SalesID) {
            errors.SalesID = 'SalesID is required.';
        }

        if (!FAEID) {
            errors.FAEID = 'FAEID is required.';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }, [GUInumber, Organization_Name, Organization_Address, contractPerson,contractPerson_PhoneNumber,contractPerson_Email,SalesID,FAEID]);

    const validateForm = () => {
        let errors = {};

        if (!GUInumber) {
            errors.GUInumber = 'GUInumber is required.';
        } else if (!(Number(GUInumber))) {
            errors.GUInumber = 'GUInumber no a number.';
        }

        if (!Organization_Name) {
            errors.Organization_Name = 'Organization_Name is required.';
        }

        if (!Organization_Address) {
            errors.Organization_Address = 'Organization_Address is required.';
        }

        if (!contractPerson) {
            errors.contractPerson = 'contractPerson is required.';
        }

        if (!contractPerson_PhoneNumber) {
            errors.contractPerson_PhoneNumber = 'contractPerson_PhoneNumber is required.';
        } else if (!(Number(contractPerson_PhoneNumber))) {
            errors.GUInumber = 'contractPerson_PhoneNumber no a number.';
        }

        if (!contractPerson_Email) {
            errors.contractPerson_Email = 'contractPerson_Email is required.';
        }

        if (!SalesID) {
            errors.SalesID = 'SalesID is required.';
        }

        if (!FAEID) {
            errors.FAEID = 'FAEID is required.';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }
    
    return (
        <div className={`${styles.display}`}>
            <Head><title>{'新增客戶資訊'}</title></Head>
            <div className={`${styles.display} ${styles.editprobe}`}>
                {/* <div ><h1>{data.probeId ? '修改設備資訊' : '新增設備資訊'}</h1></div> */}
                {/* {data.probeId ? '修改設備資訊' : '新增設備資訊'} */}
                <div className={`${styles.probeInfo} ${styles.display}`}>
                    <div className={`${styles.probetitle} ${styles.display}`}><h1>{'新增客戶資訊'}</h1></div>
                    <div className={`${styles.probecontent}`}>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>統一編號: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='GUInumber' placeholder={'請輸入統一編號'} onChange={(e)=>{
                                    setGUInumber(e.target.value)
                                }}/>
                            </div>
                        </div>
                        {!!errors.GUInumber && <p className={styles.error1}>{errors.GUInumber}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>公司名稱: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='Organization_Name' placeholder={'請輸入公司名稱'} onChange={(e)=>{
                                    setOrganization_Name(e.target.value)
                                }}/>
                            </div>
                        </div>
                        {!!errors.Organization_Name && <p className={styles.error1}>{errors.Organization_Name}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>公司地址: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='Organization_Address' placeholder={'請輸入公司地址'} onChange={(e)=>{
                                    setOrganization_Address(e.target.value)
                                }}/>
                            </div>
                        </div>
                        {!!errors.Organization_Address && <p className={styles.error1}>{errors.Organization_Address}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>承辦人: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='contractPerson' placeholder={'請輸入承辦人姓名'} onChange={(e)=>{
                                    setcontractPerson(e.target.value)
                                }}/>
                            </div>
                        </div>
                        {!!errors.contractPerson && <p className={styles.error1}>{errors.contractPerson}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>承辦人電話: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='contractPerson_PhoneNumber' placeholder={'請輸入承辦人電話'} onChange={(e)=>{
                                    setcontractPerson_PhoneNumber(e.target.value)
                                }}/>
                            </div>
                        </div>
                        {!!errors.contractPerson_PhoneNumber && <p className={styles.error1}>{errors.contractPerson_PhoneNumber}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>承辦人Email: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='contractPerson_Email' placeholder={'請輸入承辦人Email'} onChange={(e)=>{
                                    setcontractPerson_Email(e.target.value)
                                }}/>
                            </div>
                        </div>
                        {!!errors.contractPerson_Email && <p className={styles.error1}>{errors.contractPerson_Email}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>負責業務: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='SalesID' required onChange={(e)=>{
                                    setSalesID(e.target.value)
                                }}>
                                    <option value={""}>請選擇業務</option>
                                    <option value={2}>Jenlin</option>
                                    <option value={1}>Wade</option>
                                </select>
                            </div>
                        </div>
                        {!!errors.SalesID && <p className={styles.error1}>{errors.SalesID}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>負責工程師: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='FAEID' required onChange={(e)=>{
                                    setFAEID(e.target.value)
                                }}>
                                    <option value={""}>請選擇工程師</option>
                                    <option value={6}>Jason</option>
                                    <option value={1}>Joy</option>
                                    <option value={2}>Leo</option>
                                    <option value={3}>Bobby</option>
                                    <option value={4}>Jorden</option>
                                    <option value={5}>Hank</option>
                                </select>
                            </div>
                        </div>
                        {!!errors.FAEID && <p className={styles.error1}>{errors.FAEID}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.note} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>備註: </div>
                            <div className={` ${styles.textareacell}`}>
                                <textarea name='note' onChange={(e)=>{
                                    setNote(e.target.value)
                                }}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={` ${styles.confirm} ${styles.display} `}>
                        <div className={`${styles.flex1} ${styles.display} ${styles.btnleft}`} onClick={()=>{
                            router.back()
                        }}>返回</div>
                        <div className={`${styles.flex1} ${styles.display} ${styles.btnright}`} onClick={()=>{
                            customerSubmit()
                        }}>送出</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Edit.getLayout = getLayout;
export default Edit