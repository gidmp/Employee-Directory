import React from "react";
import "./SearchForm.css"

function SearchForm () {
    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Search"></input>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;