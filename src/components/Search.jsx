/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addLogin, addRepos } from "../app/github/duck/actions";
import { addHistory } from "../app/factorial/duck/actions";

import "../styles/Search.scss";
import SearchIcon from "../assets/search.svg";

export default function Search({ isFactorial }) {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();
  const [err, setErr] = useState();

  const getData = async () => {
    const URL = "https://api.github.com";
    axios
      .get(`${URL}/users/${username}`)
      .then((res) => res.data)
      .then((data) => dispatch(addLogin(data.login)));

    axios
      .get(`${URL}/users/${username}/repos?per_page=5&sort=updated`)
      .then((res) => res.data)
      .then((data) => dispatch(addRepos(data)));
  };

  const checkUserAndGetData = async () => {
    setErr();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
      getData();
    } catch (error) {
      if (error.response) setErr("Error: login doesn't exist");
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
    checkUserAndGetData();
  };

  const factorialSubmit = (e) => {
    e.preventDefault();
    if (input) {
      calcFactorial();
    }
  };

  return (
    <>
      <p className="error">{err}</p>
      <form
        id="search"
        onSubmit={!isFactorial ? handleSubmit : factorialSubmit}
      >
        <img alt="search" src={SearchIcon} />
        <input
          type={!isFactorial ? "text" : "number"}
          placeholder={
            !isFactorial ? "Search for github profile" : "Input n value for n!"
          }
          onChange={
            !isFactorial
              ? (e) => setUsername(e.target.value)
              : (e) => setInput(e.target.value)
          }
        />
        <button type="submit">{!isFactorial ? "Search" : "Calculate"}</button>
      </form>
    </>
  );
}
