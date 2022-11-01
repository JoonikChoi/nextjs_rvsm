import React from "react";
import style from "../../styles/pagination.module.css";

export default function Pagination({patientsPerPage,totalPatients,paginate}){
    const pageNumbers=[];
    const showingNumbs=0;
    for(let idx=1;idx<=Math.ceil(totalPatients/patientsPerPage);idx++){
        pageNumbers.push(idx);
    }
    return(
        <nav>
            <ul className={style.pagination}>
                {
                    pageNumbers.map((number)=>(
                        <li key={number} onClick={()=>paginate(number)}className={style.page_item}>
                            {number}
                        </li>
                    ))
                }
            </ul>
            
        </nav>
    )
}
