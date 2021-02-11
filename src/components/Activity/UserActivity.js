import React, { useEffect, useState } from "react";
import "./Activity.css"
import { 
    Row, 
    Col,
    Panel
} from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function UserActivity(props) {

    const [revState, setRev ] = useState([])

    const placeholder = [
        {
            topic: "Dune",
            type: "Book",
            title: "One of my Favorites",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: 5,
            related_titles: ["The Mandalorian", "Star Wars"]
        },
        {
            topic: "Soul",
            type: "Film",
            title: "Not my thing",
            review: "",
            rating: 3,
            related_titles: ["Inside Out", "Onward"]
        },
        {
            topic: "Ender's Game",
            type: "Book",
            title: "I had some issues with...",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: 2,
            related_titles: ["The Mandalorian", "Star Wars", "Dune", "Star Trek", "The Clone Wars", "Rebels" ]
        }
    ]

    useEffect(() => {
        var ratings = props.user.Ratings;
        setRev(ratings);
    }, [props.user.Ratings])


    return (
        <div>
             <Row className="activity-container">
        { placeholder.map(data => {
            return (
                <Col 
                    id="activity-card"
                    md={24}
                    block
                >
                    <Row>
                        <Col md={24}>
                            <h1 id="card-header">{data.topic}</h1>
                        </Col>
                    </Row>
                    <Row id="card-head-container">
                        <Col md={20}>
                            <h2 id="card-title">{data.title} | {data.rating}<FontAwesomeIcon icon={faStar}/> {data.type}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <p id="card-review">{data.review}</p>
                        </Col>
                    </Row>

                    <div id="sub-container">
                        <h4 id="sub-title">recommended titles :</h4>
                        <Row>
                            {data.related_titles.map(title => {
                                return (
                                    <Col md={8}>
                                        <p id="card-subtitle">{title}</p>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Col>
            )

        }) }

        </Row>
            
        </div>
    )

}

export default UserActivity;