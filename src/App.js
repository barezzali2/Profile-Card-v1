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

      <p>I'm a student at American University of Iraq, Sulaimani, and I'm studying Software Engineering. I really have passionate for learing on my field in depth. Besides my major, I work on myself in differnet fields, such as Web Design, graphic Design and Developing my own projects. </p>
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

