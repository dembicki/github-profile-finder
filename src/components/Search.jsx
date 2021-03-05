import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addLogin, addRepos } from "../app/github/duck/actions";
import { addHistory } from "../app/factorial/duck/actions";

import "../styles/Search.scss";
import SearchIcon from "../assets/search.svg";

export default function Search({ factorial }) {
  // TODO: change to ref
  const [username, setUsername] = useState("");
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();

  const getData = async () => {
    // TODO: sprawdzenie poprawności loginu
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => res.data)
        .then((data) => dispatch(addLogin(data.login)));
      axios
        .get(`https://api.github.com/users/${username}/repos?per_page=5`)
        .then((res) => res.data)
        .then((data) => dispatch(addRepos(data)));
    } else {
      console.log("username empty");
    }
  };

  const calcFactorial = () => {
    let s = 1;
    for (let x = input; x > 0; x -= 1) {
      s *= x;
    }
    dispatch(addHistory(input, s));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  const factorialSubmit = (e) => {
    e.preventDefault();
    if (input) {
      calcFactorial();
    }
  };

  return (
    <form id="search" onSubmit={!factorial ? handleSubmit : factorialSubmit}>
      <img alt="search" src={SearchIcon} />
      <input
        type="text"
        placeholder={
          !factorial ? "Search for github profile" : "Input n value for n!"
        }
        onChange={
          !factorial
            ? (e) => setUsername(e.target.value)
            : (e) => setInput(e.target.value)
        }
      />
      <button type="submit">{!factorial ? "Search" : "Calculate"}</button>
    </form>
  );
}
