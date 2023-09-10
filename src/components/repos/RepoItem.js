import React from "react";

//Affichage d'un repo avec nom et lien
const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};

export default RepoItem;
