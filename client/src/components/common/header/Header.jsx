import React from 'react';
import { Navbar } from '..'; 
import './Header.css';
import { Link } from "react-router-dom"
import Logo from "./Logo.png"

function Header () {

    return(
        <section className= "header" >
            <section className="header-top">
                 <section className="header-top__logo">
                 <img src= { Logo } alt="FullyFundedLogo" height="300" width="300" />                     
                
                 {/* <a href= "/" className="header-logo">LOGO</a> */}
                </section>
                <section className="header-top__navbar">
                        <section className="header-top__navigation">
                        {/* navbar here */}
                        <Navbar />
                        </section>
                    <hr className="header-top__seperator" />
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__login">
                         {/* BOTTOM SECTION - login logout*/}
                </section>
            </section>
        </section>

    )}

export default Header;