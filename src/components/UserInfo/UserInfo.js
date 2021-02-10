import React from "react";
import {
    Row,
    Col
} from "rsuite";
import "./UserInfo.css"
import Streaming from "../../components/Streaming/Streaming";

function UserInfo(props) {

    var user = props.user;

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
                        > Interests : </strong>
                        { user.Interests || "none saved" }
                    </p>
                </Col>
                <Col id="right-info" md={12}>
                    <p>
                        <strong 
                            id="bold"
                        > Following : </strong>

                        { user.Following.length } 
                    </p>
                    <p>
                        <strong 
                            id="bold"
                        > Followers : </strong>

                        { user.Following.length || 0 } 
                    </p>
                </Col>
            </Row>
        </div>
    )

}

export default UserInfo;