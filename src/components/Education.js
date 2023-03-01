import React, { useState } from "react";
import { Document } from "react-pdf";
import GA_CERT from "../images/GA_Cert.pdf"
import REACT_NATIVE_1 from "../images/React-Native-Stephen-Grider.pdf"
import REACT_NATIVE_2 from "../images/React-Native-Advacned-Concepts-Stepehn-Grider-Course.pdf"
import Golang from "../images/GO Course with Stephen Grider.pdf"
import RUST_1 from "../images/Rust Crash Course-with-Nathan-Stocks.pdf"
import RUST_2 from "../images/Ultimate Rust 2-intermediate concepts Nathan Stocks.pdf"

const Education = () => {

    const [certificates, SetCertificates] = useState([])

    const pdfCertificates = [ 
        <Document file = {GA_CERT}/>, 
        <Document file = {REACT_NATIVE_1} />,
        <Document file = {REACT_NATIVE_2} />,
        <Document file = {Golang} />,
        <Document file = {RUST_1} />,
        <Document file = {RUST_2} />,
            
        ]
    
    return (
        <div className="education">
            
        </div>
    )
}

export default Education