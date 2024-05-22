import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaClock, FaFile } from 'react-icons/fa';

import {
    BrowserRouter as
        Router, Routes,
    Route,
    Link,
} from "react-router-dom";

import "./Footer.css"

function Footer() {

    return (
        <>

            <footer>

                <div class="footer ">
                    <div class="footer-first">

                        <h3>

                            <b>Online Blood Donation</b>

                        </h3>

                        <div class="footer-rights">
                            Copyright &#169; onlineblooddonation.com | All rights reserved
                        </div>

                    </div>

                    <div class="footer-third">

                        <ul>

                            <li> <Link to="/" className="hometwo"> <FontAwesomeIcon icon={faHome} />  Home </Link> </li> <br></br>

                            <li > <Link to="/Termsandcondi" className="tc">  <FaFile /> Terms & Conditions </Link> </li> <br></br>

                            <li > <Link to="" className="time">  <FaClock /> Timings :- 24/7 </Link> </li> <br></br>
                        </ul>

                    </div>

                    <div class="footer-fourth">

                        <ul>

                            <li > <Link to="mailto:ankanpaul7897@gmail.com?subject = Feedback&body = Message" className="email"> <FontAwesomeIcon icon={faEnvelope} /> Email </Link> </li> <br></br>

                            <li > <Link to="/Contact" className="Contacttwo">  <FontAwesomeIcon icon={faPhone} /> Contact </Link>  </li> <br></br>

                        </ul>

                    </div>

                </div>

            </footer>

        </>
    )
}

export default Footer