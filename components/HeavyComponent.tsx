import React from "react";

export default function HeavyComponent() {
  return (
    <div>
      <h3>This is a heavy component loaded dynamically!</h3>
      <p>It could contain large libraries, charts, or complex UI that benefit from code splitting.</p>
    </div>
  );
}
