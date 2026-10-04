import { useEffect, useState } from "react";
import {
  FiCode,
  FiUser,
  FiGlobe,
  FiTerminal,
} from "react-icons/fi";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let currentProgress = 0;

    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 5) + 2;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);

        setTimeout(() => {
          setIsLeaving(true);

          setTimeout(() => {
            onComplete();
          }, 700);
        }, 450);
      }

      setProgress(currentProgress);
    }, 45);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className={`preloader ${isLeaving ? "preloader-exit" : ""}`}>
      <div className="preloader-grid"></div>

      <div className="preloader-glow preloader-glow-one"></div>
      <div className="preloader-glow preloader-glow-two"></div>

      <div className="preloader-content">
        {/* ICONS */}
        <div className="preloader-icons">
          <div className="preloader-icon preloader-icon-one">
            <FiCode />
          </div>

          <div className="preloader-icon preloader-icon-two">
            <FiUser />
          </div>

          <div className="preloader-icon preloader-icon-three">
            <FiGlobe />
          </div>
        </div>

        {/* SMALL LABEL */}
        <div className="preloader-kicker">
          <FiTerminal />
          <span>INITIALIZING PORTFOLIO</span>
        </div>

        {/* HEADING */}
        <h1 className="preloader-title">
          <span>WELCOME TO MY</span>
          <span>PORTFOLIO</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="preloader-description">
          Building digital experiences that feel alive.
        </p>

        {/* BRAND */}
        <div className="preloader-brand">
          <span>UDAY PRATAP</span>
          <b>.</b>
          <span>SINGH</span>
        </div>

        {/* STATUS */}
        <div className="preloader-status">
          <span>
            {progress < 100 ? "LOADING SYSTEM" : "SYSTEM READY"}
          </span>

          <span>{String(progress).padStart(3, "0")}%</span>
        </div>

        {/* PROGRESS */}
        <div className="preloader-progress">
          <div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="preloader-footer">
          <span>REACT</span>
          <span>•</span>
          <span>NODE.JS</span>
          <span>•</span>
          <span>MONGODB</span>
        </div>
      </div>

      <div className="preloader-corner preloader-corner-tl"></div>
      <div className="preloader-corner preloader-corner-tr"></div>
      <div className="preloader-corner preloader-corner-bl"></div>
      <div className="preloader-corner preloader-corner-br"></div>
    </div>
  );
}

export default Preloader;