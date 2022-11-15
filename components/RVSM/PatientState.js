import { useRef,useEffect, useState } from "react"
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from "react-chartjs-2"
import style from "../../styles/PatientState.module.css"
export default function PatientState({patientName,adminName,highestHeartRate,lowestHeartRate,highestSpo2,lowestSpo2,highestTemperature,lowestTemperature,dates,heartRates,spo2s,temperature}){
    const notice="측정 수치는 여러 요소에 따라 달라질 수 있습니다. 자세한 내용은 xx를 참조하세요."
    
 
   let data={
    
        labels: dates,
        datasets:[
            {
                type:'line',
                label:'HeartRate',
                backgroundColor: 'rgba(255, 99, 132, 1)',//선색
                borderColor: 'rgba(255, 99, 132, 1)',//선 테두리색
                borderWidth: 1,
                data: heartRates
            },
            // {
            //     type:'line',
            //     label: 'Spo2',
            //     backgroundColor: 'rgba(87, 98, 255, 1)',//선색
            //     borderColor: 'rgba(87, 98, 255, 1)',//선 테두리색
            //     borderWidth: 1,
            //     data: spo2s
            // },
            {
                type:'line',
                label: 'Temperature',
                backgroundColor: 'rgba(247, 198, 154, 1)',//선색
                borderColor: 'rgba(247, 198, 154, 1)',//선 테두리색
                borderWidth: 1,
                data: temperature
            }
        ]
    
   }
    
    let options={
        maintainAspectRatio:false,
        
        plugins:{
            legend:{
                position:'bottom',
                    labels:{
                        boxHeight:1
                    }
            }
        },
        animation:{
            duration:0
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
        
    }
    return (
        <div>
            <div className={style.top_box}></div>
            <div className={style.red_line}></div>

            <div id={style.info_box}>
                <div id={style.user_info_box} className={style.text}>

                    <span>이름</span>
                    <span className={style.name_box}>{patientName}</span>
                    <hr className={style.hr_solid}></hr>

                    <span className={style.bio_title}>체온</span>
                    <div className={style.bio_val_box}>
                        <div>최저</div>
                        <div>{lowestTemperature}</div>
                    </div>
                    <div className={style.bio_val_box}>
                        <div>최고</div>
                        <div>{highestTemperature}</div>
                    </div>
                    <hr className={style.hr_dotted}></hr>

                    <span className={style.bio_title}>심박</span>
                    <div className={style.bio_val_box}>
                        <div>최저</div>
                        <div>{lowestHeartRate}</div>
                    </div>
                    <div className={style.bio_val_box}>
                        <div>최고</div>
                        <div>{highestHeartRate}</div>
                    </div>
                    <hr className={style.hr_dotted}></hr>

                    {/* <span className={style.bio_title}>산소포화도</span>
                    <div className={style.bio_val_box}>
                        <div>최저</div>
                        <div>{lowestSpo2}</div>
                    </div>
                    <div className={style.bio_val_box}>
                        <div>최고</div>
                        <div>{highestSpo2}</div>
                    </div>
                    <hr className={style.hr_dotted}></hr> */}

                    <span>관리자</span>
                    <span className={style.name_box}>{adminName}</span>
                    <hr className={style.hr_dotted}></hr>
                </div>
                <div id={style.notice_box}>
                    <div id={style.notice}>
                        {notice}
                    </div>
                </div>
            </div>

            <div>차트</div>
                <div className={style.green_line}></div>
                <div id={style.chart_box}>
                    <Line 
                        type="line" 
                        data={data} 
                        options={options}
                        />
                </div>
            <div className={style.green_line}></div>
            
        </div>
    )
}
