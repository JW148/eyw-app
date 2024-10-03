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
    },
    block: {},
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex w-screen relative h-[35vh]">
        <Image
          src={resource.imageURL}
          fill={true}
          className="object-cover -z-10 rounded-b-[50%]"
        />
        <div className="grid grow grid-cols-6 top-0  bg-gradient-to-b from-gray-700 backdrop z-10 items-center justify-items-center text-center rounded-b-[50%]">
          <Back />
          <div className="flex flex-col col-span-4 text-white">
            <p className="text-5xl mb-4">{resource?.title}</p>
          </div>
          <Image src={"/eyw-logo-small.png"} width={100} height={100} />
        </div>
      </div>
      <Card className="flex w-[50vw] self-center my-10 p-6" shadow="lg">
        <p className="text-2xl text-center pb-6">{resource?.subheading}</p>
        <div className="flex w-full self-center text-justify text-large">
          <PortableText
            value={resource?.introduction}
            components={components}
          />
        </div>
        {resource.body &&
          resource.body.map((block) => {
            console.log(block);
            return (
              <div className="flex w-full self-center flex-col items-center">
                <div className="flex flex-col my-6 text-justify text-white text-large rounded-2xl bg-eywpurple/85 p-10">
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
                      className="object-cover rounded-md"
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
