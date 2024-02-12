import React from "react";
import Photo from "./Photo";
import Information from "./Information";
import SkillList from "./SkillList";

export default function App() {
  return (
    <div className="card">
      <Photo />
      <div className="data">
        <Information />
        <SkillList />
      </div>
    </div>
  );
}


