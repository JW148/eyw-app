"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";

export default function Footer() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <footer className="flex flex-col w-full h-[30vh] items-center justify-center">
      {session ? (
        <>
          <p className="font-light text-md text-gray-600">
            Signed in as {session.user.name}
          </p>
          <Button
            className="flex mt-2 mx-auto w-[25%] md:w-[10%] text-base text-slate-600 bg-white border-1 border-slate-400 hover:bg-slate-100 "
            onClick={() => signOut()}
            radius="none"
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Button
          className="flex mt-2 mx-auto w-[25%] md:w-[10%] text-base text-slate-600 bg-white border-1 border-slate-400 hover:bg-slate-100 "
          onClick={() => signIn()}
          radius="none"
        >
          Sign In
        </Button>
      )}
      <p className="font-extralight">© Early Years Wales 2018</p>
    </footer>
  );
}
