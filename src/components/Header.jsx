/* eslint-disable react/require-default-props */
/* eslint-disable no-console */

import React from "react";
import Navigation from "./Navigation";
import "../styles/Header.scss";
import Search from "./Search";

export default function Header({ title }) {
  return (
    <header>
      <div className="header_wrapper">
        <Navigation />
        <h1>{title}</h1>
      </div>
    </header>
  );
}
