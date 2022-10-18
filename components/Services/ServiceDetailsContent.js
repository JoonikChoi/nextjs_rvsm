import Link from 'next/link';
import React, { Component } from 'react';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <div className="services-details-area ptb-110">
                <div className="container">
                    <div className="services-details-overview">
                        <div className="services-details-desc mb-30">
                            <h3>환자 정보 보기</h3>
                            <p>
                                모든 환자의 생체정보를 한 눈에 확인하고 모니터링 하세요!
                            </p>

                            <div className="option">
                                <div className="btn-box">
                                    <div>
                                        <Link href="/rvsm/PatientListPage">
                                            <a className="btn btn-primary">Start RVSM</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-details-image">
                            <img src="/images/services-details/service-details1.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceDetailsContent;