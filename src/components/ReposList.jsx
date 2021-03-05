import React from "react";
import { useSelector } from "react-redux";
import "../styles/ReposList.scss";

export default function ReposList(factorial) {
  const repos = !factorial
    ? useSelector((state) => state.github.repos)
    : useSelector((state) => state.factorial.history);

  return (
    <>
      <h2 className="reposHeading">Repositiories: </h2>
      <ul className="repos">
        {repos ? (
          repos.map((e) => (
            <li key={e.id}>
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
