import React from "react";
import {
    Row,
    Col
} from "rsuite";
import "./About.css";

function About() {

    return( 

        <div className="about-container">
            <Col md={8}/>
            <Col md={8}>
                {/* OUR MISSION */}
                <h1 className="about-header">our mission</h1>
                <p className="about-body">
                    It's a new era and you're running out 
                    of shows to binge, movies to crush, or maybe
                    you're not sure what to read next.  No matter 
                    your interests, there's always something new 
                    waiting around the corner for you to discover. 
                    <br/><br/>
                    <strong>But let's skip the lengthy topic 
                    forums and volatile post threads.</strong>
                    <br/><br/>
                    Hearth was created with community in 
                    mind during a time in which interacting
                    with your community looks and feels a 
                    lot different. 
                    <br/><br/>
                    Making a connection doesn't have to be a 
                    large act, but can be as simple as sharing 
                    a show you've been loving, reading a 
                    review of your favorite authors's latest
                    book, or an introduction to a new album. 
                    <br/><br/>
                    <strong>Sometimes, you just need someone
                    to point you in the right direction.</strong>
                    <br/><br/>
                </p>

                <a 
                    className="about-link"
                    href="/"
                >join the community</a>
            
            <br/><br/><br/><hr/><br/>
            {/* OUR TEAM */}
            <div  className="team-container">
                <h1 className="about-header">our team</h1>
                <Row id="headshot-row">
                    <Col md={12}>
                        <a href="https://github.com/eaclumpkens" target="_blank" rel='noreferrer'>
                        <img
                            id="team-headshot"
                            href="https://github.com/eaclumpkens"
                            target="_blank"
                            src="../images/headshots/elisabeth-headshot.jpg"
                            alt="elisabeth clumpkens - frontend developer"
                        /></a>
                        <h3 id="headshot-name">Elisabeth Clumpkens</h3>
                        <h3 id="headshot-roll">Frontend Developer</h3>
                    </Col>
                    <Col md={12}>
                    <a href="https://github.com/drfrank22" target="_blank" rel='noreferrer'>
                        <img
                            id="team-headshot"
                            src="../images/headshots/dylan-headshot.jpg"
                            alt="dylan frank - backend developer"
                        /></a>
                        <h3 id="headshot-name">Dylan Frank</h3>
                        <h3 id="headshot-roll">Backend Developer</h3>
                    </Col>
                </Row>
                <Row id="headshot-row">
                    <Col md={12}>
                    <a href="https://github.com/jaguar6105" target="_blank" rel='noreferrer'>
                        <img
                            id="team-headshot"
                            src="../images/headshots/joseph-headshot.png"
                            alt="joseph gill - backend developer"
                        /></a>
                        <h3 id="headshot-name">Joseph Gill</h3>
                        <h3 id="headshot-roll">Backend Developer</h3>
                    </Col>
                    <Col md={12}>
                    <a href="https://github.com/neylonmc" target="_blank" rel='noreferrer'>
                        <img
                            id="team-headshot"
                            src="../images/headshots/meaghan-headshot.jpg"
                            alt="meaghan neylon - frontend developer"
                        /></a>
                        <h3 id="headshot-name">Meaghan Neylon</h3>
                        <h3 id="headshot-roll">Frontend Developer</h3>
                    </Col>
                    
                </Row>
            </div>
            </Col>
            <Col md={8}/>
            
        </div>
    )
};

export default About;