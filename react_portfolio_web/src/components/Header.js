import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <div className="header"> 
            <div className="contact-info">
                <h5><AiOutlineMail />: rybaier@gmail.com</h5>
                <h5> <FiPhoneCall />: 303-570-6043</h5>
            </div>
            <div className="title">
                <h1>Ryan Baier</h1>
                <h2> Software Engineer</h2>
            </div>
            <div className="logos">
                <a className='logo' href = {'https://www.linkedin.com/in/ryan-baier'} target={ '_blank' } rel="noreferrer"> <AiFillLinkedin/></a>
                <a className='logo' href = {'https://github.com/rybaier'} target={ '_blank' } rel="noreferrer"> <AiFillGithub/></a>
            </div>
        </div>
    )
}

export default Header