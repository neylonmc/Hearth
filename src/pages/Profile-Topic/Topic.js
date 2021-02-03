import React from 'react';
import {
    useParams
  } from "react-router-dom";
import { 
    Row,
    Col,
    PanelGroup,
    Panel
} from "rsuite";
import "./Profile-Topic.css";
import Entertainment from "../../utils/TopEntertainment";
import API from "../../utils/API";
// import TopicInfo from "../components/TopicInfo";
// import TopicActivity from "../components/TopicActivity";

function Topic() {
    
    let { topic } = useParams();

    API.getActivities()
        .then((res) => {
            console.log(res)
        }).catch(err => err)

    return(
        Entertainment.map((data) => {
            if (data.ext === topic ) {
                console.log(data.title);

                return(
                    <div className="page-container animate__animated animate__fadeIn">
                        <Row className="header-container">
                            <Col sm= {3} >
                                <img 
                                    className = "page-image"
                                    src= { data.img } 
                                    alt= "icon of topic poster"
                                />
                            </Col>
                            <Col sm= {21}>
                                <h3 className="page-title">{data.title}</h3>
                            </Col>
                        </Row>

                        <PanelGroup 
                            className= "panel-container"
                            accordion 
                        >
                            <Panel 
                                id="panel"
                                className="info-panel"
                                header="info" 
                                defaultExpanded
                            >
                                <p>hi</p>
                            </Panel>
                            <Panel 
                                id="panel"
                                className="activity-panel"
                                header="activity" 
                                defaultExpanded
                            >
                                <p>hi</p>
                            </Panel>
                        </PanelGroup>

                    </div>
                )
            } 
        })
    )
};

export default Topic;