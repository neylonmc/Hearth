import React from "react";
import {
    InputGroup,
    Input,
} from "rsuite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./SearchBar.css";

function SearchBar() {

    return(

        <div className="search-container">
            <InputGroup inside className="search-group">
                <Input className="search-input"/>
                <InputGroup.Button className="search-button">
                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                </InputGroup.Button>
            </InputGroup>
        </div>

    )

};

export default SearchBar;
