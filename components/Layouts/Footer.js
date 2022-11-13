import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/images/rvsm_logo_w.png" alt="image" width="50" height="50" />
                                    </a>
                                    <p>Project RVSM에 와주셔서 감사합니다!<br />Github에 프로젝트 소스코드가 있습니다. :)</p>
                                </div>

                                <ul className="social">
                                    <li>
                                        <a href="https://youtu.be/ArZEYlgkNPo" target="_blank">
                                            <i className="flaticon-youtube-play-button"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Services</h3>

                                <ul className="footer-services-list">
                                    <li>
                                        <Link href="/services">
                                            <a>생체 정보 실시간 모니터링</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Cooming soon!</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links-list">
                                    <li>
                                            <a href='https://cse.yu.ac.kr/cse/index.do'>YU Computer Science portal</a>
                                    </li>
                                    <li>
                                            <a href='https://github.com/JoonikChoi/nextjs-portal301'>Our GitHub address</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Developers Name</h3>

                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Thank you for your effort!<br /></span>
                                        &nbsp; 최준익&nbsp; 김선주<br />
                                        &nbsp; 김도연&nbsp; 박성혁<br />

                                    </li>
                                    <li>
                                        <span>Phone:</span>
                                        +082 010 4222 2774
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">

                </div>

                <div className="circle-map">
                    <img src="/images/circle-map.png" alt="image" />
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;