import React from "react";
import "./styles.css";
import Avatar from "./Avatar";
import Info from "./Info";
import SkillList from "./SkillList";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Info />
        <SkillList />
      </div>
    </div>
  );
}


