import React from 'react';
import "./NoMatch.css";

function NoMatch() {

    return(
        <div className="no-match-container">
            <img className="no-match-image" src="https://media.giphy.com/media/6uGhT1O4sxpi8/source.gif" alt="confused pulp fiction gif"/>
            <h1 className="no-match-title">404: No Results</h1>
            <h2 id="no-match-body">we can't find the page you're looking for</h2>
        </div>
    )

};

export default NoMatch;