import { useEffect, useState } from "react";
import { patientListPoint } from "../../toServer/API-AccessPoint";
import axios from 'axios';
import PatientList from "../../components/RVSM/PatientList";
import Pagination from "../../components/RVSM/Pagination";
import NavbarFour from "../../components/Layouts/NavbarFour";
import Footer from "../../components/Layouts/Footer";

export default function PatientListPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            //const res=await axios.post(patientListPoint);//로컬테스트, ec2서버 업데이트 이후 이 부분 사용해주세요
            //setPosts(res.data);//로컬테스트, ec2서버 업데이트 이후 이 부분 사용해주세요
            setPosts([//지금은 서버쪽 업데이트 되지 않아 이 임시데이터를 사용합니다, 로컬테스트 혹은 ec2서버 업데이트 후 20~23라인 사용하지 않습니다
                { HospitalCode: 'YUMC', ID: 'test1', NAME: '김이박' },
                { HospitalCode: 'YUMC', ID: 'test2', NAME: '박김최' }
            ])
            setLoading(false);
        }

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <NavbarFour />
            <PatientList
                posts={currentPosts}
                loading={loading}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
            <Footer />
        </>
    );
}