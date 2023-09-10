/*Sert de controller pour la state, ici se font les appel API (axios)
 * Ici on déclare la state initial
 * On déclare des fonctions qui recupereront les données et feront appel au reducer
 * C'est dans le reducer uniquement que la state se modifie !
 */

import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";

//Les actions qui seront utilisées
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

//Debut de state
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //search Usears
  //La valeur text est definit dans le submit
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  //get user

  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  //get repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    console.log("Response from GitHub API:", res.data); // Ajoutez cette ligne pour déboguer la réponse de l'API

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };
  //clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {/* Rend utilisable les fonctions déclarés plus haut, ainsi que les données de la state */}
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
