"use client";

import { Agentation } from "agentation";

const endpoint =
  process.env.NEXT_PUBLIC_AGENTATION_ENDPOINT || "http://localhost:4747";

export default function AgentationProvider() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return <Agentation endpoint={endpoint} />;
}
