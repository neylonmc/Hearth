import React from "react";
import {
    InputPicker
} from "rsuite";
import Entertainment from "../../utils/TopEntertainment";
import "./SearchBar.css";

function SearchBar() {

    return(
        <InputPicker 
            className= "search-bar"
            data={ Entertainment } 
            size="md"
            placeholder="search"
        />
    )
};

export default SearchBar;
