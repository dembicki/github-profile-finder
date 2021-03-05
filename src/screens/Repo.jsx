import React from "react";
import { useParams } from "react-router-dom";
import CommitList from "../components/CommitList";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";

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
