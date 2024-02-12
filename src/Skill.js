export default function Skill({ skill, level, color }) {
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