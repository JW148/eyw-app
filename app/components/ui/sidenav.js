import Drawer from "react-modern-drawer";
import Image from "next/image";
import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import { IoVideocamOutline, IoHomeOutline } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { PiPersonArmsSpread } from "react-icons/pi";

export default function Sidenav({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      size={"25vw"}
      className="relative"
      overlayOpacity={0.6}
    >
      <Image
        src={"/eyw-logo.png"}
        width={400}
        height={300}
        className="mx-auto p-2 mb-4"
      />
      <div className="flex flex-col px-11">
        <Link
          href={"/"}
          className="flex flex-row items-center mb-6 text-eywteal-1000"
        >
          <IoHomeOutline size={46} />
          <p className="pl-6 text-3xl font-medium hover:underline">Home</p>
        </Link>

        <Link
          href={"/training"}
          className="flex flex-row mb-6 text-eywyellow-1000"
        >
          <IoVideocamOutline size={46} />
          <p className="pl-6 text-3xl font-medium hover:underline">Training</p>
        </Link>

        <Link
          href={"/resources"}
          className="flex flex-row mb-6 text-eywpurple-1000"
        >
          <BsFileEarmarkText size={46} />
          <p className="pl-6 text-3xl font-medium hover:underline">Resources</p>
        </Link>

        <Link
          href={"/activities"}
          className="flex flex-row mb-6 text-eywcoral-1000"
        >
          <PiPersonArmsSpread size={46} />
          <p className="pl-6 text-3xl font-medium hover:underline">
            Activities
          </p>
        </Link>
      </div>
      <p className="absolute bottom-2 left-[25%] text-center">
        ©Early Years Wales
      </p>
    </Drawer>
  );
}
