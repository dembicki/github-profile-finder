import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header title="Github profile finder" />
      <ContentWrapper>
        <p>this is home page</p>
      </ContentWrapper>
    </div>
  );
}
