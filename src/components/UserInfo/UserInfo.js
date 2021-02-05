import React from "react";
import {
    Row,
    Col
} from "rsuite";
import "./UserInfo.css"
import Streaming from "../../components/Streaming/Streaming";

function UserInfo() {

    return (
        <div className="info-container">
            <Row>
                <Streaming />
            </Row>
            <Row>
                <Col md={12}>
                    <p>
                        <strong 
                            id="bold"
                        > Joined : </strong>

                        { "Jan-2021" } 
                    </p>
                    <p>
                        <strong 
                            id="bold"
                        > Top Genres : </strong>
                        
                        { "Rock, Pop" }
                    </p>
                </Col>
                <Col id="right-info" md={12}>
                    <p>
                        <strong 
                            id="bold"
                        > Following : </strong>

                        { 0 } 
                    </p>
                    <p>
                        <strong 
                            id="bold"
                        > Follower : </strong>

                        { 0 } 
                    </p>
                </Col>
            </Row>
        </div>
    )

}

export default UserInfo;