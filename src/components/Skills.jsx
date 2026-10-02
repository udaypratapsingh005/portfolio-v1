import skills from "../data/skills";

const skillCategories = [
  {
    key: "frontend",
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and interactive user interfaces with modern web technologies.",
  },
  {
    key: "backend",
    number: "02",
    title: "Backend",
    description:
      "Working with server-side JavaScript, APIs, databases, and backend architecture.",
  },
  {
    key: "tools",
    number: "03",
    title: "Tools & Workflow",
    description:
      "Using development tools and platforms to build, manage, and deploy applications.",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Tech Stack</span>

          <h2 className="section-title">
            Technologies I
            <br />
            work with.
          </h2>

          <p className="section-description">
            A practical stack focused on building modern web applications.
            Technologies marked as learning are part of my current development
            journey.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-category" key={category.key}>
              <div className="skill-category-header">
                <span className="skill-category-number">
                  {category.number}
                </span>

                <h3>{category.title}</h3>
              </div>

              <p className="skill-category-description">
                {category.description}
              </p>

              <div className="skill-list">
                {skills[category.key].map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>

                    <span
                      className={`skill-level skill-level-${skill.level
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;