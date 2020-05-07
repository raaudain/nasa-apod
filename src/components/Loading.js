import React from "react";
import loading from "../img/loading-icon.png";

export default function Loading() {
  return (
    <>
      <img
        className="loading-icon"
        src={loading}
        alt="loading page"
      />
    </>
  );
}
