/* eslint-disable no-console */
import axios from "axios";
import React, { useState } from "react";
import Navigation from "./Navigation";

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
      <Navigation />
      <h1>Github profile finder</h1>
      <form>
        <input
          type="text"
          placeholder="Search for github profile"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="button" onClick={() => getData()}>
          Search
        </button>
      </form>
      <p>{userData ? userData.name : null}</p>
      <img alt="avatar" src={userData ? userData.avatar_url : null} />
    </header>
  );
}
