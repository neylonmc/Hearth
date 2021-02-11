import React, { useEffect, useState } from "react";
import "./Activity.css"


function UserActivity(props) {


    var ratings = props.user.Ratings;
    console.log(props.user);
    console.log(ratings)

    return (
        <p>hello world</p>
    )

}

export default UserActivity;