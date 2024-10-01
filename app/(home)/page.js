import Image from "next/image";
import {
  getPosts,
  getPost,
  getSupportContent,
  getResources,
} from "../lib/data";
import ResourceCard from "../components/resources/resourceCard";

export default async function Home() {
  const resources = await getResources();
  return (
    <div className="flex flex-col text-center h-[100vh]">
      <div className="flex flex-row gap-6 flex-wrap justify-center">
        {resources &&
          resources.map((resource) => <ResourceCard resource={resource} />)}
      </div>
    </div>
  );
}
