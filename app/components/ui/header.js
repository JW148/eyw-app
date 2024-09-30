"use client";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

import Sidenav from "./sidenav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="grid grid-cols-6 items-center pb-20 pt-10 bg-gradient-to-b from-[#77B7A8] to-100%">
        <div className="flex justify-center">
          <Button
            isIconOnly
            className="bg-transparent"
            onClick={toggleDrawer}
            disableRipple={true}
          >
            <IoMenu size={36} color="#2D3E6E" />
          </Button>
        </div>
        <div className="col-span-4 flex flex-col text-center">
          <Image
            src={"/eyw-logo.png"}
            width={400}
            height={300}
            className="mx-auto"
          />
          <p className="text-2xl pt-2 font-light text-[#2D3E6E]">
            Physical Literacy App
          </p>
        </div>
      </div>
      <Sidenav isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
