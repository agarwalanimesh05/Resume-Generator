import React from "react";
import photo from "../photo.jpg";
import Intro from "./Intro";

export default function Header() {
  return (
    <div className="Header">
      <img src={photo} className="Header-img" alt="User Icon" />
      <Intro />
    </div>
  );
}
