import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommitList from "../components/CommitList";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import ReposList from "../components/ReposList";
import Search from "../components/Search";

export default function Repo() {
  const { repoName } = useParams();

  return (
    <div>
      <Header title={repoName} />
      <ContentWrapper>
        <CommitList />
      </ContentWrapper>
    </div>
  );
}
