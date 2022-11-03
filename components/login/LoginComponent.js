import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';
//import styles from "/styles/logintest.module.css"
import styles from "/styles/login2.module.css"
import Link from '../../utils/ActiveLink';
import { loginPoint } from "../../toServer/API-AccessPoint";

export default function LoginComponent() {

    const router = useRouter();
    const [cookies, setCookie] = useCookies(['id']);
    const [message, setMessage] = useState("아이디와 비밀번호를 입력해주세요");
    const [messageColor, setMessageColor] = useState("black");
    const [uid, setEmail] = useState("");
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const [password, setPassword] = useState("");
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Press Enter');
            loginSubmit();
        }
    }

    useEffect(() => {
        if (cookies.id === 'undefined' || cookies.id === undefined) {
            console.log('lg component err');
        }

    }, []);

    async function loginSubmit() {
        console.log('loginSubmit func');
        const response = await fetch(loginPoint, {
            method: "POST",
            body: JSON.stringify({
                uid: uid,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        let status = data.status;
        if (status === 200) {
            console.log(status);
            setCookie('id', data.id, { maxAge: 2000 });
            setCookie('nickname', data.nickname, { maxAge: 2000 });
            router.push("/rvsm/PatientListPage");   //전체 환자 리스트
        } else if (status === 400) {
            console.log(status);
            setMessage("잘못된 비밀번호입니다.");
            setMessageColor("red");
        } else if (status === 404) {
            setMessage("존재하지 않는 아이디입니다.");
            setMessageColor("red");
            // } else if (status === 500) {
            //     setMessage("서버에 에러가 발생했습니다");
            //     setMessageColor("red");
        } else {
            setMessage("알 수 없는 오류가 발생했습니다");
            setMessageColor("red");
        }
    }

    return (

        <div className={styles.wrap} onKeyPress={onKeyPress}>
            <div className={styles.login}>
                <h1>Welcome to RVSM !</h1>
                <div className={styles.login_id}>
                    <h4>ID</h4>
                    <input value={uid} onChange={onChangeEmail} type="text" placeholder="ID" />
                </div>
                <div className={styles.login_id}>
                    <h4>Password</h4>
                    <input value={password} onChange={onChangePassword} type="password" placeholder="Password" />
                </div>

                <div className={styles.submit}>
                    <span style={{ color: messageColor }}>{message}</span>
                    <br></br>
                    <input type="submit" value="submit" onClick={loginSubmit} />
                </div>
                <div className={styles.login_etc}>
                    <Link href="/" activeClassName="active">
                        <a style={{ marginRight: 10 }}>Forgot Password?</a>
                    </Link>
                    {/* <Link href="/registration" activeClassName="active">
                        <a >Create New Account</a>
                    </Link> */}
                </div>
            </div>
        </div>
    );
} 
