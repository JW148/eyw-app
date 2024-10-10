import Image from "next/image";
import { getActivities, getLatestActivity, getResources } from "../lib/data";
import ResourceCard from "../components/resources/resourceCard";
import ActivityCard from "../components/activities/activityCard";
import LatestActivityCard from "../components/activities/latestActivityCard";

export default async function Home() {
  const resources = await getResources();
  const activities = await getActivities();
  // const latestActivity = await getLatestActivity();
  return (
    <div className="flex w-full flex-col  items-center">
      <div className="flex flex-col w-[90%] md:w-[60%] ">
        {/* <p className="text-4xl text-eywnavy-1000 my-20">This Week's Activity</p>
        {latestActivity && <LatestActivityCard activity={latestActivity} />} */}
        <p className="text-4xl text-eywnavy-1000 my-20">Resources</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {resources &&
            resources.map((resource, i) => (
              <ResourceCard resource={resource} key={i} />
            ))}
        </div>
        <p className="text-4xl text-eywnavy-1000 my-20">Activities</p>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {activities &&
            activities.map((activity, i) => (
              <ActivityCard activity={activity} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
