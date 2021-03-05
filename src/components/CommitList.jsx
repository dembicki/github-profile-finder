import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/List.scss";
import { addCommits } from "../app/github/duck/actions";

export default function CommitList() {
  const commits = useSelector((state) => state.github.commits);
  const username = useSelector((state) => state.github.login);
  const { repoName } = useParams();
  const dispatch = useDispatch();

  const getCommits = async () => {
    axios
      .get(
        `https://api.github.com/repos/${username}/${repoName}/commits?per_page=5`
      )
      .then((res) => res.data)
      .then((data) => dispatch(addCommits(data)));
  };

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <>
      <h2 className="listHeading">Commits: </h2>
      <ul className="list">
        {commits ? (
          commits
            .sort((a, b) => a.updated_at - b.updated_at)
            .map((e) => (
              <a href={e.html_url} target="_blank" rel="noreferrer">
                <li key={e.id}>
                  <div>
                    <span className="listName">{e.commit.message}</span>
                    <span className="authorName">
                      by {e.commit.author.name}
                    </span>
                  </div>
                  <span className="listDate">
                    Updated:{" "}
                    {e.commit.committer.date.replace("T", " ").replace("Z", "")}
                  </span>
                </li>
              </a>
            ))
        ) : (
          <p>Loading..</p>
        )}
      </ul>
    </>
  );
}
