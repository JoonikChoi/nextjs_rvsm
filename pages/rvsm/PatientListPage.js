import { useEffect, useState } from "react";
import axios from 'axios';
import PatientList from "../../components/RVSM/PatientList";
import Pagination from "../../components/RVSM/Pagination";
import NavbarFour from "../../components/Layouts/NavbarFour";
import Footer from "../../components/Layouts/Footer";

export default function PatientListPage(){
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(10);

    useEffect(()=>{
        const fetchPosts=async()=>{
            setLoading(true);
            const res=await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
                );
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    },[]);

    //get current posts
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);

    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    return(
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