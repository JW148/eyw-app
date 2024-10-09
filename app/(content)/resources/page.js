import ContentHeader from "../../components/ui/contentHeader";
import ResourceCard from "../../components/resources/resourceCard";
import { getResources } from "../../lib/data";

export default async function Page() {
  const resources = await getResources();
  return (
    <>
      <ContentHeader title={"Resources"} colour={"eywnavy-1000"} />
      <div className="flex flex-col text-center min-h-[100vh]">
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {resources &&
            resources.map((resource) => <ResourceCard resource={resource} />)}
        </div>
      </div>
    </>
  );
}
