import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import './Home.scss'
import Cars from "./Cars";
import Account from "./Account"

function Home () {
    return (
        <Container>
            <Container id="about">
                <p>Rent a Wreck . . </p>
                
            </Container>
            <div className="wrapper">
                <Cardz img={cars} title={<Link to="/cars">Cars</Link>} description='See our selections!' />
                <Cardz img={owners} title={<Link to="/owners">Owners</Link>} description='Rent your car!'/>
                <Cardz img={account} title={<Link to="/account">Account</Link>} description='Already a member?'/>
            </div>
        </Container>
    );
}

function Cardz( props ) {
    return(
        <div className="scss-card">
            <div className="card_body">
                <img style={{height: '250px', width: '260px'}} src={props.img} alt="alt"/>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
            </div>
        </div>
    )
}

export default Home