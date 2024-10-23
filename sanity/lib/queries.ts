import { defineQuery } from "next-sanity";

//query that returns the 4 most recently modified resources
export const HOME_RESOURCES_QUERY = defineQuery(
  `*[_type == "resource"]| order(_updatedAt desc)[0...4]{slug, title, headerImage}`
);

//query that returns the 4 most recently modified activities
export const HOME_ACTIVITIES_QUERY = defineQuery(
  `*[_type == "activity"]| order(_updatedAt desc)[0...4]{slug, title, headerImage}`
);

//returns all resource entries with the 3 fields requried. Returns newest created resource first
export const RESOURCES_QUERY = defineQuery(
  `*[_type == "resource"]| order(_createdAt desc){slug, title, headerImage}`
);

//returns the requested resource by slug, with joins to also return the related activity entries
export const RESOURCE_QUERY = defineQuery(
  `*[_type == "resource" && slug.current == $slug][0]{..., relatedActivities[]->, "translationSlug": translation->slug.current}`
);

//returns all activity entries with the 3 fields requried, ordered by newest created first
export const ACTIVITIES_QUERY = defineQuery(
  `*[_type == "activity"]| order(_updatedAt desc){slug, title, headerImage}`
);

//returns the requested activity by slug
export const ACTIVITY_QUERY = defineQuery(
  `*[_type == "activity" && slug.current == $slug][0]{..., "translationSlug": translation->slug.current}`
);

//returns all training entries, ordered by newest created first
export const TRAININGS_QUERY = defineQuery(
  `*[_type == "training"]| order(_updatedAt desc){slug, title, headerImage}`
);

//returns the requested training entry by slug and joins the video asset url
export const TRAINING_QUERY = defineQuery(
  `*[_type == "training" && slug.current == $slug][0]{..., "videoUrl": video.asset->url, "translationSlug": translation->slug.current}`
);

export const FETCH_LATEST_ACTIVITY = defineQuery(
  `*[_type == "activity"]| order(_createdAt desc)[0]{..., "imageURL": headerImage.asset->url}`
);

//returns the requested resource by slug, with joins to also return the related activity entries
export const RESOURCE_CYM_QUERY = defineQuery(
  `*[_type == "adnodd" && slug.current == $slug][0]`
);

//returns the requested activity by slug
export const ACTIVITY_CYM_QUERY = defineQuery(
  `*[_type == "gweithgaredd" && slug.current == $slug][0]`
);

//returns the requested training entry by slug and joins the video asset url
export const TRAINING_CYM_QUERY = defineQuery(
  `*[_type == "hyfforddi" && slug.current == $slug][0]{..., "videoUrl": video.asset->url}`
);
