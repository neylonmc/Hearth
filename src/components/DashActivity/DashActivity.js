import React from "react";
import "./DashActivity.css";
import {
    Row,
    Col,
    Button
} from 'rsuite';
import Entertainment from "../../utils/TopEntertainment";

function DashActivity() {


    // recent activity from topics user follows
    return(
        <div>
            { Entertainment.map(data => {
                return(
                    <Col md={6} sm={12} id="button-column">
                        <Button id="dash-container" bordered>
                            <a href={ data.local_ext }>
                            <img 
                                id="dash-image" 
                                src={ data.img }
                                alt={ data.title }
                            />
                            </a>
                        </Button>
                    </Col>
                )
            }) }
        </div>
    )
}

export default DashActivity;