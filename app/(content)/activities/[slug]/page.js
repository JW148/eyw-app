import { getAcitvity } from "../../../lib/data";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Back } from "../../../components/ui/back";
import { urlFor } from "../../../../sanity/lib/image";
import { Card } from "@nextui-org/react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export default async function Page({ params: { slug } }) {
  //get activity by slug
  const activity = await getAcitvity(slug);
  console.log(activity);

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
        <Image src={activity?.imageURL} fill={true} className="object-cover " />
        <div className="grid grow grid-cols-6 top-0  bg-gradient-to-t from-slate-100 backdrop z-10 items-center justify-items-center text-center ">
          <Back />
          <div className="flex flex-col col-span-4 text-eywcoral-750">
            <p className="text-5xl mb-4 font-bold text-eywnavy-1000">
              {activity?.title}
            </p>
          </div>
          <Image src={"/eyw-logo-small.png"} width={100} height={100} />
        </div>
      </div>
      <Card
        className="flex w-[50vw] self-center text-eywnavy-1000 p-6 mb-20 mt-5"
        shadow="lg"
      >
        <div className="flex flex-col w-full text-justify text-large px-10 mb-6 ">
          <PortableText
            value={activity?.introduction}
            components={components}
          />
        </div>
        <div className="flex flex-col w-full text-justify text-large rounded-2xl bg-eywcoral-1000/85 text-white p-10">
          <p className="text-3xl font-semibold pb-4">Method</p>
          <PortableText value={activity?.method} components={components} />
        </div>
        {activity.tip && (
          <div className="flex flex-col w-full text-justify text-large rounded-2xl bg-eywteal-1000/85 text-white p-10 mt-6 relative">
            <MdOutlineTipsAndUpdates
              className="absolute top-2 right-2 text-eywyellow-750 origin-center "
              size={54}
            />
            <p className="text-3xl font-semibold pb-4">Tip</p>
            <PortableText value={activity?.tip} components={components} />
          </div>
        )}
        <div className="flex w-full flex-col my-20">
          <p className="text-3xl font-semibold mb-10 self-center">
            Activity Gallery
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-center">
            {activity.galleryImages?.map((image) => (
              <div className="flex flex-col w-[48%]">
                <div className="flex w-full h-[300px] relative">
                  <Image
                    src={urlFor(image).url()}
                    fill
                    key={image._key}
                    className="object-cover rounded-xl "
                  />
                  <p className="absolute bottom-5 right-5 text-slate-500 text-xs">
                    {image.attribution}
                  </p>
                </div>
                <p className="mt-4">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
