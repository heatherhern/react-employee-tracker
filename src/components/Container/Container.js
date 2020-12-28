import React, { Component } from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";
import API from "../../utils/api.js";
import "./container.css";

class Container extends Component {
    state = {
        employees: [],
    };

    initialEmployeeList;

    componentDidMount() {
        console.log("Component successfully mounted");
        this.getEmployees();
    }

    getEmployees = () => {
        API.getEmployees()
            .then((res) => {
                this.initialEmployeeList = res.data.results;
                this.setState({ employees: res.data.results });
            })
            .catch((err) => console.log(err));
    };

    handleInputChange = (e) => {
        const searchName = e.target.value;
        if (searchName) {
            this.searchNames(searchName);
        } else if (!searchName) {
            this.setState({ employees: this.initialEmployeeList });
        }
    };

    searchNames = (searchName) => {
        const filteredEmployees = this.initialEmployeeList.filter((employee) => {
            let uppercaseFirstName = employee.name.first.toUpperCase();
            let uppercaseSearchName = searchName.toUpperCase();
            if (
                employee.name.first.toUpperCase().includes(uppercaseSearchName) ||
                employee.name.last.toUpperCase().includes(uppercaseSearchName)
            ) {
                return employee;
            }
        });
        this.setState({ employees: filteredEmployees });
    };

    sortNames = () => {
        let sortedEmployees = this.state.employees;
        sortedEmployees.sort(function (a, b) {
            let nameA = a.name.first.toUpperCase();
            let nameB = b.name.first.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        this.setState({ employees: sortedEmployees });
    };

    render() {
        return (
            <div className="container">
                <Search handleInputChange={this.handleInputChange} />
                <Table employees={this.state.employees} sortNames={this.sortNames} />
            </div>
        );
    }
}

export default Container;