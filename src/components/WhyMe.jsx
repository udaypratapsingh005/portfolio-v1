import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiRefreshCw,
  FiZap,
} from "react-icons/fi";

const reasons = [
  {
    number: "01",
    icon: FiCode,
    title: "I Build, Not Just Learn",
    description:
      "I turn concepts into working projects so that I can understand how technologies behave in real applications.",
    tag: "PROJECT DRIVEN",
    size: "large",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Full Stack Mindset",
    description:
      "I am building my understanding across frontend, backend, APIs, databases, and deployment.",
    tag: "MERN",
    size: "small",
  },
  {
    number: "03",
    icon: FiZap,
    title: "Problem Solving",
    description:
      "I focus on understanding problems, breaking them into smaller parts, and finding practical solutions.",
    tag: "BUILD • DEBUG • IMPROVE",
    size: "small",
  },
  {
    number: "04",
    icon: FiRefreshCw,
    title: "Always Improving",
    description:
      "Every project gives me something new to learn, improve, refactor, and apply in the next one.",
    tag: "CONTINUOUS LEARNING",
    size: "large",
  },
];

function Journey() {
  return (
    <section id="why-me" className="why-me section">
      <div className="container">

        {/* =========================================
            INTRO
        ========================================= */}

        <div className="why-me-intro">

          <div className="why-me-intro-header">
            <div className="why-me-intro-meta">
              <span>01</span>
              <span>DEVELOPER MINDSET</span>
            </div>

            <div className="why-me-intro-status">
              <span></span>
              BUILDING
            </div>
          </div>

          <div className="why-me-intro-content">
            <p>
              I am focused on building{" "}
              <strong>practical skills</strong> through real
              projects, <strong>consistent practice</strong>,
              and continuous improvement.
            </p>
          </div>

          <div className="why-me-intro-footer">

            <div className="why-me-intro-line">
              <span className="why-me-intro-progress"></span>
              <span className="why-me-intro-dot"></span>
            </div>

            <div className="why-me-intro-labels">
              <span>BUILD</span>
              <span>LEARN</span>
              <span>DEBUG</span>
              <span>IMPROVE</span>
            </div>

          </div>
        </div>

        {/* =========================================
            REASONS GRID
        ========================================= */}

        <div className="why-me-grid">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                className={`why-card why-card-${reason.size}`}
                key={reason.number}
              >

                <div className="why-card-top">

                  <span className="why-card-number">
                    {reason.number}
                  </span>

                  <span className="why-card-icon">
                    <Icon />
                  </span>

                </div>

                <div className="why-card-content">

                  <span className="why-card-tag">
                    {reason.tag}
                  </span>

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>

                </div>

                <span className="why-card-arrow">
                  <FiArrowUpRight />
                </span>

              </article>
            );
          })}

        </div>

        {/* =========================================
            BOTTOM TIMELINE
        ========================================= */}

        {/* <div className="why-me-bottom">

          <span>
            <b>01</b> — BUILD
          </span>

          <span>
            <b>02</b> — LEARN
          </span>

          <span>
            <b>03</b> — DEBUG
          </span>

          <span>
            <b>04</b> — IMPROVE
          </span>

        </div> */}

      </div>
    </section>
  );
}

export default Journey;