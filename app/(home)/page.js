import Image from "next/image";
import {
  getHomeActivities,
  getLatestActivity,
  getHomeResources,
} from "../lib/data";
import ResourceCard from "../components/resources/resourceCard";
import ActivityCard from "../components/activities/activityCard";
import LatestActivityCard from "../components/activities/latestActivityCard";

export default async function Home() {
  const resources = await getHomeResources();
  const activities = await getHomeActivities();
  // const latestActivity = await getLatestActivity();
  return (
    <div className="flex w-full flex-col  items-center">
      <div className="flex flex-col w-[90%] md:w-[75%] text-center font-semibold">
        {/* <p className="text-4xl text-eywnavy-1000 my-20">This Week's Activity</p>
        {latestActivity && <LatestActivityCard activity={latestActivity} />} */}
        <p className="text-3xl md:text-4xl  text-eywnavy-1000 md:mt-20 mt-0 mb-8 md:mb-8">
          Resources
        </p>
        <div className="flex flex-row gap-6 flex-wrap justify-center ">
          {resources &&
            resources.map((resource, i) => (
              <ResourceCard resource={resource} key={i} />
            ))}
        </div>
        <p className="text-3xl md:text-4xl text-eywnavy-1000 mt-24 mb-8">
          Activities
        </p>
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
