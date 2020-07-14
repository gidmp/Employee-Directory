import React from "react";
import "./SearchForm.css"

function SearchForm (props) {
    return (
        <div>
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
    )
}

export default SearchForm;