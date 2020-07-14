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
            employees : [],
            filteredEmployee : [],
            filterText : ''
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
                //allows for repopulation of table after search imput is deleted
                this.setState({filteredEmployee: this.state.employees})
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event =>{
        //get the value of search input
        const value = event.target.value;

        // Updating the input's state equal to input's value
        this.setState({
          filterText: value
        });
        
        //filter the employee list by name based on the value of input text
        let filteredEmployees = this.state.employees.filter(name => {
            let employeeName = `${name.name.first} ${name.name.last}`;
            return employeeName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
        })

        //set the state to the filtered employees
        this.setState({
            filteredEmployee: filteredEmployees
        })

    }

    //render the tables and pass the states as props to each components
    render() {
        return(
            <div>
                <Header />
                <SearchForm 
                    handleInputChange = {this.handleInputChange} 
                    value={this.state.filterText}
                />
                <Table employees = {this.state.filteredEmployee}/>
            </div>
        )
    }
}
  
export default App;
  

//work on this page first? so the data flows from top to bottom