"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className="bg-cyan-500 hover:bg-cyan-600" onClick={() => reset()}>
        Please try again.
      </button>
    </div>
  );
}
