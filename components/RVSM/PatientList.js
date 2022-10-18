import React from "react";
import Link from "next/link";
import style from "../../styles/patientList.module.css";
export default function PatientList({posts,loading}){
    return(
        <div>
            <div className={style.top_box}></div>
            {
                loading?
                <div>loading...</div>
                :
                
                <ul className={style.list_box}>
                    {
                        posts.map((post)=>(
                            <li key={post.id} className={style.list_item} >
                                <span>{post.title}</span>
                                <Link href={'/rvsm/iot'}>
                                    <div className={style.link_state}>상태 확인</div>
                                </Link> 
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )

}