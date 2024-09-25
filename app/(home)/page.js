import Image from "next/image";
import { getPosts, getPost } from "../lib/data";

export default async function Home() {
  const post = await getPost("video-test");
  console.log(post);
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
      <iframe
        src={post.fileUrl}
        frameborder="0"
        allowfullscreen
        width={"200px"}
        height={"400px"}
      />
    </div>
  );
}
