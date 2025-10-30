import React from "react";

export function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    e.currentTarget.click();
  }
}
