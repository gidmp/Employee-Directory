import React from "react";
import "./SearchForm.css"

function SearchForm (props) {
    return (
        <div className = "row search-form">
            <div className="col-md-6 offset-md-3">
                <form>
                    <div className="form-group">
                        <input 
                            value = {props.value}
                            onChange={props.handleInputChange}
                            type="text" 
                            className="form-control" 
                            placeholder="Search" 
                            name = "employee"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;