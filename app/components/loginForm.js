"use client";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";

export default function LoginForm() {
  const handleSubmit = async (event) => {
    //get the credentials from the form
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await signIn("credentials", {
        password: formData.get("pin"),
        callbackUrl: "/",
      });
      if (response.status === 401) {
        alert("Incorrect credentials. Plese try again.");
      }
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            setError("Invalid credentials.");
          default:
            setError("Something went wrong.");
        }
      }
      throw error;
    }
  };

  return (
    <div className="flex flex-col md:w-[450px] w-[90vw] p-6 rounded-3xl border shadow-2xl items-center bg-white mb-10">
      <Image
        src={"/eyw-logo.png"}
        width={400}
        height={300}
        className="mx-auto"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center"
      >
        <input
          className="w-[70%] p-4 h-12 rounded-xl bg-[#DDEDE9] mt-6"
          type="password"
          name="pin"
          placeholder="Pin"
        />
        <Button
          type="submit"
          className="flex w-[35%] bg-[#77B7A8] text-white text-lg font-extralight mx-auto mt-6"
          radius="md"
        >
          Enter
        </Button>
      </form>
    </div>
  );
}
