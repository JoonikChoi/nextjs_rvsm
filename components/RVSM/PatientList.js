import React from "react";
import Link from "next/link";
import style from "../../styles/patientList.module.css";
export default function PatientList({patients,loading}){


    return(
        <div>
            <div className={style.top_box}></div>
            
            <Link href={'/rvsm/registration'}>
                <button className={style.registration_btn}>환자 등록하기</button>
            </Link>

            {
                loading?
                <div>loading...</div>
                :
                <>
                <ul className={style.list_box}>
                    {
                        patients.map((patient)=>(
                            <li key={patient.ID} className={style.list_item} >
                                <span>{patient.NAME}</span>
                                <Link 
                                    href={`/rvsm/patientState/${patient.ID}`}
                                   
                                >
                                    <div className={style.link_state}>상태 확인</div>
                                </Link> 
                            </li>
                        ))
                    }
                </ul>
                </>
            }
        </div>
    )

}