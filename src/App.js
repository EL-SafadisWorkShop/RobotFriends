import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";



//Destructing
//Components that have state in them are called smart components
class App extends Component {
    constructor() {
        super()
        //This state is what describes the App and live in the Components. In other words, it changes in an App 
        //Virtual Dom collects this entire state and React that uses it to render and pass them down as props
        this.state = {

            Robots: [], 
            searchfield: ""
        }
    }
    //Using Lifecycle hooks/methods - if they run they will automatically trigger when this app gets loaded on the website.
    componentDidMount() {
        //The API is going to recieve a resp, which is whatever the users are
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> {
            //This resp is .json()
           return response.json();
        })
        //then we are getting users
        .then(users => {
            //When component does mount I setState Robots that we get from that Robot.JS file
            //setStates Robots ---> to users
            this.setState({Robots: users})
        })
    }
 
    //Is a made up function to get an event 
    onSearchChange = (event) => {
        //This updates the state so that the searchfield always gets updated, in other words, does some searching based on what's the input
        this.setState({searchfield: event.target.value}) 
    }

    render() {
         //Directly comunicating to the search input to the robot list
        //Robots being filtered and after filtering giving robots
        const filteredRobots = this.state.Robots.filter(robots => {
            //returning a condition using lowercase methode
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

             
        }) 
        //If users list was big and it takes to time to display on screen I have a loading conditional statement just in case
        if(this.state.Robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return(
            <div className="tc">
              <h1 className="f1">RobotFriends</h1>
              {/*Passing down onSearchChange through searchChange. Everytime its there a change on the input lets the app know there is a change*/}
              <SearchBox searchChange={this.onSearchChange}/>
              {/*Robots={Robots} is the Robots Array or FakeDB*/}
              {/*Accessing Robots from here (this.state.robots)/{filteredRobots} and not from line 5 the SearchBox*/}
              <CardList Robots={filteredRobots}/>            
            </div>) 
    }
  }
}

export default App; 