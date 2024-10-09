import ContentHeader from "../../components/ui/contentHeader";
import ResourceCard from "../../components/resources/resourceCard";

export default async function Page() {
  return (
    <>
      <ContentHeader title={"Training"} colour={"eywnavy-1000"} />
      <div className="flex flex-col text-center min-h-[100vh]">
        <div className="flex flex-row gap-6 flex-wrap justify-center"></div>
      </div>
    </>
  );
}
