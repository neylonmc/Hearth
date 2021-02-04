import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    // Row,
    // Col,
    Avatar
} from 'rsuite';
import "./SimilarUsers.css";
import API from "../../utils/RandomAPI";

function SimilarUsers() {
    // DUMBY DATA
    const [searchState, setSearch] = useState([]);
    useEffect(() => {
        API.randomUsers().then(users => {
            console.log(users.data.results);
            setSearch(users.data.results);
        });
    }, []);

    return(

        searchState.map(user => {
            return( 
                <Avatar id="avatar" size="lg" src={user.picture.medium}>
                    {user.name.first[0]}{user.name.last[0]}
                </Avatar>
            )

        })
    )

    

};

export default SimilarUsers;