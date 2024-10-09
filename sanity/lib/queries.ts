import { defineQuery } from "next-sanity";

export const RESOURCES_QUERY = defineQuery(
  `*[_type == "resource"][]{..., "imageURL": headerImage.asset->url}`
);

export const RESOURCE_QUERY = defineQuery(
  `*[_type == "resource" && slug.current == $slug][0]{..., "imageURL": headerImage.asset->url}`
);

export const ACTIVITIES_QUERY = defineQuery(
  `*[_type == "activity"][]{..., "imageURL": headerImage.asset->url}`
);

export const ACTIVITY_QUERY = defineQuery(
  `*[_type == "activity" && slug.current == $slug][0]{..., "imageURL": headerImage.asset->url}`
);

export const TRAININGS_QUERY = defineQuery(
  `*[_type == "training"][]{..., "imageURL": headerImage.asset->url, "videoUrl": video.asset->url}`
);

export const TRAINING_QUERY = defineQuery(
  `*[_type == "training" && slug.current == $slug][0]{..., "imageURL": headerImage.asset->url, "videoUrl": video.asset->url}`
);
