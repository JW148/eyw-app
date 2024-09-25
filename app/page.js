import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col text-center h-[100vh]">
      <div className="flex flex-col relative bg-gradient-to-b from-[#99CABE] h-[40vh] py-10">
        <Image
          src={"/eyw-logo-small.png"}
          width={100}
          height={100}
          className="absolute top-5 left-5"
        />
        <p className="text-9xl">Welcome</p>
        <p>Early Years Physical Literacy App</p>
      </div>
    </div>
  );
}
