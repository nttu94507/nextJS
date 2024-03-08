import styles from '../../../styles/index.module.scss'
import { getLayout } from '../../../componer/header/Header'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { use, useEffect, useState } from 'react'

// const router = useRouter();
// const { Id } = router.query
// const url = process.env.NEXT_PUBLIC_API_HOST


const Edit = () => {
    const router = useRouter();
    const [id, setId] = useState('');
    const [department, setDepartment] = useState('');
    // const [GUInumber, setGUInumber] = useState('');
    const [name, setName] = useState('');
    // const [Organization_Address, setOrganization_Address] = useState('');
    // const [contractPerson, setcontractPerson] = useState('');
    // const [contractPerson_PhoneNumber, setcontractPerson_PhoneNumber] = useState('');
    // const [contractPerson_Email, setcontractPerson_Email] = useState('');
    // const [SalesID, setSalesID] = useState('');
    // const [FAEID, setFAEID] = useState('');
    const [note, setNote] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const { Id } = router.query
    const url = process.env.NEXT_PUBLIC_API_HOST

    const updatecustomer = () => {
        const employeeInfo = {
            id: id,
            Name: name,
            Department: department,
            note: note,
        }
        fetch(`http://${url}/api/employee/update`, {
            method: 'POST',
            body: JSON.stringify(employeeInfo),
            headers: {
                'content-type': 'application/json'
            },
        }).then(() => {
            router.push('/employees/employeeslist')
            console.log('更新完成')
        }).catch((error) => {
            console.log(error)
        })


        // console.log(customerInfo)

    }

    useEffect(() => {
        let errors = {};

        if (!id) {
            errors.id = 'id is required.';}
        // } else if (!(Number(id))) {
        //     errors.id = 'id no a number.';
        // }

        if (!department) {
            errors.department = 'department is required.';
        }

        // if (!Organization_Address) {
        //     errors.Organization_Address = 'Organization_Address is required.';
        // }

        // if (!contractPerson) {
        //     errors.contractPerson = 'contractPerson is required.';
        // }

        // if (!contractPerson_PhoneNumber) {
        //     errors.contractPerson_PhoneNumber = 'contractPerson_PhoneNumber is required.';
        // } else if (!(Number(contractPerson_PhoneNumber))) {
        //     errors.GUInumber = 'contractPerson_PhoneNumber no a number.';
        // }

        // if (!contractPerson_Email) {
        //     errors.contractPerson_Email = 'contractPerson_Email is required.';
        // }

        // if (!SalesID) {
        //     errors.SalesID = 'SalesID is required.';
        // }

        // if (!FAEID) {
        //     errors.FAEID = 'FAEID is required.';
        // }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }, [id, name, department, note]);


    useEffect(() => {
        if (!router.isReady) return;
        console.log(Id)

        fetch(`http://${url}/api/employee/${Id}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                setId(res[0].id);
                setDepartment(res[0].department)
                setName(res[0].name)
                setNote(res[0].note ? res[0].note : '')
            })

    }, [router.isReady])


    const employeeSubmit = () => {
        if (isFormValid) {
            console.log('Form submitted successfully!');
            updatecustomer()
        } else {
            console.log('Form has errors. Please correct them.');
            // errors.submit = '請檢查新增內容' 
            // setErrors(errors);
        }
    };

    return (
        <div className={`${styles.display}`}>
            <Head><title>{'修改員工資訊'}</title></Head>
            <div className={`${styles.display} ${styles.editprobe}`}>
                {/* <div ><h1>{data.probeId ? '修改設備資訊' : '新增設備資訊'}</h1></div> */}
                {/* {data.probeId ? '修改設備資訊' : '新增設備資訊'} */}
                <div className={`${styles.probeInfo} ${styles.display}`}>
                    <div className={`${styles.probetitle} ${styles.display}`}><h1>{'修改員工資訊'}</h1></div>
                    <div className={`${styles.probecontent}`}>
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>員工編號 : </div>
                            <div className={` ${styles.imputcell} ${styles.display} ${styles.justfycenter}`}>{id}
                                {/* <input type='text' name='GUInumber' placeholder={GUInumber}  defaultValue={GUInumber}  /> */}
                            </div>
                        </div>
                        {!!errors.id && <p className={styles.error1}>{errors.id}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>公司地址: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='name' placeholder={'請輸入姓名'} value={name ? name : ''} onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                            </div>
                        </div>
                        {!!errors.name && <p className={styles.error1}>{errors.name}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>部門: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='department' required value={department ? department : ""} onChange={(e) => {
                                    setDepartment(e.target.value)
                                }}>
                                    <option value={""}>請選擇部門</option>
                                    <option value={0}>管理部</option>
                                    <option value={1}>業務部</option>
                                    <option value={2}>開發部</option>
                                    <option value={3}>技術服務部</option>
                                </select>
                            </div>
                        </div>
                        {!!errors.department && <p className={styles.error1}>{errors.department}</p>}

                        {/* <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>承辦人: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='contractPerson' placeholder={'請輸入承辦人姓名'} value={contractPerson ? contractPerson : ''} onChange={(e) => {
                                    setcontractPerson(e.target.value)
                                }} />
                            </div>
                        </div>
                        {!!errors.contractPerson && <p className={styles.error1}>{errors.contractPerson}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>承辦人電話: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='contractPerson_PhoneNumber' placeholder={'請輸入承辦人電話'} value={contractPerson_PhoneNumber ? contractPerson_PhoneNumber : ''} onChange={(e) => {
                                    setcontractPerson_PhoneNumber(e.target.value)
                                }} />
                            </div>
                        </div>
                        {!!errors.contractPerson_PhoneNumber && <p className={styles.error1}>{errors.contractPerson_PhoneNumber}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>承辦人Email: </div>
                            <div className={` ${styles.imputcell}`}>
                                <input type='text' name='contractPerson_Email' placeholder={'請輸入承辦人Email'}  value={contractPerson_Email ? contractPerson_Email : ''} onChange={(e) => {
                                    setcontractPerson_Email(e.target.value)
                                }} />
                            </div>
                        </div>
                        {!!errors.contractPerson_Email && <p className={styles.error1}>{errors.contractPerson_Email}</p>}
                        <div className={`${styles.probeInfoCell} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>負責業務: </div>
                            <div className={` ${styles.imputcell}`}>
                                <select name='SalesID' required value={SalesID ? SalesID : ''} onChange={(e) => {
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
                                <select name='FAEID' required value={FAEID ? FAEID : ''} onChange={(e) => {
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
                        {!!errors.FAEID && <p className={styles.error1}>{errors.FAEID}</p>} */}
                        <div className={`${styles.probeInfoCell} ${styles.note} ${styles.display}`}>
                            <div className={`${styles.itemcell}`}>備註: </div>
                            <div className={` ${styles.textareacell}`}>
                                <textarea name='note' value={note ? note : ''} onChange={(e) => {
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
                            employeeSubmit()
                        }}>送出</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Edit.getLayout = getLayout;
export default Edit