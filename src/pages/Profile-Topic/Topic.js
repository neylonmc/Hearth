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
import Entertainment from "../../utils/TopEntertainment";
import API from "../../utils/API";
import TopicInfo from "../../components/TopicInfo/TopicInfo";
import Activity from "../../components/Activity/Activity";

function Topic() {

    let { topic } = useParams();

    const [commentsObject, setData] = useState([]);
    const [topicObject, setTopic] = useState({});

    useEffect(() => {
        loadActivities(topic);
    }, [topic])

    function loadActivities(topic) {
        API.getActivitybyTitle(topic)
            .then((res) => {
                console.log(res.data[0]);
                setTopic(res.data[0])
                API.getCommentsByActivity(res.data[0]._id)
                    .then((res) => {
                        console.log(res.data);
                        setData(res.data);
                    }).catch(err => err)
            }).catch(err => err)
    }



    return (
        commentsObject.map((data) => {
            console.log(data.title);

            return (
                <div className="page-container animate__animated animate__fadeIn">
                    <Row className="header-container">
                        <Col sm={3} >
                            <img
                                className="page-image"
                                src={data.img}
                                alt="icon of topic poster"
                            />
                        </Col>
                        <Col sm={21}>
                            <Row>
                                <h3 id="sub-header" className="page-title">{data.title}</h3>
                            </Row>
                            <Row>
                                <h4 className="topic-head">{topicObject.topic} | {topicObject.category.join(", ")}</h4>
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
                            header="about"
                            defaultExpanded
                        >
                            <TopicInfo
                                topic={data.topic}
                                ageRange={topicObject.ageRange.join(", ")}
                                ageRating={""}
                                genre={topicObject.category.join(", ")}
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

        })
    )
};

export default Topic;