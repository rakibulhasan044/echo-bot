"use client";

import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  if (users === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <UserButton>User button</UserButton>
          <Button className="cursor-pointer" onClick={() => addUser()}>
            Add
          </Button>
          <div className="max-w-sm w-full ">
            {users ? JSON.stringify(users, null, 2) : "Loading..."}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be signed in!</p>
        <SignInButton>Sign in</SignInButton>
      </Unauthenticated>
    </>
  );
}
