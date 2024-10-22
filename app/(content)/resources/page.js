import ContentHeader from "../../components/ui/contentHeader";
import ResourceCard from "../../components/resources/resourceCard";
import { getResources } from "../../lib/data";

export default async function Page() {
  const resources = await getResources();
  return (
    <>
      <ContentHeader title={"Resources"} colour={"eywnavy-1000"} />
      <div className="flex flex-col w-full items-center text-center min-h-[100vh] mt-10">
        <div className="flex flex-row w-[90%] md:w-[75%]  gap-6 flex-wrap justify-center">
          {resources &&
            resources.map((resource, i) => (
              <ResourceCard resource={resource} key={i} />
            ))}
        </div>
      </div>
    </>
  );
}
