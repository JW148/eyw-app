import Image from "next/image";
import { getActivities, getResources } from "../lib/data";
import ResourceCard from "../components/resources/resourceCard";
import ActivityCard from "../components/activities/activityCard";

export default async function Home() {
  const resources = await getResources();
  const activities = await getActivities();
  return (
    <div className="flex w-full flex-col  items-center">
      <div className="flex flex-col w-[60%] ">
        <p className="text-4xl text-eywnavy-1000 my-20">Resources</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {resources &&
            resources.map((resource) => <ResourceCard resource={resource} />)}
        </div>
        <p className="text-4xl text-eywnavy-1000 my-20">Activities</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {activities &&
            activities.map((activity) => <ActivityCard activity={activity} />)}
        </div>
      </div>
    </div>
  );
}
