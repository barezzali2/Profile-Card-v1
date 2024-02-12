import Skill from "./Skill";

const skills = [
    { skill: "Web Design", level: "Professional", color: "#7FFF00" },
    { skill: "React Js", level: "Intermediate", color: "skyblue" },
    { skill: "OOP", level: "Advanced", color: "#ffb366" },
    { skill: "Graphic Design", level: "Intermediate", color: "#4dffc3" }
    
  ];

  export default function SkillList() {
    return (
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill skill={skill.skill} level={skill.level} color={skill.color} />
        ))}
      </div>
    );
  }