import React from "react";
import { useSelector, useStore } from "react-redux";
import "../styles/List.scss";

export default function ReposList() {
  const repos = useSelector((state) => state.github.repos);

  return (
    <>
      <h2 className="listHeading">Repositiories: </h2>
      <ul className="list">
        {repos ? (
          repos
            .sort((a, b) => a.updated_at - b.updated_at)
            .map((e) => (
              <li key={e.id}>
                <span className="listName">{e.name}</span>
                <span className="listDate">Updated: {e.updated_at}</span>
              </li>
            ))
        ) : (
          <p>Nothing here yet..</p>
        )}
      </ul>
    </>
  );
}
