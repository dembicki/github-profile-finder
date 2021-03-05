/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLogin, addRepos } from "../app/github/duck/actions";

import Navigation from "./Navigation";
import "../styles/Header.scss";
import SearchIcon from "../assets/search.svg";

export default function Header({ title, clean }) {
  // TODO: change to ref
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const getData = async () => {
    // TODO: sprawdzenie poprawności loginu
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => res.data)
        .then((data) => dispatch(addLogin(data.login)));
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => res.data)
        .then((data) => dispatch(addRepos(data)));
    } else {
      console.log("username empty");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <header>
      <div className="header_wrapper">
        <Navigation />
        <h1>{title}</h1>
      </div>
      {!clean ? (
        <form id="search" onSubmit={handleSubmit}>
          <img alt="search" src={SearchIcon} />
          <input
            type="text"
            placeholder="Search for github profile"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      ) : null}
    </header>
  );
}
