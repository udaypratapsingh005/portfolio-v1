import { useEffect, useRef } from "react";

function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");

          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal scroll-reveal-${variant} ${className}`}
      style={{
        "--reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;