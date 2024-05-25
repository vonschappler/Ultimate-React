"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({ children, handleClick }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      onClick={handleClick}
      disabled={pending}
    >
      {pending ? "Processing data..." : <>{children}</>}
    </button>
  );
}
