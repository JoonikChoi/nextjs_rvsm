import { useEffect, useState } from "react";
import { patientListPoint } from "../../toServer/API-AccessPoint";
import axios from 'axios';
import PatientList from "../../components/RVSM/PatientList";
import Pagination from "../../components/RVSM/Pagination";
import NavbarFour from "../../components/Layouts/NavbarFour";
import Footer from "../../components/Layouts/Footer";

export default function PatientListPage() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [patientsPerPage, setPatientsPerPage] = useState(10);

    useEffect(() => {
        const fetchPatients = async () => {
            setLoading(true);
            //const res=await axios.post(patientListPoint);//로컬에서 테스트할때 혹은 ec2서버 업데이트 이후 이 부분 사용해주세요
            //setPatients(res.data);//로컬에서 테스트할때 혹은 ec2서버 업데이트 이후 이 부분 사용해주세요
            setPatients([//지금은 서버쪽 업데이트 되지 않아 이 임시데이터를 사용합니다, 로컬테스트 혹은 ec2서버 업데이트 후 20~23라인 사용하지 않습니다
                { HospitalCode: 'YUMC', ID: 'test1', NAME: '김이박' },
                { HospitalCode: 'YUMC', ID: 'test2', NAME: '박김최' }
            ])
            setLoading(false);
        }

        fetchPatients();
    }, []);

    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <NavbarFour />
            <PatientList
                patients={currentPatients}
                loading={loading}
            />
            <Pagination
                patientsPerPage={patientsPerPage}
                totalPatients={patients.length}
                paginate={paginate}
            />
            <Footer />
        </>
    );
}