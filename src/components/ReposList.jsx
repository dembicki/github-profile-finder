import React from "react";
import { useSelector } from "react-redux";
import "../styles/ReposList.scss";

export default function ReposList() {
  const repos = useSelector((state) => state.repos);

  return (
    <>
      <h2 className="reposHeading">Repositiories: </h2>
      <ul className="repos">
        {repos ? (
          repos.map((e) => (
            <li>
              <span className="repoName">{e.name}</span>
              <span className="repoDate">Updated: {e.updated_at}</span>
            </li>
          ))
        ) : (
          <p>Nothing here yet..</p>
        )}
      </ul>
    </>
  );
}
