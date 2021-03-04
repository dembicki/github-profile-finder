import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <Header clean title="Project requirements" />
      <ContentWrapper>
        <p>this is about page</p>
      </ContentWrapper>
    </div>
  );
}
