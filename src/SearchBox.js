import React from "react";

//Having searchChange as a function passed down from App comp onSearchChange
//Helps in grabing the props object
const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input 
            className="tc pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robots"
            onChange={searchChange}
             />
        </div>
    )
} 

export default SearchBox; 
