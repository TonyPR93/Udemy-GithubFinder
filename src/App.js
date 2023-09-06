import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/search";
import { Alert } from "./components/layout/Alert";
import { About } from "./components/pages/About";
import axios from "axios";
//Permet de fetch des datas

class App extends Component {
  state = {
    users: [], //Contiendra tout les utilisateurs
    loading: false, //Pour faire une animation avec le spinner.
    alert: null,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true }); //On met a true ce qui permet de lancer le gif de chargement
  //   const res = await axios.get(`https://api.github.com/users?
  //                                 client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //                                 client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); //On recupere les données
  //   this.setState({ users: res.data, loading: false }); //On met le chargement en false.
  // }

  //search methode
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //clear
  clearUsers = () => this.setState({ users: [], loading: false });

  //alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    console.log(this.state.alert);
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers} //On passe a Search la fonctions searchUsers a Search
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                }
              />

              <Route path="/about" Component={About}></Route>
            </Routes>

            {/* On envoie au component users le tableau contenant TOUT les utilisateurs */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
