"use client";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

import Sidenav from "./sidenav";

export default function ContentHeader({ title, colour }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="grid grid-cols-6 items-center pb-20 pt-10 bg-gradient-to-b from-eywteal h-[35vh]">
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
          <p className={`text-6xl pt-2 font-bold text-${colour}`}>{title}</p>
        </div>
      </div>
      <Sidenav isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
