import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import ReposList from "../components/ReposList";
import Search from "../components/Search";

export default function Home() {
  return (
    <div>
      <Header title="Github profile finder" />
      <Search />
      <ContentWrapper>
        <ReposList />
      </ContentWrapper>
    </div>
  );
}
