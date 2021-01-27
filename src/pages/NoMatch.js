import React from 'react';

function NoMatch() {

    return(
        <div className="no-match-container">
            <img className="no-match-image" src="https://media.giphy.com/media/6uGhT1O4sxpi8/source.gif" alt="confused pulp fiction gif"/>
            <h1 className="no-match-title">whoops</h1>
            <h2 id="no-match-body">we can't seem to find the page you're looking for</h2>
            <h2 id="no-match-body"><strong> try again </strong></h2>
        </div>
    )

};

export default NoMatch;