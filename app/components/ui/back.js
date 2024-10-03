"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { IoChevronBack } from "react-icons/io5";

export function Back() {
  const router = useRouter();
  return (
    <Button
      isIconOnly
      className="bg-transparent"
      onClick={() => router.back()}
      disableRipple={true}
    >
      <IoChevronBack size={36} color="#2D3E6E" />
    </Button>
  );
}
