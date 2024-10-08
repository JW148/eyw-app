import { getResource } from "../../../lib/data";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Back } from "../../../components/ui/back";
import { urlFor } from "../../../../sanity/lib/image";
import { Card } from "@nextui-org/react";

export default async function Page({ params: { slug } }) {
  //get resource by slug
  const resource = await getResource(slug);
  console.log(resource);

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
        <Image src={resource.imageURL} fill={true} className="object-cover" />
        <div className="grid grow grid-cols-6 top-0  bg-gradient-to-t from-slate-100 backdrop z-10 items-center justify-items-center text-center ">
          <Back />
          <div className="flex flex-col col-span-4 text-eywnavy-1000">
            <p className="text-5xl mb-4 font-bold ">{resource?.title}</p>
          </div>
          <Image src={"/eyw-logo-small.png"} width={100} height={100} />
        </div>
      </div>
      <Card
        className="flex w-[50vw] self-center p-6 mb-20 mt-5 text-eywnavy-1000"
        shadow="lg"
      >
        <p className="text-2xl text-center m-10 underline font-semibold">
          {resource?.subheading}
        </p>
        <div className="flex w-full self-center text-justify text-large px-10 mb-6">
          <PortableText
            value={resource?.introduction}
            components={components}
          />
        </div>
        {resource.body &&
          resource.body.map((block) => {
            return (
              <div className="flex w-full self-center flex-col items-center">
                <div className="flex flex-col my-6 text-justify text-white text-large rounded-2xl bg-eywpurple-750 p-10">
                  {block.itemTitle && (
                    <p className="font-semibold text-2xl mb-8">
                      {block.itemTitle}
                    </p>
                  )}
                  <PortableText
                    value={block.supportText}
                    components={components}
                  />
                </div>
                {block.image && (
                  <div className="flex relative w-full min-h-[500px]">
                    <Image
                      src={urlFor(block.image).url()}
                      fill={true}
                      className="object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
            );
          })}
      </Card>
    </div>
  );
}
