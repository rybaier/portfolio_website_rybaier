import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import GA_CERT from "../images/GA_Cert.pdf"
import REACT_NATIVE_1 from "../images/React-Native-Stephen-Grider.pdf"
import REACT_NATIVE_2 from "../images/React-Native-Advacned-Concepts-Stepehn-Grider-Course.pdf"
import GO from "../images/GO Course with Stephen Grider.pdf"
import RUST_1 from "../images/Rust Crash Course-with-Nathan-Stocks.pdf"
import RUST_2 from "../images/Ultimate Rust 2-intermediate concepts Nathan Stocks.pdf"
import { Button, CardImg , Card } from "reactstrap";

//go back and create one pdf document with all of the certificates this will eliminate the need for useEffect refresh
// use page numbers instead if you want to use react-pdf the other easier option is create a carousel with png screen shots 

const pdfCertificates = [   
        GA_CERT, REACT_NATIVE_1, REACT_NATIVE_2,
        GO, RUST_1, RUST_2,   
        ]

const Education = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

    const [ pageNumber, SetPageNumber ] = useState(1)
    const  [certIndex, SetCertIndex ] = useState(0)

const changeCert = () => {
    SetCertIndex(certIndex+ 1)
    if (certIndex >= pdfCertificates.length ) return SetCertIndex(0)
    console.log(certIndex)

}

   useEffect(()=> {

   },[])
    
    return (
        <div className="education">
        <Button color="#ffffff" size="lg" on onClick={changeCert} > Next Certificate</Button>   
            <Card style={{height:300, width:500 }}>
            <Document file={pdfCertificates[certIndex]}>
                <Page pageNumber={pageNumber}/>
                </Document> 
            </Card>
        </div>
    )
}

export default Education