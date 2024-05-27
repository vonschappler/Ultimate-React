"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <div className="max-w-[80%] rounded-lg bg-red-600 bg-opacity-50 p-6">
        <span className="whitespace-pre break-words">{error.stack}</span>
      </div>
      <button
        className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
