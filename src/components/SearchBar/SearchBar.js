import React, { useState, useEffect } from "react";
import {
    InputGroup,
    Input,
    InputPicker
} from "rsuite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Entertainment from "../../utils/TopEntertainment";
import "./SearchBar.css";

function SearchBar() {

    useEffect(() => {
        console.log(Entertainment);
    })

    return(
        <InputPicker 
            className= "search-container"
            data={ Entertainment } 
            size="lg"
            placeholder="search"
        />
    )
};

export default SearchBar;

/* <div className="search-container">
<InputGroup inside className="search-group">
    <Input 
        className="search-input" 
        onChange={ onChange } 
        type="search" 
        placeholder="search"
    />
    <InputGroup.Button className="search-button">
        <FontAwesomeIcon className="search-icon" icon={faSearch}/>
    </InputGroup.Button>
</InputGroup>
</div> */