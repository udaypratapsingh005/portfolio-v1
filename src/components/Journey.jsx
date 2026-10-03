import { FiCode, FiGithub, FiGlobe } from "react-icons/fi";

function Journey() {
  return (
    <section id="why-me" className="why-me section">
      <div className="container">

        <div className="why-me-wrapper">

          {/* =========================
              LEFT — WHY ME
          ========================= */}

          <div className="why-me-heading">

            <span className="section-label">
              WHY ME?
            </span>

            <h2>
              why
              <br />
              consider
              <br />
              me?
            </h2>
          </div>


          {/* =========================
              RIGHT — ID CARD
          ========================= */}

          <div className="developer-card-wrapper">

            <div className="developer-card">

              {/* Card grid */}
              <div className="developer-card-grid"></div>

              {/* Top */}
              <div className="developer-card-top">

                <span className="developer-card-number">
                  01
                </span>

                <span className="developer-card-type">
                  DEVELOPER ID
                </span>

                <span className="developer-card-icon">
                  <FiCode />
                </span>

              </div>


              {/* Photo */}
              <div className="developer-photo-wrapper">

                <div className="developer-photo-glow"></div>

                <div className="developer-photo">
                  <img
                    src="/images/profile-photo.jpeg"
                    alt="Uday Pratap Singh"
                  />
                </div>

              </div>


              {/* Information */}
              <div className="developer-info">

                <span className="developer-label">
                  NAME
                </span>

                <h3>
                  UDAY PRATAP SINGH
                </h3>

                <span className="developer-role">
                  FULL STACK DEVELOPER
                </span>

              </div>


              {/* Tech */}
              <div className="developer-tech">

                <span>REACT</span>
                <span>NODE.JS</span>
                <span>EXPRESS.JS</span>
                <span>MONGODB</span>

              </div>


              {/* Bottom */}
              <div className="developer-card-bottom">

                <div className="developer-status">
                  <span></span>
                  AVAILABLE
                </div>

                <div className="developer-links">

                  <FiGithub />
                  <FiGlobe />

                </div>

              </div>


              {/* Decorative code */}
              <div className="developer-code">
                {"<"} / DEVELOPER {">"}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Journey;