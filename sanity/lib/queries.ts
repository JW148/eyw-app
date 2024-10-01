import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, "imageUrl": image.asset->url
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage, "fileUrl": video.asset->url
}`);

export const SUPPORT_QUERY = defineQuery(`
  *[_type == "support"]
  `);

export const RESOURCES_QUERY = defineQuery(
  `*[_type == "resource"][]{..., "imageURL": headerImage.asset->url}`
);

export const RESOURCE_QUERY = defineQuery(
  `*[_type == "resource" && slug.current == $slug][0]{..., "imageURL": headerImage.asset->url}`
);
