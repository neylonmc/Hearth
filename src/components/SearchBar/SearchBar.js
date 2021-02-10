import React, { useState, useEffect } from "react";
import {
    SelectPicker
} from "rsuite";
import Entertainment from "../../utils/TopEntertainment";
import "./SearchBar.css";
import API from "../../utils/API";

function SearchBar()  {

    const [formObject, setFormObject] = useState([]);


    useEffect(() => {
        loadActivities();
      }, [])
    
    
      function loadActivities() {
        API.getActivities()
          .then(res => {
            setFormObject(res.data);
            console.log(res.data);
            setFormObject(res.data);
            console.log(formObject);
          })
          .catch(err => console.log(err));
        }
    


    return(
        <SelectPicker 
            className= "search-bar"
            data={ formObject } 
            size="md"
            placeholder="search"
            defaultValue= "search"
            onSelect= { function(value, item) {
                window.location.href = `/topic/${item.local_ext}`;
            } }
        />
    )
    
};

export default SearchBar;
