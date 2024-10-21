import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function ActivityCard({ activity }) {
  return (
    <Card
      shadow="lg"
      className="max-w-[400px]"
      isHoverable
      isPressable
      disableRipple
    >
      <Link href={`/activities/${activity.slug.current}`}>
        <CardBody>
          <Image
            src={activity.imageURL}
            width={300}
            height={300}
            className="rounded-lg"
            alt="Activity card main iamge"
            quality={70}
          />
        </CardBody>
        <CardFooter className="justify-center ">
          <p className="font-light text-lg text-eywnavy-1000">
            {activity.title}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
}
