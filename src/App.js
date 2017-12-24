import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Table from "./Table";
import User from "./User";

const cis = new User("CISV", "Cis", "Vercouteren", 21);
const xander = new User("XANDERVR", "Xander", "Van Raemdonck", 21);
const jari = new User("JARIV", "Jari", "Verswyvel", 20);
const jerre = new User("JERREV", "Jerre", "Vermeir", 34);
const ine = new User("INEP", "Ine", "Peeters");
const users = [cis, xander, jari, jerre, ine];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: users,
            searchValue: ""
        };
    }

    onDismiss = id => {
        const updatedList = this.state.users.filter(el => id !== el.id);
        this.setState({
            users: updatedList
        });
    };

    onChangeSearch = e => {
        this.setState({
            searchValue: e.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <h1>This is a list of users</h1>
                <Search
                    value={this.state.searchValue}
                    onChangeSearch={this.onChangeSearch}
                />
                <Table
                    users={this.state.users}
                    searchValue={this.state.searchValue}
                    onDismiss={this.onDismiss}
                />
            </div>
        );
    }
}

export default App;
