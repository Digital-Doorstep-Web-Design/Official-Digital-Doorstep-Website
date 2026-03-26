"use client";

import React, { useEffect, useState } from "react";

// Address assembled from parts at runtime — never present in SSR HTML,
// preventing regex-based bot harvesting of the raw string.
const U = "jhepworth";
const D = "digitaldoorstep";
const T = "net";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function EmailLink({ className, style }: Props) {
  const [addr, setAddr] = useState("");

  useEffect(() => {
    setAddr(`${U}@${D}.${T}`);
  }, []);

  if (!addr) return null;

  return (
    <a href={`mailto:${addr}`} className={className} style={style} aria-label={`Email ${addr}`}>
      {addr}
    </a>
  );
}
