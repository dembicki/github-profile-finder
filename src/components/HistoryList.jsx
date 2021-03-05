import React from "react";
import { useSelector } from "react-redux";
import "../styles/List.scss";

export default function HistoryList() {
  const history = useSelector((state) => state.factorial.history);
  const currentInput = history?.slice(-1).pop()?.input;
  const currentOutput = history?.slice(-1).pop()?.output;

  return (
    <>
      {currentInput && currentOutput ? (
        <h2 className="listOutput">
          Output: {currentInput}! = {currentOutput}
        </h2>
      ) : null}
      <h2 className="listHeading">History: </h2>
      <ul className="list">
        {history ? (
          history
            .slice(0)
            .reverse()
            .map((e) => (
              <li>
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
