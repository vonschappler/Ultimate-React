import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        Thank you for your reservation!
      </h1>
      <Link
        href="/account/reservations"
        className="inline-block text-xl text-accent-500 underline"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}
