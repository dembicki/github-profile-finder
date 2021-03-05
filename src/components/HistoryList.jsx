import React from "react";
import { useSelector } from "react-redux";
import "../styles/List.scss";

export default function HistoryList() {
  const history = useSelector((state) => state.factorial.history);

  return (
    <>
      <h2 className="listHeading">History: </h2>
      <ul className="list">
        {history ? (
          history
            .slice(0)
            .reverse()
            .map((e) => (
              <li key={e.input}>
                <span className="listItem">
                  {e.input}! = {e.output}
                </span>
              </li>
            ))
        ) : (
          <p>Nothing here yet..</p>
        )}
      </ul>
    </>
  );
}
