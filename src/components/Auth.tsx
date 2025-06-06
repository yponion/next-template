import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { use } from "react";

export default function Auth() {
  const session = use(auth());
  if (session?.user)
    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">SignOut</Button>
      </form>
    );

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  );
}
