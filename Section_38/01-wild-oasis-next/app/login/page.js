import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
