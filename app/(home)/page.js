import Image from "next/image";
import { getPosts, getPost, getSupportContent } from "../lib/data";
import SupportTile from "../components/supportCard/supportTile";

export default async function Home() {
  // const post = await getPost("video-test");
  // console.log(post);
  // const supportContent = await getSupportContent();
  // console.log(supportContent);
  return (
    <div className="flex flex-col text-center h-[100vh]">
      <div className="flex flex-row flex-wrap justify-center">
        {/* {supportContent &&
          supportContent.map((content) => <SupportTile content={content} />)} */}
      </div>
    </div>
  );
}
