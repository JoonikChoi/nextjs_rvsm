import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import NavbarFour from '../components/Layouts/NavbarFour';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';

class Services extends Component {
    render() {
        return (
            <>
                <NavbarFour />

                <PageBanner 
                    pageTitle="RVSM" 
                    homePageUrl="/" 
                    homePageText="Services" 
                    activePageText="Remote Vital Sign Monitoring" 
                    bgImgClass="item-bg1" 
                />  
        
                <ServiceDetailsContent/>
                
                <Footer />
            </>
        );
    }
}

export default Services;