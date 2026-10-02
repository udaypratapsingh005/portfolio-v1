const stats = [
  {
    value: "06+",
    label: "Projects Built",
  },
  {
    value: "MERN",
    label: "Development Stack",
  },
  {
    value: "2026",
    label: "Currently Learning",
  },
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">About Me</span>

          <h2 className="section-title">
            Building skills by
            <br />
            building real projects.
          </h2>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <p>
              I'm a developer focused on building modern and practical web
              applications. My current development journey is centered around
              JavaScript and the MERN stack.
            </p>

            <p>
              I started with the fundamentals of web development and gradually
              moved into React, backend development, REST APIs, databases, and
              deployment. Instead of only learning concepts, I use projects to
              understand how different technologies work together.
            </p>

            <p>
              I'm continuously improving my development skills by building,
              debugging, and refining real applications.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-highlight">
              <span className="about-highlight-number">01</span>

              <div>
                <h3>Frontend Development</h3>
                <p>
                  Building responsive interfaces and interactive applications
                  with React and modern JavaScript.
                </p>
              </div>
            </div>

            <div className="about-highlight">
              <span className="about-highlight-number">02</span>

              <div>
                <h3>Backend Development</h3>
                <p>
                  Working with Node.js, Express, REST APIs, authentication, and
                  MongoDB.
                </p>
              </div>
            </div>

            <div className="about-highlight">
              <span className="about-highlight-number">03</span>

              <div>
                <h3>Learning Through Projects</h3>
                <p>
                  Turning concepts into working applications to improve
                  practical development skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;