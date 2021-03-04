import React from "react";
import "../styles/ContentWrapper.scss";

const ContentWrapper = ({ children }) => (
  <div className="content">{children}</div>
);

export default ContentWrapper;
