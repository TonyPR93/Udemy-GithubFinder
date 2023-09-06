import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/search";
import axios from "axios";
//Permet de fetch des datas

class App extends Component {
  state = {
    users: [], //Contiendra tout les utilisateurs
    loading: false, //Pour faire une animation avec le spinner.
  };

  // async componentDidMount() {
  //   this.setState({ loading: true }); //On met a true ce qui permet de lancer le gif de chargement
  //   const res = await axios.get(`https://api.github.com/users?
  //                                 client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //                                 client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); //On recupere les données
  //   this.setState({ users: res.data, loading: false }); //On met le chargement en false.
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers} //On passe a Search la fonctions searchUsers a Search
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
          {/* On envoie au component users le tableau contenant TOUT les utilisateurs */}
        </div>
      </div>
    );
  }
}

export default App;
