import React from "react";
import {
    Row,
    Col
} from "rsuite";
import "./About.css";

function About() {

    return( 

        <Row className="about-container">
            <Col md={8}/>
            <Col md={8}>
                
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
                    href="/signup"
                >join the community</a>
            </Col>
            <Col md={8}/>
        </Row>
    )
};

export default About;