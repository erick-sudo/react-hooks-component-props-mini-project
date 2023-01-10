import React from "react"

//https://via.placeholder.com/215

function About({aboutText, imageSrc = "https://via.placeholder.com/215"}) {
    return (
        <aside>
            <img src={imageSrc} alt="blog logo"></img>
            <p>{aboutText}</p>
        </aside>
    );
}

export default About