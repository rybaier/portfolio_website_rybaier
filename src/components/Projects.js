import React from "react";
import { CardImg, Card } from "reactstrap";
import PYB from '../images/PYB.png'
import LOTRTT from '../images/LOTRTT.png'
import PREVAC from '../images/PrEvac.png'


const Projects = () => {

    
    return (
        <div>
            <h1 className="title">Projects</h1>
            <div className="project-row">
                <div className="project-card">
                    <img id="PYB" src={PYB} alt= "Logo"/>
                    <a className='h7' href = {'https://rybaier.github.io/Place-Your-Bets/'} target={ '_blank' } rel="noreferrer"> Place Your Bets</a>
                    <a className='h7' href="https://github.com/rybaier/Place-Your-Bets" target={'_blank'} rel="noreferrer"> PYB Repo</a>
                </div>
                <div className="project-card">
                    <img  id="LOTRTT" src={LOTRTT} alt= "Logo"/>
                    <a className='h7' href = {'https://lotr-toilet-time.netlify.app/'} target={ '_blank' } rel="noreferrer"> Lord of the Rings Toilet Time</a>
                    <a className='h7' href={"https://github.com/rybaier/LOTR-TT-React-API"} target={'_blank'} rel="noreferrer"> LOTR Repo</a>
                </div>
                <div className="project-card">
                    <img id="PREVAC" src={PREVAC} alt= "Logo"/>
                    <a className='h7' href = {'https://github.com/rybaier/PrEvac'} target={ '_blank' } rel="noreferrer"> PrEvac Repo </a>
                </div>

            </div>
            <h5 className="about">Side note: this was put together to get a url. Currently building a more game oriented website to be deployed soon</h5>

        </div>
    )
}

export default Projects