import { getTraining } from "../../../lib/data";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Back } from "../../../components/ui/back";
import { urlFor } from "../../../../sanity/lib/image";
import { Card, CardFooter } from "@nextui-org/react";
import Player from "next-video/player";

export default async function Page({ params: { slug } }) {
  //get resource by slug
  const training = await getTraining(slug);

  const components = {
    list: {
      bullet: ({ children }) => <ul className="list-disc ">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,
    },
    block: {
      h1: ({ children }) => (
        <p className="text-2xl text-center m-10 font-semibold underline">
          {children}
        </p>
      ),
      normal: ({ children }) => <p className="pb-4">{children}</p>,
    },
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
        <div className="grid grow grid-cols-4 top-0  bg-gradient-to-t from-slate-100 backdrop z-10 items-center justify-items-center text-center ">
          <Back />
          <div className="flex flex-col col-span-2 text-eywnavy-1000">
            <p className="text-4xl md:text-5xl mb-4 font-bold ">
              {training?.title}
            </p>
          </div>
          <Image
            src={"/eyw-logo-small.png"}
            width={100}
            height={100}
            alt="Small EYW logo"
            className="self-start md:self-center"
          />
        </div>
      </div>
      <Card className="flex w-[50vw] self-center text-eywnavy-1000 p-6 mb-20 mt-5">
        <div className="text-large mb-6">
          <PortableText
            value={training?.introduction}
            components={components}
          />
        </div>
        <div className="flex rounded-xl">
          <Player src={training.videoUrl} />
        </div>
        <div className="flex h-[75px] relative mt-10">
          <Image
            src={"/eyw_resource_banner.png"}
            fill
            className="object-contain"
            alt="Resource footer logos"
          />
        </div>
      </Card>
    </div>
  );
}
