"use client";

export default function Button({ active, children, handleClick }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${active && "bg-primary-700 text-primary-50"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
