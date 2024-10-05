const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'CSS', level: 75 },
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <h3>{skill.name}</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: `${skill.level}%` }}>
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .skills {
          padding: 20px;
        }
        .skill {
          margin: 10px 0;
        }
        .progress {
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }
        .progress-bar {
          background: #0070f3;
          height: 20px;
          text-align: center;
          color: white;
          line-height: 20px;
        }
      `}</style>
    </section>
  );
};

export default Skills; // Ensure this is a default export
