const base = { fill: "currentColor", "aria-hidden": true };

export function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.79 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55 4.52-1.51 7.78-5.76 7.78-10.78C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M23.5 6.9a3.02 3.02 0 0 0-2.13-2.14C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.37.46A3.02 3.02 0 0 0 .5 6.9 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.1 3.02 3.02 0 0 0 2.13 2.14c1.87.46 9.37.46 9.37.46s7.5 0 9.37-.46a3.02 3.02 0 0 0 2.13-2.14A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.1ZM9.6 15.5V8.5l6.27 3.5-6.27 3.5Z" />
    </svg>
  );
}

export function TwitterIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M18.9 2H22l-7.6 8.68L23.3 22h-6.9l-5.4-7.07L4.8 22H1.7l8.1-9.27L1 2h7.07l4.9 6.47L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M13.5 22v-8.4h2.8l.42-3.27h-3.22V8.2c0-.95.26-1.6 1.63-1.6h1.74V3.68C16.56 3.62 15.6 3.5 14.5 3.5c-2.5 0-4.2 1.53-4.2 4.33v2.5H7.5v3.27h2.8V22h3.2Z" />
    </svg>
  );
}

// Tech Stack Icons
export function ReactIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-cyan-400 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function NextIcon({ size = 15, className = "" }) {
  return (
    <span className={`font-bold font-mono text-[10px] text-white ${className}`}>N.</span>
  );
}

export function TypescriptIcon({ size = 15, className = "" }) {
  return (
    <span className={`font-bold font-mono text-[10px] text-blue-400 bg-blue-950/60 border border-blue-500/40 rounded px-1 ${className}`}>TS</span>
  );
}

export function PythonIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-yellow-400 ${className}`} fill="currentColor">
      <path d="M12 2c-3.3 0-5 1.5-5 3.5v2.5h5v1H5.5C3.5 9 2 10.7 2 14c0 3.3 1.5 5 3.5 5h2.5v-2.5c0-1.5 1.2-2.5 2.5-2.5h5c1.3 0 2.5-1.2 2.5-2.5V7.5c0-2-1.7-3.5-3.5-3.5H12Zm-2 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export function FastapiIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-emerald-400 ${className}`} fill="currentColor">
      <path d="M12 2L2 12h9l-1 10 12-12h-9l1-8Z" />
    </svg>
  );
}

export function NodeIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-green-500 ${className}`} fill="currentColor">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2Z" />
    </svg>
  );
}

export function PostgresIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-sky-400 ${className}`} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 15h-2v-6h2v6Zm4 0h-2v-6h2v6Z" />
    </svg>
  );
}

export function MongoIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-emerald-500 ${className}`} fill="currentColor">
      <path d="M12 2s-6 7.5-6 12a6 6 0 0 0 12 0c0-4.5-6-12-6-12Z" />
    </svg>
  );
}

export function DockerIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-blue-400 ${className}`} fill="currentColor">
      <path d="M4 12h3v3H4zm4 0h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3zM4 8h3v3H4zm4 0h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3H8z" />
    </svg>
  );
}

export function TailwindIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-cyan-400 ${className}`} fill="currentColor">
      <path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 0.4 1.7 1.1 2.5 1.9 1.3 1.3 2.8 2.8 6.6 2.8 3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-0.4-1.7-1.1-2.5-1.9-1.3-1.3-2.8-2.8-6.6-2.8Z" />
    </svg>
  );
}

export function GitIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-orange-500 ${className}`} fill="currentColor">
      <path d="M21.6 10.9l-8.5-8.5c-.8-.8-2.1-.8-2.9 0L8.1 4.5l3.7 3.7c.8-.3 1.8-.1 2.4.6.6.6.8 1.6.5 2.4l3.5 3.5c.8-.3 1.8-.1 2.4.6.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.8-1.6-.5-2.4l-3.3-3.3v4.6c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.7.5-.9V8.6c-.3-.2-.5-.5-.5-.9 0-.6.3-1.1.8-1.3L8.5 2.7 2.4 8.8c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.8.8-2.1 0-2.9z" />
    </svg>
  );
}

export function LinuxIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-yellow-500 ${className}`} fill="currentColor">
      <path d="M12 2C8.7 2 6 4.7 6 8c0 2.5 1.5 4.7 3.7 5.5L8.5 19h7l-1.2-5.5C16.5 12.7 18 10.5 18 8c0-3.3-2.7-6-6-6Z" />
    </svg>
  );
}

export function LangchainIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-emerald-400 ${className}`} fill="currentColor">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

export function QdrantIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-purple-400 ${className}`} fill="currentColor">
      <rect x="5" y="5" width="14" height="14" rx="3" />
    </svg>
  );
}

export function FirebaseIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`text-amber-500 ${className}`} fill="currentColor">
      <path d="M3.89 15.67L6.8 2.15a.5.5 0 0 1 .94-.13l2.84 5.38 2.8-5.35a.5.5 0 0 1 .92.05l2.8 13.57L3.89 15.67Z" />
    </svg>
  );
}

export function TelegramIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.42.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.82-1.59 4.61-1.87 5.13-1.88.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.22z" />
    </svg>
  );
}
