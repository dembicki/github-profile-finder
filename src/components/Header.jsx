/* eslint-disable no-console */
import axios from "axios";
import React, { useState } from "react";
import Navigation from "./Navigation";
import "../styles/Header.scss";
import SearchIcon from "../assets/search.svg";

export default function Header() {
  const [username, setUsername] = useState("");
  // const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();

  const getData = async () => {
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => res.data)
        .then((data) => {
          setUserData(data);
          console.log(data);
        });
    } else {
      console.log("username empty");
    }
  };

  return (
    <header>
      <div className="header_wrapper">
        <Navigation />
        {!userData ? (
          <h1>Github profile finder</h1>
        ) : (
          <h1>Profile: {userData.login}</h1>
        )}
      </div>
      <form id="search">
        <img alt="search" src={SearchIcon} />
        <input
          type="text"
          placeholder="Search for github profile"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="button" onClick={() => getData()}>
          Search
        </button>
      </form>
    </header>
  );
}
