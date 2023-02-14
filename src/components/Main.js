import React from "react";
import Projects from "./Projects";
import Header from './Header';

import { Wave, Random } from "react-animated-text";
import About from "./About";
import Ryan from '../images/Ryan About page photo copy Small.png'

const Main = () => {

    const Skills1 = <Wave text="HTML, CSS, JavaScript, React, React-Native"  direction="left"/>
    const Skillset = ["HTML", "CSS", "JavaScript", "React", "React-Native", "Python", "MongoDB", "PostgreSQL", "GO", "Rust"]
    const Skills2 = <Wave text= "Python, MongoDB, MERN, Postgres, GO, Rust" direction="right"/>

    return (
        <div>
        <Header />            
        <div className="main-card">
                <h1>Hello</h1>
               
            <div className="aboutface">
                <img id="ryan" src={Ryan} alt="Software Wizard" />
                <About />

            </div>
            <div className="skill-body">
                     <div className="animated-text1">
                        {Skills1}
                    </div>
                    <h3>Skills</h3>
                    <div className="animated-text2">
                        {Skills2}
                    </div>
               </div>
           
                
                
                <Projects />
        </div>
        </div>
    )
}

export default Main