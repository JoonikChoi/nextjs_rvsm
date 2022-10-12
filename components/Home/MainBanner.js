import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="hero-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-banner-content">
                            <h1>RVSM</h1>
                            <p>Remote Vital Sign Monitoring <br /> 영남대학교 종합설계 프로젝트 RVSM에 오신 것을 환영합니다.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hero-banner-image">
                            <img 
                                src="/images/banner-image.png" 
                                className="animate__animated animate__zoomInUp animate__delay-0.1s" 
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img2">
                <img src="/images/shape/shape2.svg" alt="image" />
            </div>
            <div className="shape-img3">
                <img src="/images/shape/shape3.png" alt="image" />
            </div>
            <div className="shape-img5">
                <img src="/images/shape/shape5.svg" alt="image" />
            </div>
            <div className="dot-shape1">
                <img src="/images/shape/dot1.png" alt="image" />
            </div>
            <div className="dot-shape2">
                <img src="/images/shape/dot3.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner;