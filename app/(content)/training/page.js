import ContentHeader from "../../components/ui/contentHeader";
import TrainingCard from "../../components/training/trainingCard";
import { getTrainings } from "../../lib/data";

export default async function Page() {
  const trainings = await getTrainings();
  return (
    <>
      <ContentHeader title={"Training"} colour={"eywnavy-1000"} />
      <div className="flex flex-col w-full items-center text-center min-h-[100vh] mt-10">
        <div className="flex flex-row w-[90%] md:w-[75%]  gap-6 flex-wrap justify-center">
          {trainings &&
            trainings.map((training, i) => (
              <TrainingCard training={training} key={i} />
            ))}
        </div>
      </div>
    </>
  );
}
