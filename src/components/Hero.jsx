import { useEffect, useRef, useState } from "react";

function Hero() {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [typedRole, setTypedRole] = useState("");

  const roleText = "Developer";

  /* =========================================
     DEVELOPER TYPING EFFECT
  ========================================= */

  useEffect(() => {
    let currentIndex = 0;

    const typingDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        currentIndex += 1;

        setTypedRole(roleText.slice(0, currentIndex));

        if (currentIndex >= roleText.length) {
          clearInterval(typingInterval);
        }
      }, 120);

      return () => {
        clearInterval(typingInterval);
      };
    }, 700);

    return () => {
      clearTimeout(typingDelay);
    };
  }, []);

  /* =========================================
     NAME MOUSE EFFECT
  ========================================= */

  const handleNameMouseMove = (event) => {
    const title = nameRef.current;
    const lastName = lastNameRef.current;

    if (!title || !lastName) return;

    const rect = lastName.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY =
      ((event.clientX - rect.left) / rect.width - 0.5) * 4;

    const rotateX =
      ((event.clientY - rect.top) / rect.height - 0.5) * -3;

    lastName.style.setProperty("--mouse-x", `${x}px`);
    lastName.style.setProperty("--mouse-y", `${y}px`);

    title.style.setProperty("--rotate-x", `${rotateX}deg`);
    title.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleNameMouseLeave = () => {
    const title = nameRef.current;
    const lastName = lastNameRef.current;

    if (!title || !lastName) return;

    lastName.style.setProperty("--mouse-x", "50%");
    lastName.style.setProperty("--mouse-y", "50%");

    title.style.setProperty("--rotate-x", "0deg");
    title.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <section id="home" className="hero">

      {/* Background glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-container">

        {/* ================= LEFT ================= */}

        <div className="hero-content">

          <span className="hero-greeting">
            HELLO, I'M
          </span>

          <h1
            ref={nameRef}
            className="hero-title"
            onMouseMove={handleNameMouseMove}
            onMouseLeave={handleNameMouseLeave}
          >
            <span className="hero-name hero-name-first">
              UDAY PRATAP
            </span>

            <span
              ref={lastNameRef}
              className="hero-name hero-name-last"
            >
              SINGH
            </span>
          </h1>

          {/* ================= ROLE ================= */}

          <div className="hero-role">
            <h2>
              Full Stack{" "}

              <span className="hero-role-gradient">
                {typedRole}
              </span>

              <span className="hero-cursor"></span>
            </h2>
          </div>

          <p className="hero-description">
            I build responsive and practical web applications
            using modern JavaScript technologies, with a focus
            on React and the MERN stack.
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="primary-btn hero-project-btn"
            >
              View Projects
              <span>↗</span>
            </a>

            <a
              href="https://github.com/udaypratapsingh005"
              className="secondary-btn hero-github-btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>

          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="hero-visual">

          <div className="hero-orbit hero-orbit-one"></div>

          <div className="hero-orbit hero-orbit-two"></div>

          <div className="hero-orbit-dot"></div>

          {/* Code Editor */}

          <div className="hero-code-card">

            <div className="hero-code-header">

              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-file">
                developer.js
              </div>

            </div>

            <div className="hero-code-body">

              <div className="code-line code-line-one">
                <span className="code-keyword">
                  const
                </span>{" "}

                <span className="code-variable">
                  developer
                </span>{" "}

                <span className="code-symbol">
                  =
                </span>{" "}

                <span className="code-bracket">
                  {"{"}
                </span>
              </div>

              <div className="code-line code-indent">
                <span className="code-property">
                  name
                </span>

                <span className="code-symbol">
                  :
                </span>{" "}

                <span className="code-string">
                  "UDAY PRATAP SINGH"
                </span>

                <span className="code-symbol">
                  ,
                </span>
              </div>

              <div className="code-line code-indent">
                <span className="code-property">
                  stack
                </span>

                <span className="code-symbol">
                  :
                </span>{" "}

                <span className="code-string">
                  "MERN"
                </span>

                <span className="code-symbol">
                  ,
                </span>
              </div>

              <div className="code-line code-indent">
                <span className="code-property">
                  passion
                </span>

                <span className="code-symbol">
                  :
                </span>{" "}

                <span className="code-string">
                  "BUILDING WEB APPS"
                </span>
              </div>

              <div className="code-line">
                <span className="code-bracket">
                  {"}"}
                </span>

                <span className="code-cursor"></span>
              </div>

            </div>
          </div>

          {/* Floating labels */}

          <div className="hero-tech hero-tech-react">
            <span className="hero-tech-dot"></span>
            React
          </div>

          <div className="hero-tech hero-tech-node">
            <span className="hero-tech-dot"></span>
            Node.js
          </div>

        </div>
      </div>

      {/* Scroll */}

      <div className="hero-scroll">
        <span>SCROLL</span>
        <span className="hero-scroll-line"></span>
      </div>

    </section>
  );
}

export default Hero;