import React, { Component } from "react";
import Footer from "../components/Layouts/Footer";
import LoginComponent from "../components/Login/LoginComponent";
import PageBanner from '../components/Common/PageBanner';
import NavbarFour from "../components/Layouts/NavbarFour";

export default function Login({}) {

    return (
      <>
        <NavbarFour />

        <PageBanner 
                    pageTitle="Sign-In" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Sign-In" 
                    bgImgClass="item-bg1" 
        />  
        <LoginComponent />
  
        <Footer />
      </>
    );
}
