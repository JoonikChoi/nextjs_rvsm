import React, { Component } from 'react';
import NavbarFour from '../components/Layouts/NavbarFour';
import MainBanner from '../components/Home/MainBanner';
import Footer from '../components/Layouts/Footer';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';

class Index extends Component {
    render() {
        return (
            <>
                <NavbarFour />
                <MainBanner />
                <ServiceDetailsContent />
                <Footer />
            </>
        );
    }
}

export default Index;