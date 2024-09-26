import Image from "next/image";
import { getPosts, getPost, getSupportContent } from "../lib/data";
import SupportTile from "../components/supportCard/supportTile";

export default async function Home() {
  // const post = await getPost("video-test");
  // console.log(post);
  const supportContent = await getSupportContent();
  console.log(supportContent);
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
      <div className="flex flex-row flex-wrap justify-center">
        {supportContent &&
          supportContent.map((content) => <SupportTile content={content} />)}
      </div>
    </div>
  );
}
