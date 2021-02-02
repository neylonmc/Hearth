import React, { useState, useEffect } from "react";
import {
    InputPicker, Panel
} from "rsuite";
import Entertainment from "../../utils/TopEntertainment";
import "./SearchBar.css";

function SearchBar()  {
    
    return(
        <InputPicker 
            className= "search-bar"
            data={ Entertainment } 
            size="md"
            placeholder="search"
            defaultValue= "search"
            onSelect= { function(value, item) {
                window.location.href = item.local_ext;
            } }
        />
    )
    
};

export default SearchBar;
