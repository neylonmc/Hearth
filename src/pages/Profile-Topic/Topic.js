import React, { useState, useEffect } from "react";
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
import API from "../../utils/API";
import TopicInfo from "../../components/TopicInfo/TopicInfo";
import TopicActivity from "../../components/Activity/TopicActivity";
import FollowButton from "../../components/FollowButton/FollowButton";

function Topic() {

    let { topic } = useParams();

    const [commentsObject, setData] = useState([]);
    const [topicObject, setTopic] = useState({
        category: []

    });

    useEffect(() => {
        console.log(topic)
        loadActivities(topic);
    },[]);

    function loadActivities(topic) {
        API.getActivitybyTitle(topic)
            .then((res) => {
                setTopic(res.data[0])
                console.log(topicObject);
                API.getCommentsByActivity(res.data[0]._id)
                    .then((res) => {
                        setData(res.data);
                    }).catch(err => err)
            }).catch(err => err)
    }

    console.log(topicObject);
    return (
        <div className="page-container animate__animated animate__fadeIn">
            <Row className="header-container">
                <Col md={24} >
                    <img
                        className="page-image"
                        src={topicObject.Image || "./images/no-image.png"}
                        alt="icon of topic poster"
                    />
                </Col>
            </Row>
            <Row className="follow-container">
                <Col md={24}>
                    <FollowButton user={topicObject}/>
                </Col>
            </Row>
            <Row>
                <Col md={24}>
                    <Row>
                        <h3 id="sub-header" className="page-title">{topicObject.title}</h3>
                    </Row>
                    <Row>
                        <h4 className="topic-head">{topicObject.type} | { topicObject.category.join(", ") }</h4>
                    </Row>
                </Col>
            </Row>

            <PanelGroup
                className="panel-container"
                accordion
            >
                <Panel
                    id="panel"
                    className="about-panel"
                    defaultExpanded
                >
                    <TopicInfo
                        topic={topicObject.type}
                        ageRange={topicObject.ageRange}
                        genre={topicObject.category.join(", ")}
                        description={topicObject.description}
                    />
                </Panel>
                <Panel
                    id="panel"
                    className="activity-panel"
                    header="activity"
                    defaultExpanded
                >
                    <TopicActivity />
                </Panel>
            </PanelGroup>
        </div>
    )
};

export default Topic;