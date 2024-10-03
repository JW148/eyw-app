import ContentHeader from "../../components/ui/contentHeader";
import ResourceCard from "../../components/resources/resourceCard";
import { getResources } from "../../lib/data";

export default async function Page() {
  const resources = await getResources();
  return (
    <>
      <ContentHeader title={"Resources"} colour={"eywpurple"} />
      <div className="flex flex-col text-center h-[100vh]">
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {resources &&
            resources.map((resource) => <ResourceCard resource={resource} />)}
        </div>
      </div>
    </>
  );
}
