import Link from "next/link";

function NotFound() {
  return (
    <main className="mt-4 h-full space-y-6 text-center">
      <div className="flex h-full flex-col items-center justify-center gap-12">
        <h1 className="text-3xl font-semibold">
          This cabin could not be found 😢
        </h1>
        <Link
          href="/cabins"
          className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
        >
          Back to all cabins
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
