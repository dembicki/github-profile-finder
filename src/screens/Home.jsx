import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import ReposList from "../components/ReposList";

export default function Home() {
  return (
    <div>
      <Header title="Github profile finder" />
      <ContentWrapper>
        <ReposList />
      </ContentWrapper>
    </div>
  );
}
