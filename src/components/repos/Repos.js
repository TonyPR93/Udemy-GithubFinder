import React from "react";
import RepoItem from "./RepoItem";

//On les envoie 1 a 1, envoyé depuis le component User
const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
