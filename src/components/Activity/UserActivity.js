import React, { useEffect, useState } from "react";
import "./Activity.css"
import { 
    Row, 
    Col,
    Panel
} from "rsuite";


function UserActivity(props) {

    const [revState, setRev ] = useState([])

    useEffect(() => {
        var ratings = props.user.Ratings;
        setRev(ratings);
    }, [props.user.Ratings])


    return (
        <div>
            <p>hello world</p>
            {/* <Row>
                {revState.map(data => {
                    return(
                        <Col md={6} sm={12}>
                            <Panel>
                                <h2>{data.title || "title" }</h2>
                                <p>{data.review || "body" }</p>
                            </Panel>
                        </Col>
                    )
                })}
            </Row> */}
        </div>
    )

}

export default UserActivity;