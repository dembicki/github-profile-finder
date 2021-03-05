import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/List.scss";

export default function ReposList() {
  const repos = useSelector((state) => state.github.repos);
  const username = useSelector((state) => state.github.login);
  return (
    <>
      <h2 className="listHeading">Repositiories: </h2>
      <ul className="list">
        {repos ? (
          repos.map((e) => (
            <Link
              to={{
                pathname: `/${username}/${e.name}/commits`,
                state: { foo: "bar" },
              }}
            >
              <li key={e.id}>
                <span className="listName">{e.name}</span>
                <span className="listDate">Updated: {e.updated_at}</span>
              </li>
            </Link>
          ))
        ) : (
          <p>Nothing here yet..</p>
        )}
      </ul>
    </>
  );
}
