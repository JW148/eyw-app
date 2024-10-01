import { getResource } from "../../../lib/data";
import { PortableText } from "@portabletext/react";
import ContentHeader from "../../../components/ui/contentHeader";
import Image from "next/image";

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
    <div className="flex flex-col">
      <div className="flex w-screen relative h-[30vh]">
        <Image
          src={resource.imageURL}
          fill={true}
          className="object-cover -z-10"
        />
        <div className="flex top-0 grow bg-gradient-to-b from-gray-700 z-10 items-center justify-center">
          <p className="text-5xl">{resource.title}</p>
        </div>
      </div>
      {resource.body &&
        resource.body.map((block) => {
          return (
            <div className="flex w-[60vw] self-center my-6 text-justify">
              <PortableText value={block.supportText} components={components} />
            </div>
          );
        })}
    </div>
  );
}
