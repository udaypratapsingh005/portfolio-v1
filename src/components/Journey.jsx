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

        <div className="why-me-top">
          <div className="why-me-title">
            <span className="section-label">Why Me?</span>

            <h2>
              why
              consider me?
            </h2>
          </div>

          <div className="why-me-intro">
            <span className="why-me-line"></span>

            <p>
              I am focused on building practical skills through real projects,
              consistent practice, and continuous improvement.
            </p>
          </div>
        </div>

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

        <div className="why-me-bottom">
          <span>01 — BUILD</span>
          <span>02 — LEARN</span>
          <span>03 — DEBUG</span>
          <span>04 — IMPROVE</span>
        </div>

      </div>
    </section>
  );
}

export default Journey;