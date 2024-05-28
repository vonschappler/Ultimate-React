import { signInAction } from "@/app/_lib/actions";
import Image from "next/image";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium">
        <div className="relative h-[24px] w-[24px]">
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            className="object-cover"
            fill
          />
        </div>
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
