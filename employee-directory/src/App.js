import React, { Component } from "react";
import Header from "./components/Header/Header.js"
import SearchForm from "./components/SearchForm/SearchForm.js"
import Table from "./components/Table/Table.js"
import API from "./utils/API.js"

class App extends Component {
    //set up class constructor that assign initial state
    constructor(props) {
        super(props);
        this.state = {
            employees : []
        }; 
    }    

    //when app is rendered for the first time, allt he employees will berendered to the DOM
    componentDidMount() {
        this.getEmployees();
    }

    //get the employees from the API call
    getEmployees(){
        API.getRandomEmployees()
            //what comes back from the API
            .then(res => {
                this.setState({employees : res.data.results})
            })
            .catch(err => console.log(err));
    }

    //render the tables
    render() {
        return(
            <div>
                <Header />
                <SearchForm />
                <Table employees = {this.state.employees}/>
            </div>
        )
    }
}
  
export default App;
  

//work on this page first? so the data flows from top to bottom