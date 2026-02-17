import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/logo";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
