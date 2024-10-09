import ContentHeader from "../../components/ui/contentHeader";
import ActivityCard from "../../components/activities/activityCard";
import { getActivities } from "../../lib/data";

export default async function Page() {
  const activities = await getActivities();
  return (
    <>
      <ContentHeader title={"Activities"} colour={"eywnavy-1000"} />
      <div className="flex flex-col text-center min-h-[100vh]">
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {activities &&
            activities.map((activity) => <ActivityCard activity={activity} />)}
        </div>
      </div>
    </>
  );
}
