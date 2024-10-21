import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function ResourceCard({ resource }) {
  return (
    <Card
      shadow="lg"
      className="max-w-[400px]"
      isHoverable
      isPressable
      disableRipple
    >
      <Link href={`/resources/${resource.slug.current}`}>
        <CardBody>
          <Image
            src={resource.imageURL}
            width={300}
            height={300}
            className="rounded-lg"
            alt="Resource card main image"
            quality={70}
          />
        </CardBody>
        <CardFooter className="justify-center ">
          <p className="font-light text-lg text-eywnavy-1000">
            {resource.title}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
}
