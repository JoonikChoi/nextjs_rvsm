import { useEffect, useState } from "react";
import NavbarFour from "../../components/Layouts/NavbarFour";
import Footer from "../../components/Layouts/Footer";
import style from "../../styles/registration.module.css"
import { patientRegistrationPoint } from "../../toServer/API-AccessPoint";

export default function registration() {

    const [hospitalCode, setHospitalCode] = useState("");
    const [message, setMessage] = useState("병원코드, 환자 id, 환자 이름을 입력해주세요.");
    const [messageColor, setMessageColor] = useState("black");
    const [id, setId] = useState("");
    const [patientName, setPatientName] = useState("");


    const hospitalCodeChange = (e) => {
        setHospitalCode(e.target.value);
    }
    const idChange = (e) => {
        setId(e.target.value);
    }
    const patientNameChange = (e) => {
        setPatientName(e.target.value);
    }
    const sendPost = async () => {
        const response = await fetch(patientRegistrationPoint, {
            method: "POST",
            body: JSON.stringify({
                hospitalCode: hospitalCode.toUpperCase(),
                id: id,
                patientName: patientName
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        let status = data.status;
        if (status == 200) {
            alert(data.name + "님의 등록이 완료되었습니다.");
        }
        else if (status == 400) {
            setMessage("등록 실패. 입력 정보를 확인하세요.");
            setMessageColor("red");
        }
    }

    return (
        <div className={style.wrap}>
            <NavbarFour />
            <div className={style.registration_box}>
                <input className={style.input_box} type="text" value={hospitalCode} onChange={hospitalCodeChange} placeholder="병원코드 입력"></input>
                <input className={style.input_box} type="text" value={id} onChange={idChange} placeholder="환자 ID 입력"></input>
                <input className={style.input_box} type="text" value={patientName} onChange={patientNameChange} placeholder="환자 이름 입력"></input>
                <span style={{ color: messageColor }}>{message}</span>
                <br></br>
                <button className={style.registration_btn} onClick={sendPost}>환자 등록</button>
            </div>
            <Footer />
        </div>
    );
}