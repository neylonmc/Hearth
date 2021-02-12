import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Activity.css"
import API from "../../utils/API";
import {
    Row,
    Col
} from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


function TopicActivity() {

    let { topic } = useParams();

    const [topicState, setState] = useState([]);

    const placeholder = [

    ]

    useEffect(() => {
        API.getCommentsByActivity(topic).then(res => {
            for (let i = 0; i < res.data.length; i++) {
                topicState.push(res.data[i]);
                console.log(topicState);
            }
        });
    }, []);

    return (
        <Row className="activity-container">
            { topicState.map(data => {
                return (
                    <Col
                        id="activity-card"
                        md={24}
                        block
                    >
                        <Row>
                            <Col md={20}>
                                <h2 id="card-title">{data.title}</h2>
                            </Col>
                            <Col md={4}>
                                <h3 id="card-rating">Score: {data.rating} <FontAwesomeIcon icon={faStar} /></h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={24}>
                                <p id="card-review">{data.review}</p>
                            </Col>
                        </Row>

                    </Col>
                )

            })}

        </Row>
    )

}

export default TopicActivity;