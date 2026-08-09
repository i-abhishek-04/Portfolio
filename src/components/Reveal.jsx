import useReveal from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
