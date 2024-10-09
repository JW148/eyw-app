import ContentHeader from "../../components/ui/contentHeader";
import TrainingCard from "../../components/training/trainingCard";
import { getTrainings } from "../../lib/data";

export default async function Page() {
  const trainings = await getTrainings();
  return (
    <>
      <ContentHeader title={"Training"} colour={"eywnavy-1000"} />
      <div className="flex flex-col text-center min-h-[100vh]">
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {trainings &&
            trainings.map((training) => <TrainingCard training={training} />)}
        </div>
      </div>
    </>
  );
}
