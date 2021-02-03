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
import TopicInfo from "../../components/TopicInfo/TopicInfo";
import Activity from "../../components/Activity/Activity";

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
                                <Row>
                                    <h3 id="sub-header" className="page-title">{data.title}</h3>
                                </Row>
                                <Row>
                                    <h4 className="topic-head">{data.topic} | { data.genre.join(", ") }</h4>
                                </Row>
                            </Col>
                        </Row>

                        <PanelGroup 
                            className= "panel-container"
                            accordion 
                        >
                            <Panel 
                                id="panel"
                                className="about-panel"
                                header="about"
                                defaultExpanded
                            >
                                <TopicInfo 
                                    topic={data.topic}
                                    ageRange= {data.age_range.join(", ")}
                                    ageRating= {data.age_rating}
                                    genre={data.genre.join(", ")}
                                    description={data.description}
                                />
                            </Panel>
                            <Panel 
                                id="panel"
                                className="activity-panel"
                                header="activity" 
                                defaultExpanded
                            >
                                <Activity />
                            </Panel>
                        </PanelGroup>

                    </div>
                )
            } 
        })
    )
};

export default Topic;