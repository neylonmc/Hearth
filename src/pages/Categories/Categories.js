import React from "react";


function Categories() {

    function getTopic(){

        var topic = window.location.href;
        console.log(topic);

    };

    getTopic();


    return (
        <h1> hello world </h1>
    )

};

export default Categories;