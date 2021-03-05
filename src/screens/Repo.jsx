import React, { useEffect } from "react";
import axios from "axios";
import CommitList from "../components/CommitList";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import ReposList from "../components/ReposList";
import Search from "../components/Search";

export default function Repo() {
  return (
    <div>
      <Header title="Project name:" />
      <ContentWrapper>
        <CommitList />
      </ContentWrapper>
    </div>
  );
}
