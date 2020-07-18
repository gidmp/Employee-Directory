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
            filterText : '',
            sortby: ''
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

    //handle employee filter when letters goes into the input table
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

    //handling sort employee by ascending or descending order 
    handleSorting = event => {
        //sort based on the id of the table header
        const getId = event.target.getAttribute("id")

        //if we clicked the id that has been selected, toggle the order
        if(this.state.sortby === getId){
            return this.setState({
                //reverse() reverses the array in place so the first array element becomes the last, and the last array element becomes the first.
                filteredEmployee : this.state.filteredEmployee.reverse(),
                sortby : getId
            })
        }

        //if it is different id, sort the employees
        //start with the sort function and what do you want to sort the work out of it?
        let sortedEmployees = this.state.employees.sort((a,b) =>{
            //return different sorting based on the id of clicked table header
            switch(getId){
                case('name'):
                    return a.name.first < b.name.first ? 1 : -1
                case ('phone'): 
                    return a.phone < b.phone ? 1 : -1
                case ('email'): 
                    return a.email < b.email ? 1 : -1
                case ('dob'): 
                    return a.dob.date < b.dob.date ? 1 : -1
            }

        })

        //set the ID to the currently selected category and populate the employee row state the sorted order
        this.setState({
            filteredEmployee : sortedEmployees,
            sortby: getId
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
                <Table employees = {this.state.filteredEmployee} handleSorting = {this.handleSorting}/>
            </div>
        )
    }
}
  
export default App;
  

//work on this page first? so the data flows from top to bottom