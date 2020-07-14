import React from "react";
import "./Header.js"

function Header(){
    return (
        <section id ="header">
            <div className = "container-fluid">
                <div className = "row justify-content-center d-flex">
                    <div className = "header-text">
                        <h1>Employee Directory</h1>
                        <p>Click on carrot to filter by heading or use the search box to narrow your result</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;