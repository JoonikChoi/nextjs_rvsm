import React from "react";
import Link from "next/link";
import style from "../../styles/patientList.module.css";
export default function PatientList({patients,loading}){


    return(
        <div>
            <div className={style.top_box}></div>
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