import dynamic from "next/dynamic";
import React from "react";

const HeavyComponent = dynamic(() => import("./HeavyComponent") as Promise<{ default: React.ComponentType<any> }>, {
  loading: () => <p>Loading...</p>,
  ssr: false, // Optionally disable server-side rendering for this component
});

export default function DynamicComponent() {
  return (
    <div>
      <h2>This component loads a heavy component dynamically</h2>
      <HeavyComponent />
    </div>
  );
}
