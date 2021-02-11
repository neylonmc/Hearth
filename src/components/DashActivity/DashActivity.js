import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
  import {
    ButtonGroup,
    Row,
    Col,
    Button
  } from "rsuite";
import "./DashActivity.css";
import API from "../../utils/API";
import Entertainment from "../../utils/TopEntertainment";

function DashActivity() {
    let { topic } = useParams();

    const [formObject, setFormObject] = useState([]);

    function loadActivities(topic) {
        API.getActivities(topic)
        .then(res => {
            setFormObject(res.data);
        })
        .catch(err => console.log(err));

    }

    useEffect(() => {
        loadActivities(topic);
    }, [topic])

    // recent activity from topics user follows
    return(
        <div className="animate__animated animate__fadeIn" >
        <ButtonGroup className="dash-container">
          {Entertainment.map(data => {
            return (
                <Button
                  id="dash-button"
                  href={ data.local_ext }
                  bordered
                >
                  <img
                    id="dash-image"
                    src={data.img || "/images/no-image.png"}
                    alt={data.title}
                  />
                  <p id="topic-title">{data.title}</p>
                </Button>
            );

          })}
        </ButtonGroup>
        </div>
    )
}

export default DashActivity;