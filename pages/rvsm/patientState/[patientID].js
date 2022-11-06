import PatientState from "../../../components/RVSM/PatientState"
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import io from 'socket.io-client';
import NavbarFour from "../../../components/Layouts/NavbarFour";
import Footer from "../../../components/Layouts/Footer";


let address = "http://localhost:3333"

export default function PatientStatePage() {
    const router = useRouter();
    let patientID = useRef(null);
    const socket = useRef(null);
    let newData = useRef([]);//새로 받은 데이터
    let lastTime = useRef(null);//이 시간 이후의 데이터만 받는다
    const [dates, setDates] = useState(['0', '0', '0', '0', '0', '0', '0', '0', '0'])
    const [heartRates, setHeartRates] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [spo2s, setSpo2s] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [temperature, setTemperature] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [highestHeartRate, setHighestHeartRate] = useState(-1);
    const [lowestHeartRate, setLowestHeartRate] = useState(-1);
    const [highestSpo2, setHighestSpo2] = useState(-1);
    const [lowestSpo2, setLowestSpo2] = useState(-1);
    const [highestTemperature, setHighestTemperature] = useState(-1);
    const [lowestTemperature, setLowestTemperature] = useState(-1);
    const [patientName, setPatientName] = useState("");
    const [adminName, setAdminName] = useState("");
    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        patientID = router.query.patientID;
        socket.current = io(address, { transports: ["websocket"] });
        //lastTime.current=getCurrentTime();//실제 실행때는 이것을 사용함
        lastTime.current = "2022-09-17 00:30:00";//테스트를 위해서 특정 날짜
        if (socket.current != null) {
            socket.current.connect();
            socket.current.emit('request_user_info', patientID);
            requestData();
            socket.current.on('response_bio_data', (data) => {//서버가 보낸 바이오 데이터를 받음
                if (data.length != 0) {
                    newData.current = data;//서버가 보낸 데이터
                    X_shift();//데이터 받았으니 받은 데이터를 그래프에 업데이트  
                }
            });
            socket.current.on('response_user_info', (data) => {//서버로 부터 환자명, 관리자명 받고 화면에 표시
                setPatientName(data.patient_name);
                setAdminName(data.admin_name);
            })
            const interval = setInterval(requestData, 3000);//3초에 한번 생체 데이터 요청
            return (() => {
                clearInterval(interval)
                socket.current.disconnect();
            });
        }
    }, [router.isReady]);

    function requestData() {//서버에게 환자 생체 데이터 요청하는 함수
        let data = {
            patientID: patientID,//테이블 이름, 환자 id
            time: lastTime.current//이 시간 이후의 데이터만 가져온다
        }
        socket.current.emit('request_bio_data', data);//서버로 요청
    }

    function X_shift() {//데이터를 넣고 그래프를 업데이트하는 함수
        const newDataLen = Object.keys(newData.current).length
        lastTime.current = newData.current[newDataLen - 1].Time
        for (let i = 0; i < newDataLen; i++) {
            setDates((current) => {
                const copyArray = [...current]
                copyArray.push(newData.current[i].Time)
                console.log("time :" + newData.current[i].Time);
                copyArray.shift()
                return copyArray
            })
            setHeartRates((current) => {
                const copyArray = [...current]
                copyArray.push(newData.current[i].HeartRate)
                copyArray.shift()
                console.log("heartrate :" + newData.current[i].HeartRate);
                setHeartRateInfo(newData.current[i].HeartRate);//최대최소값 설정
                return copyArray
            })
            setSpo2s((current) => {
                const copyArray = [...current]
                copyArray.push(newData.current[i].Spo2)
                copyArray.shift()
                setSpo2Info(newData.current[i].Spo2);
                return copyArray
            })

            setTemperature((current) => {
                const copyArray = [...current]
                copyArray.push(newData.current[i].Temperature)//temp로 변경필요
                copyArray.shift()
                setTemperatureInfo(newData.current[i].Temperature);
                return copyArray
            })

        }

    }
    function setHeartRateInfo(data) {//최저 최대 심박수 표시
        setHighestHeartRate((current) => {
            if (current == -1) {
                return data
            }
            else {
                if (current < data) {
                    return data
                }
                else {
                    return current
                }
            }
        })
        setLowestHeartRate((current) => {
            if (current == -1) {
                return data
            }
            else {
                if (current > data) {
                    return data
                }
                else {
                    return current
                }
            }
        })
    }
    function setSpo2Info(data) {//최저 최대 산소포화도 표시 
        setHighestSpo2((current) => {
            if (current == -1) {
                return data
            }
            else {
                if (current < data) {
                    return data
                }
                else {
                    return current
                }
            }
        })
        setLowestSpo2((current) => {
            if (current == -1) {
                return data
            }
            else {
                if (current > data) {
                    return data
                }
                else {
                    return current
                }
            }
        })
    }
    function setTemperatureInfo(data) {//최저 최대 산소포화도 표시 
        setHighestTemperature((current) => {
            if (current == -1) {
                return data
            }
            else {
                if (current < data) {
                    return data
                }
                else {
                    return current
                }
            }
        })
        setLowestTemperature((current) => {
            if (current == -1) {
                return data
            }
            else {
                if (current > data) {
                    return data
                }
                else {
                    return current
                }
            }
        })
    }
    function getCurrentTime()//현재시간을 구하는 함수
    {
        var now = new Date();	// 현재 날짜 및 시간
        now.setSeconds(now.getSeconds() - 2);//현재에서 2초전으로 변경
        var year = now.getFullYear();
        var mon = now.getMonth() + 1;
        var day = now.getDate();
        var hh = now.getHours();
        var min = now.getMinutes();
        var ss = now.getSeconds();
        var time = year + "-" + mon + "-" + day + " " + hh + ":" + min + ":" + ss;//현재에서 5초전 날짜와 시간

        return time;
    }
    return (
        <>
            <NavbarFour />
            <PatientState
                patientName={patientName}
                adminName={adminName}
                highestHeartRate={highestHeartRate}
                lowestHeartRate={lowestHeartRate}
                highestSpo2={highestSpo2}
                lowestSpo2={lowestSpo2}
                highestTemperature={highestTemperature}
                lowestTemperature={lowestTemperature}
                dates={dates}
                heartRates={heartRates}
                spo2s={spo2s}
                temperature={temperature}
            />
            <Footer />
        </>
    )

}