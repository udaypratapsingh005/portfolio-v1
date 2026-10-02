import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiNpm,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

import skills from "../data/skills";

const iconMap = {
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  JavaScript: SiJavascript,
  React: SiReact,

  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,

  "REST API": SiJavascript,

  Git: SiGit,
  GitHub: SiGithub,

  "VS Code": () => (
    <span className="vscode-icon">
      <span>&lt;</span>
      <span>/</span>
      <span>&gt;</span>
    </span>
  ),

  Postman: SiPostman,
  Vercel: SiVercel,
  Render: SiRender,
  "MongoDB Atlas": SiMongodb,
  npm: SiNpm,
};

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and interactive user interfaces.",
    items: skills.frontend,
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Working with server-side JavaScript, APIs, and databases.",
    items: skills.backend,
  },
  {
    number: "03",
    title: "Tools & Technologies",
    description:
      "Tools and platforms used to build, test, manage, and deploy applications.",
    items: skills.tools,
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">Tech Stack</span>

          <h2 className="section-title">
            Tools & <span>Technologies.</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use to build, test, manage, and
            deploy web applications.
          </p>
        </div>

        <div className="skills-tech-grid">
          {skillGroups.map((group) => (
            <div className="tech-group" key={group.title}>

              <div className="tech-group-header">
                <span className="tech-group-number">
                  {group.number}
                </span>

                <div>
                  <h3>{group.title}</h3>

                  <p>{group.description}</p>
                </div>
              </div>

              <div className="tech-items">
                {group.items.map((skill) => {
                  const Icon = iconMap[skill.name];

                  return (
                    <div className="tech-item" key={skill.name}>

                      <div className="tech-icon">
                        <Icon />
                      </div>

                      <div className="tech-info">
                        <h4>{skill.name}</h4>
                        <span>{skill.description}</span>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;