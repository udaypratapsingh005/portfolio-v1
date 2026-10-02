function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-title">
            Uday Pratap Singh
            <span>Full Stack Developer</span>
          </h1>

          <p className="hero-description">
            I build responsive and practical web applications using modern
            JavaScript technologies, with a focus on React and the MERN stack.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Projects
              <span>↗</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero-code">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                <span className="code-key">name:</span>{" "}
                <span className="code-string">"Uday"</span>,
              </p>

              <p className="code-indent">
                <span className="code-key">stack:</span>{" "}
                <span className="code-string">"MERN"</span>,
              </p>

              <p className="code-indent">
                <span className="code-key">passion:</span>{" "}
                <span className="code-string">"Building"</span>
              </p>

              <p>{"}"}</p>
            </div>
          </div>

          <div className="hero-floating hero-floating-one">
            React
          </div>

          <div className="hero-floating hero-floating-two">
            Node.js
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="hero-scroll-arrow">↓</span>
      </a>
    </section>
  );
}

export default Hero;