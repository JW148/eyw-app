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
      <div className="grid grid-cols-4 items-center pb-14 md:pb-20 pt-10 bg-gradient-to-b from-eywteal-1000/75 h-[30vh] md:h-[35vh]">
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
        <div className="col-span-2 flex flex-col text-center">
          <p
            className={`text-5xl md:text-6xl pt-2 font-semibold md:font-bold text-${colour}`}
          >
            {title}
          </p>
        </div>
      </div>
      <Sidenav isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
