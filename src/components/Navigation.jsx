/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">search</Link>
        </li>
        <li>
          <Link to="/about">about project</Link>
        </li>
        <li>
          <Link to="/factorial">factorial</Link>
        </li>
      </ul>
    </nav>
  );
}
