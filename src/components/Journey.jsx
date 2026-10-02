const journeyItems = [
  {
    year: "01",
    title: "Web Development Fundamentals",
    description:
      "Started with HTML, CSS, responsive layouts, Flexbox, Grid, and the fundamentals required to build modern web interfaces.",
    technologies: ["HTML", "CSS", "Responsive Design"],
  },
  {
    year: "02",
    title: "JavaScript Development",
    description:
      "Moved into JavaScript and worked with functions, arrays, objects, DOM manipulation, events, asynchronous concepts, and modern ES6+ features.",
    technologies: ["JavaScript", "DOM", "ES6+"],
  },
  {
    year: "03",
    title: "React Development",
    description:
      "Started building component-based applications with React and learned concepts such as state, effects, refs, props, routing, and application structure.",
    technologies: ["React", "JSX", "Hooks"],
  },
  {
    year: "04",
    title: "Backend Development",
    description:
      "Expanded into backend development with Node.js and Express, including REST APIs, CRUD operations, authentication, and database integration.",
    technologies: ["Node.js", "Express.js", "REST API"],
  },
  {
    year: "05",
    title: "Full Stack Projects",
    description:
      "Started combining frontend and backend concepts to build practical applications and understand how complete web applications work together.",
    technologies: ["MongoDB", "Mongoose", "MERN"],
  },
];

function Journey() {
  return (
    <section id="journey" className="journey section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">My Journey</span>

          <h2 className="section-title">
            Learning by
            <br />
            building.
          </h2>

          <p className="section-description">
            My development journey has been focused on learning fundamentals,
            applying them through projects, and gradually moving toward full
            stack development.
          </p>
        </div>

        <div className="journey-list">
          {journeyItems.map((item) => (
            <article className="journey-item" key={item.year}>
              <div className="journey-number">
                <span>{item.year}</span>
              </div>

              <div className="journey-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="journey-technologies">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;