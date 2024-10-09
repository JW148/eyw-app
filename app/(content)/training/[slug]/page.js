import { getTraining } from "../../../lib/data";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Back } from "../../../components/ui/back";
import { urlFor } from "../../../../sanity/lib/image";
import { Card } from "@nextui-org/react";
import Player from "next-video/player";

export default async function Page({ params: { slug } }) {
  //get resource by slug
  const training = await getTraining(slug);
  console.log(training);

  const components = {
    list: {
      bullet: ({ children }) => <ul className="list-disc">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
    block: {},
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex w-full relative h-[35vh]">
        <Image
          src={training.imageURL}
          fill={true}
          className="object-cover"
          alt="Training header image"
        />
        <div className="grid grow grid-cols-6 top-0  bg-gradient-to-t from-slate-100 backdrop z-10 items-center justify-items-center text-center ">
          <Back />
          <div className="flex flex-col col-span-4 text-eywnavy-1000">
            <p className="text-5xl mb-4 font-bold ">{training?.title}</p>
          </div>
          <Image
            src={"/eyw-logo-small.png"}
            width={100}
            height={100}
            alt="Small EYW logo"
          />
        </div>
      </div>
      <div className="flex w-[50vw] my-20 self-center">
        <Player src={training.videoUrl} className="shadow-xl" />
      </div>
    </div>
  );
}
