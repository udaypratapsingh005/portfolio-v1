import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_rhifrij",
        "template_z1knl5m",
        form.current,
        {
          publicKey: "67993rgpKlbAHW2sp",
        },
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-heading contact-heading">
          <span className="section-label">Contact</span>

          <h2 className="section-title">
            Let's build
            <br />
            something.
          </h2>

          <p className="section-description">
            Have a project, opportunity, or simply want to connect? Drop me a
            message and I'll get back to you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form
              ref={form}
              className="contact-form"
              onSubmit={sendEmail}
            >
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="user_name">Name</label>

                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user_email">Email</label>

                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows="7"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="primary-btn contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message ↗"}
              </button>

              {status === "success" && (
                <p className="form-status success">
                  Message sent successfully. I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="form-status error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className="contact-cta">
            <span className="contact-cta-number">01</span>

            <div>
              <h3>Open to opportunities</h3>

              <p>
                I'm interested in opportunities where I can continue learning,
                contribute to real projects, and grow as a developer.
              </p>

              <div className="contact-availability">
                <span></span>
                Available for new opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;