import React from "react";
import "./styles.css";

const skills = [
  { skill: "Web Design", level: "Professional", color: "#7FFF00" },
  { skill: "React Js", level: "Intermediate", color: "yellow" },
  { skill: "OOP", level: "Advanced", color: "#5F9EA0" },
  { skill: "Graphic Design", level: "Intermediate", color: "skyblue" }
  
];

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

function Avatar() {
  return <img src="myPhoto.jpg" alt="Barez" className="avatar" />;
}

function Info() {
  return (
    <React.Fragment>
      <h1>Barez Zuber Ali </h1>

      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </React.Fragment>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {(level === "Advanced" && "🚀") ||
          (level === "Professional" && "😎") ||
          (level === "Intermediate" && "🤞")}
      </span>
    </div>
  );
}

