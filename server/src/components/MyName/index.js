import React from "react";
import "./style.css";

function MyName(){
    return(
        <div className = "uk-container">
            <div className = "uk-text-center">
                <div className = "name-container">
                    <h1 id ="myName">Goodwin Amundson</h1>
                    <p> Full-stack web developer</p>
                </div>
            </div>
        </div>
    )
}

export default MyName