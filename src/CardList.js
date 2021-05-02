import React from "react";
import Card from "./Card";

//Destructuring props and having acces to RobotsDatabase
const CardList = ({Robots}) => { 
    return(
    <div> 
        {/*Looping over all the users in the FakeDB(Robots) to display them on the screen*/}   
        {Robots.map((user, i) => {
        //Returns a user cardcomponent
        return(  
        //Grabing users from the fake database using i - for index
        //Using key props to give react a unique key in this case i to keep things simple incase a card gets deleted or updated. The app will still function.
        <Card key={i} 
        id={Robots[i].id} 
        name={Robots[i].name} 
        email={Robots[i].email} 
        /> //Key props needs to have something that doesn't change (e.i) i or id. In this case something that is unique
        )
    })}
    </div>
    );
}

export default CardList; 
