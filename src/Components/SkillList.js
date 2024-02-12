import Skill from "./Skill";

const skills = [
    { skill: "Web Design", level: "Professional", color: "#7FFF00" },
    { skill: "React Js", level: "Intermediate", color: "yellow" },
    { skill: "OOP", level: "Advanced", color: "#5F9EA0" },
    { skill: "Graphic Design", level: "Intermediate", color: "skyblue" }
    
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