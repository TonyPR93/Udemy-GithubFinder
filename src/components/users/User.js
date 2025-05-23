import React, { useEffect, Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import GithubContext from "../../context/github/githubContext";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

const User = () => {
  //Ce sont encore des props repos et getuserrepos = app.js
  const { login: userLogin } = useParams(); //on utilise ce qui a été envoyé dans l'url

  //Toute les variables qu'on utilisera d'user, comme cela on devra pas utiliser user.name, ... (doit avoir le même nom de variable que sur l'api)
  const {
    user: {
      name,
      avatar_url,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_gists,
      public_repos,
      hireable,
      blog,
      company,
    },
    loading, //ceux-ci sont déja déclaré dans le githubContext
    getUser,
    repos,
    getUserRepos,
  } = useContext(GithubContext);

  useEffect(() => {
    getUser(userLogin);
    getUserRepos(userLogin);
    // WARN: You should not ignore the linter
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-centre">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub profile
          </a>
          <ul>
            <li>{login && <strong>Username: {login} </strong>}</li>
            <li>{company && <strong>Company: {company}</strong>}</li>
            <li>
              {blog && (
                <strong>
                  Website: <a href={`https://${blog}`}>{blog}</a>{" "}
                </strong>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="car text-centre">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public gists: {public_gists}</div>
      </div>
      {/* On envoit les repos pour les afficher 1 a 1 */}
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
