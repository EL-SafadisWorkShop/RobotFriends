import React from "react";

//cards needs to accept parameters(props) for things to change
//Changed it/Destructed props updated version. 
const Card = ({name, email, id}) => {

    return(        
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
            { /*We also passed in IDs, therefore, using interpolation methode I make things more dynamic: for every robot card there is a different avatar*/}
            <img src={`https://robohash.org/${id}?200x200`} alt="Robots"/>
            <div>
                {/*Using props I pass it down to show the user email and name of users in the fake DB - Destructuring method so as line 5 in Card component*/}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>    
        </div>
    )
} 

export default Card; 
