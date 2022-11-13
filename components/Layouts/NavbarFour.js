import React, { Component, useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Link from '../../utils/ActiveLink';
export default function NavbarFour() {

    // Search Form
    const [searchForm, setSearchForm] = useState(false);
    const isSignIn = useRef(false);
    const [state, setState] = useState({ display: false, collapsed: true });
    const [_isMounted, setIsMounted] = useState(false);
    const [cookies, setCookie] = useCookies(['id']);

    const handleSearchForm = () => {
        setSearchForm((prev) => !prev);
    }

    const toggleNavbar = () => {
        setState((prev) => !this.prev.collapsed)
    }

    useEffect(() => {

        if (cookies.id === undefined || cookies.id === 'undefined') {
            console.log('cookie is undefined...');
            isSignIn.current = false;
        } else {
            console.log('cookie is Defined...');
            isSignIn.current = true;
        }


        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });

        return () => {
            setIsMounted(false);
        };

    }, []);


    const { collapsed } = state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-four">
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/rvsm_logo2.png" className="optional-logo" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">
                                                Home
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services" activeClassName="active">
                                            <a className="nav-link">Services</a>
                                        </Link>
                                    </li>

                                    {isSignIn.current === false
                                        ?
                                        <li className="nav-item">
                                            <Link href="/login" activeClassName="active">
                                                <a className="nav-link">Log In</a>
                                            </Link>
                                        </li>
                                        :
                                        <>
                                            <li className="nav-item">
                                                <Link href="/mypage" activeClassName="active">
                                                    <a className="nav-link">{cookies.nickname}님</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/logout" activeClassName="active">
                                                    <a className="nav-link">Log Out</a>
                                                </Link>
                                            </li>
                                        </>
                                    }

                                </ul>

                                <div className="others-options">

                                    <div className="option-item">
                                        <i
                                            onClick={handleSearchForm}
                                            className="search-btn flaticon-search"
                                            style={{
                                                display: state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i
                                            onClick={handleSearchForm}
                                            className={`close-btn fas fa-times ${state.searchForm ? 'active' : ''}`}
                                        ></i>

                                        <div
                                            className="search-overlay search-popup"
                                            style={{
                                                display: state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
