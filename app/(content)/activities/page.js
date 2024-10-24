import ContentHeader from "../../components/ui/contentHeader";
import ActivityCard from "../../components/activities/activityCard";
import { getActivities } from "../../lib/data";

export default async function Page() {
  const activities = await getActivities();
  return (
    <>
      <ContentHeader title={"Activities"} colour={"eywnavy-1000"} />
      <div className="flex flex-col w-full items-center text-center min-h-[100vh] mt-10">
        <div className="flex flex-row w-[90%] md:w-[75%]  gap-6 flex-wrap justify-center">
          {activities &&
            activities.map((activity, i) => (
              <ActivityCard activity={activity} key={i} />
            ))}
        </div>
      </div>
    </>
  );
}
