import React, { useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Repos from "../repos/Repos";
import Spinner from "../layout/spinner";

function User({
  getUser,
  getUserRepos,
  loading,
  user: {
    name,
    avatar_url,
    location,
    bio,
    html_url,
    followers,
    following,
    public_gists,
    public_repos,
    hireable,
    blog,
    company,
  },
  repos,
}) {
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
  }, []);

  useEffect(() => {
    getUserRepos(login);
  }, []);

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      hireable :{" "}
      {hireable ? (
        <i className="fas fa-check text-succes" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "150px" }}
          ></img>
          <h1>Nom : {name}</h1>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username : </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company : </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website : </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
}

export default User;
